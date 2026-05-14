# Checklist avant publication

Utilisez cette liste pour vous assurer que tout est prêt avant de publier votre site « Lauterfing Solutions ».

## Design et contenu
- [ ] **Responsive** : tester le site sur mobile, tablette et bureau. Vérifier que le menu hamburger fonctionne et que les sections restent lisibles.
- [ ] **Typographies** : vérifier que les polices sont chargées et lisibles. 
- [ ] **Couleurs** : s’assurer que la palette correspond à votre identité (modifiable dans `style.css`).
- [ ] **Images** : compresser `hero.jpg` et autres visuels. Vérifier qu’elles se chargent rapidement. 
- [ ] **Textes** : relire pour corriger les fautes, adapter le ton et les accroches si nécessaire. 
- [ ] **Prix** : vérifier les montants affichés et les intitulés des offres.
- [ ] **Liens** : tester tous les liens internes (navigation) et externes (Malt, LinkedIn) pour s’assurer qu’ils s’ouvrent correctement.

## Formulaire
- [ ] **Action du formulaire** : remplacer `yourformid` dans l’attribut `action` de `<form>` par votre véritable ID Formspree ou votre `mailto:`.
- [ ] **Validations** : vérifier que les champs obligatoires sont bien requis (attribut `required`).
- [ ] **Message de confirmation** : si vous activez le traitement AJAX (voir `script.js`), tester l’alerte de confirmation.

## Référencement (SEO)
- [ ] **Balise `<title>`** : personnaliser le titre pour inclure votre nom et vos mots clés.
- [ ] **Balise `<meta name="description">`** : s’assurer qu’elle décrit fidèlement votre activité et contient vos mots clés principaux.
- [ ] **Balise `<meta name="keywords">`** : adapter ou supprimer si vous n’en avez pas besoin (les moteurs de recherche n’utilisent plus beaucoup cette balise).
- [ ] **Titres `<h1>`, `<h2>`…** : vérifier la structure hiérarchique (un seul `<h1>` par page).
- [ ] **Texte alternatif (`alt`) pour les images** : ajouter des attributs `alt` pour toutes les images importantes afin d’améliorer l’accessibilité.

## Performances et accessibilité
- [ ] **Images optimisées** : réduire la taille des images (utiliser un outil comme Squoosh ou TinyPNG).
- [ ] **Lighthouse** : lancer un audit [Lighthouse](https://developers.google.com/web/tools/lighthouse/) pour vérifier les scores de performance, accessibilité, bonnes pratiques et SEO. Corriger les points rouges.
- [ ] **Contraste** : s’assurer que le contraste couleur texte/fond est suffisant pour être lisible (test possible via [WebAIM](https://webaim.org/resources/contrastchecker/)).
- [ ] **Navigation au clavier** : tester la navigation sans souris (tabulation) pour vérifier que les éléments interactifs sont accessibles.

## Déploiement
- [ ] **Dépôt GitHub** : pousser le code sur un dépôt (public ou privé) et vérifier la structure des fichiers.
- [ ] **GitHub Pages / Vercel / Netlify** : configurer l’hébergement et vérifier que l’URL de production fonctionne.
- [ ] **Mise en cache / compression** : activer la compression gzip/brotli sur l’hébergeur si possible.

## Divers
- [ ] **Mises à jour** : planifier des mises à jour régulières (contenu, maintenance technique).
- [ ] **Mentions légales et politique de confidentialité** : ajouter une page ou une section si nécessaire en fonction de vos obligations (RGPD en particulier).

Cette checklist vous aidera à publier un site professionnel, performant et conforme à vos attentes. 
