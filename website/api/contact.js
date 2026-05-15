// /api/contact.js
// Formulaire site -> Notification Telegram
// Compatible Vercel Serverless Function

module.exports = async function handler(req, res) {
  // Autorise les requêtes du site
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Réponse pour les pré-requêtes navigateur
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Test rapide dans le navigateur : /api/contact
  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      message: "API contact active",
    });
  }

  // On accepte uniquement POST pour le formulaire
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Méthode non autorisée",
    });
  }

  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return res.status(500).json({
        ok: false,
        error:
          "Variables Telegram manquantes. Vérifie TELEGRAM_BOT_TOKEN et TELEGRAM_CHAT_ID dans Vercel.",
      });
    }

    const body = req.body || {};

    const prenom = clean(body.prenom || body.name || body.nom || "");
    const email = clean(body.email || "");
    const telephone = clean(body.telephone || body.phone || "");
    const siteUrl = clean(body.site_url || body.site || body.website || "");
    const blocage = clean(body.blocage || body.besoin || body.service || "");
    const message = clean(body.message || "");
    const source = clean(body.source || "Site web Lauterfing Solutions");

    if (!prenom) {
      return res.status(400).json({
        ok: false,
        error: "Le prénom est obligatoire.",
      });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        ok: false,
        error: "Email invalide.",
      });
    }

    const text = [
      "🚨 Nouveau lead site web",
      "",
      "👤 Prénom : " + prenom,
      "📧 Email : " + email,
      "📞 Téléphone : " + (telephone || "Non renseigné"),
      "🌐 Site actuel : " + (siteUrl || "Non renseigné"),
      "🎯 Besoin : " + (blocage || "Non renseigné"),
      "",
      "💬 Message :",
      message || "Aucun message",
      "",
      "📍 Source : " + source,
      "🕒 Date : " + new Date().toLocaleString("fr-FR", {
        timeZone: "Europe/Paris",
      }),
    ].join("\n");

    const telegramResponse = await fetch(
      "https://api.telegram.org/bot" + botToken + "/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          disable_web_page_preview: true,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok || !telegramData.ok) {
      return res.status(500).json({
        ok: false,
        error: "Erreur Telegram",
        details: telegramData.description || telegramData,
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Formulaire envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur contact.js :", error);

    return res.status(500).json({
      ok: false,
      error: "Erreur serveur.",
      details: error.message,
    });
  }
};

function clean(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 1500);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}