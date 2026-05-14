# Lauterfing Solutions – Site vitrine

Ce dossier contient un site statique complet destiné à présenter l’activité de **Clément Lauterfing**, freelance spécialisé en développement d’activité web & IA pour artisans, TPE et prestataires B2B. Le site met en avant des services clairs, des offres détaillées et un formulaire de contact pour générer des demandes qualifiées.

## 1. Structure du projet

```
website/
├─ index.html           # page principale avec toutes les sections
├─ style.css            # styles du site (variables couleurs, mise en page, responsive)
├─ script.js            # interactions (menu mobile, interactions formulaire)
├─ assets/
│   └─ images/
│       ├─ hero.jpg     # image de la section hero (photo fournie)
│       └─ abstract-bg.png  # fond décoratif abstrait (optionnel)
├─ README.md            # ce fichier
├─ textes_malt_linkedin.md  # textes courts pour Malt et LinkedIn
├─ checklist_publication.md  # checklist de vérification avant mise en ligne
```

## 2. Ouvrir le site

1. Téléchargez ou clonez le dossier `website/` sur votre ordinateur.
2. Ouvrez le fichier `index.html` dans votre navigateur (double‑clique ou clic droit > Ouvrir avec).
3. Le site fonctionne sans serveur grâce au HTML/CSS/JS statique.

## 3. Modifier les textes et les prix

- Les textes principaux se trouvent directement dans le fichier `index.html`. Recherchez la section correspondante (Hero, Services, Méthode, Offres, etc.) et remplacez le texte entre les balises HTML (`<h1>…</h1>`, `<p>…</p>`, etc.).
- Les prix sont indiqués dans les balises `<p class="price">…</p>` des cartes de services et d’offres. Modifiez simplement les montants.
- Le slogan et la micro‑copie de la section Hero peuvent être remplacés pour tester d’autres accroches.

## 4. Personnaliser l’apparence

- Les couleurs et les polices sont définies dans `style.css` à travers les variables CSS dans la section `:root`. Pour changer les couleurs, modifiez la valeur hexadécimale (ex. `--color-primary: #0a3d62;`).
- Pour remplacer l’image de la section Hero, remplacez le fichier `assets/images/hero.jpg` par votre propre image (format JPG ou PNG) en conservant le même nom ou en modifiant la propriété `background-image` de `.hero` dans `style.css`.
- Vous pouvez ajouter d’autres images dans `assets/images/` et les utiliser dans les sections Cas d’usage en éditant le HTML.

## 5. Connecter le formulaire de contact

Par défaut, le formulaire utilise Formspree comme service d’envoi de messages. 

1. Créez un compte gratuit sur [Formspree](https://formspree.io/).
2. Créez un nouveau formulaire et récupérez l’ID (URL du type `https://formspree.io/f/abcxyz`).
3. Dans `index.html`, remplacez `yourformid` dans l’attribut `action="https://formspree.io/f/yourformid"` par votre ID.
4. Vous pouvez également remplacer l’attribut `action` par `mailto:votreadresse@example.com` pour ouvrir le client mail par défaut, mais cela dépendra du navigateur de l’utilisateur et n’apporte pas de stockage.
5. Pour utiliser Netlify Forms, ajoutez `data-netlify="true"` à `<form>` et publiez le site sur Netlify : les soumissions seront visibles depuis votre tableau de bord Netlify.

## 6. Déployer gratuitement

### GitHub Pages

1. Créez un dépôt GitHub et poussez le contenu du dossier `website/` à la racine du dépôt.
2. Dans les paramètres du dépôt, sélectionnez l’onglet **Pages**.
3. Choisissez la branche (ex. `main`) et le dossier `/(root)` et cliquez sur **Save**.
4. Votre site sera accessible à l’URL fournie par GitHub Pages (format `https://votreutilisateur.github.io/nom-du-depot`).

### Vercel

1. Inscrivez‑vous sur [Vercel](https://vercel.com/) et connectez votre compte GitHub.
2. Importez le dépôt contenant le dossier `website/`.
3. Laissez Vercel détecter qu’il s’agit d’un site statique (`framework: Other`).
4. Déployez. L’URL sera générée automatiquement (ex. `https://votre-projet.vercel.app`).

### Netlify

1. Inscrivez‑vous sur [Netlify](https://netlify.com/) et connectez votre dépôt GitHub.
2. Créez un nouveau site à partir de Git. Sélectionnez votre dépôt.
3. Choisissez `build command: none` et `publish directory: /` (puisque c’est un site statique).
4. Déployez. L’URL sera générée automatiquement (ex. `https://nom-projet.netlify.app`).

## 7. Conseils SEO et performances

- Les balises `<title>`, `<meta name="description">` et `<meta name="keywords">` sont déjà renseignées. Adaptez‑les à votre activité et à vos mots‑clés locaux pour améliorer le référencement.
- Optimisez les images avant publication (réduction de la taille et compression) pour améliorer les temps de chargement. Des outils comme [Squoosh](https://squoosh.app/) permettent de compresser des images sans perdre en qualité visible.
- Testez le site sur mobile et différents navigateurs pour vérifier le responsive.
- Utilisez [Lighthouse](https://developers.google.com/web/tools/lighthouse/) pour auditer les performances et l’accessibilité.

## 8. Modifier la fiche en local

Si vous souhaitez modifier le site sans connaissances techniques avancées :
- Utilisez un éditeur de texte moderne (Visual Studio Code, Atom, Brackets) pour ouvrir les fichiers.
- Sauvegardez vos modifications puis rafraîchissez la page dans le navigateur pour voir le résultat.

N’hésitez pas à adapter ce site à votre style : couleurs, typographies, contenus, images. Il est conçu pour être simple à entretenir et à faire évoluer.

