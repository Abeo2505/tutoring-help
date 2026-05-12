# Tutoring Help - Platform Frontend

Documentation complète du frontend de la plateforme Tutoring Help.

## 🎯 Objectif

Tutoring Help est une plateforme inclusive et accessible de mise en relation entre parents et répétiteurs qualifiés. Cette plateforme met l'accent sur **l'accessibilité**, **l'inclusion** et **la confiance**.

## 📁 Structure du Projet

```
tutoring-help/
├── index.html              # Page d'accueil (Landing Page)
├── catalogue.html          # Catalogue des répétiteurs avec filtres
├── tutor-profile.html      # Profil détaillé du répétiteur
├── dashboard.html          # Tableau de bord parent
├── css/
│   ├── styles.css         # Styles principaux
│   └── accessibility.css  # Styles d'accessibilité WCAG 2.1 AA
├── js/
│   ├── main.js            # Fonctions JavaScript communes
│   └── catalogue.js       # Logique du catalogue avec filtrage
└── README.md              # Cette documentation
```

## 🎨 Pages Développées

### 1. **Page d'Accueil (index.html)**
- **Hero Section** : Accueil attractif avec call-to-action
- **Barre de Recherche Rapide** : Filtrage par matière, niveau, localisation
- **Comment Ça Marche** : 4 étapes visuelles
- **Répétiteurs à la Une** : Showcase des meilleurs profils
- **Témoignages** : Retours de parents
- **CTA Final** : Inscription et recherche

**Accessibilité** :
- ✅ Balises sémantiques HTML5 (section, article, nav, main)
- ✅ ARIA labels sur tous les formulaires
- ✅ Contraste des couleurs conforme WCAG AA
- ✅ Navigation au clavier entière
- ✅ Skip link vers le contenu principal

### 2. **Catalogue (catalogue.html)**
- **Filtres Avancés** (Sidebar/Offcanvas) :
  - Matière (Mathématiques, Français, Anglais, Sciences)
  - Niveau (Primaire, Collège, Lycée)
  - Localisation (En ligne, Paris, Lyon, Marseille)
  - Budget (slider interactif)
  - Besoins spécifiques (TDAH, Dyslexie, Haut Potentiel)
  - Note minimale
- **Grille de Cartes** : Affichage responsive
- **Tri** : Par note, prix, expérience
- **Résultats Dynamiques** : Mise à jour en temps réel sans rechargement

**Accessibilité** :
- ✅ Offcanvas pour mobile (menu responsive)
- ✅ Tous les checkboxes et radios avec labels clairs
- ✅ Texte descriptif non basé sur la couleur
- ✅ Pagination accessible
- ✅ Compteur de résultats mis à jour

### 3. **Profil du Répétiteur (tutor-profile.html)**
- **En-tête** : Photo, informations clés, badges de confiance
- **À Propos** : Parcours et pédagogie
- **Qualifications** : Diplômes et certifications
- **Disponibilités** : Tableau interactif
- **Avis & Recommandations** : Carousel d'avis avec notes
- **Modal de Contact** : Formulaire de demande de cours

**Accessibilité** :
- ✅ Tableau des disponibilités avec headers appropriés
- ✅ Étoiles avec aria-label
- ✅ Modal avec gestion du focus
- ✅ Formulaire avec validation claire (non basée sur couleur)
- ✅ Lecteur d'écran friendly

### 4. **Tableau de Bord Parent (dashboard.html)**
- **Sidebar Navigation** : Menu de navigation intuitif
- **Vue d'Ensemble** : Cartes de statistiques
- **Cours à Venir** : Liste des cours avec actions
- **Favoris** : Répétiteurs sauvegardés
- **Messages** : Notifications d'échanges
- **Avis** : Formulaire de notation avec stars
- **Historique des Paiements** : Tableau des transactions

**Accessibilité** :
- ✅ Navigation au clavier fluide
- ✅ Breadcrumbs optionnels pour contexte
- ✅ Rôles et aria-labels appropriés
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Tableaux avec headers de portée appropriée

## 🎨 Design System

### Couleurs
- **Primaire** : #667eea (Bleu)
- **Secondaire** : #764ba2 (Violet)
- **Succès** : #10b981 (Vert)
- **Avertissement** : #f59e0b (Orange)
- **Danger** : #ef4444 (Rouge)
- **Dark** : #1f2937 (Gris foncé)
- **Light** : #f3f4f6 (Gris clair)

### Typographie
- **Font** : Segoe UI, Roboto, sans-serif
- **Tailles** : 16px base, responsive
- **Line Height** : 1.5 pour meilleure lisibilité
- **Weight** : 400 (normal), 600 (semi-bold), 700 (bold)

### Spacing
- **Unit** : 1rem (16px)
- **Gutter** : 1rem (Bootstrap g-4)
- **Padding** : 1rem à 2rem selon composant

### Border Radius
- **Petit** : 0.375rem
- **Moyen** : 0.5rem
- **Grand** : 0.75rem

### Ombres
- **Petite** : 0 1px 2px rgba(0,0,0,0.05)
- **Moyenne** : 0 4px 6px rgba(0,0,0,0.1)
- **Grande** : 0 10px 15px rgba(0,0,0,0.1)

## ♿ Accessibilité (WCAG 2.1 AA)

### Critères Respectés

#### 1. **Perceptible**
- ✅ Contraste minimum 4.5:1 pour texte normal
- ✅ Images avec alt text descriptif
- ✅ Vidéos avec sous-titres (prévu)
- ✅ Pas de reliance sur la couleur seule

#### 2. **Navigable**
- ✅ Navigation au clavier complète (Tab, Shift+Tab, Enter, Espace)
- ✅ Skip link vers contenu principal
- ✅ Ordre de tabulation logique
- ✅ Pas de piège au clavier
- ✅ Focus visible sur tous les éléments
- ✅ Breadcrumbs optionnels

#### 3. **Compréhensible**
- ✅ Langage clair et simple
- ✅ Labels explicites sur formulaires
- ✅ Messages d'erreur non basés sur couleur
- ✅ Suggestions de correction
- ✅ Confirmation avant actions destructrices

#### 4. **Robuste**
- ✅ HTML5 sémantique
- ✅ ARIA roles et aria-labels appropriés
- ✅ Compatibilité lecteurs d'écran
- ✅ CSS sans dépendances critiques
- ✅ JavaScript dégradé gracieusement

### Attributs ARIA Utilisés
- `role="navigation"` / `role="search"` / `role="grid"`
- `aria-label` pour contexte additionnel
- `aria-labelledby` pour associations
- `aria-describedby` pour descriptions
- `aria-expanded` pour états collapsibles
- `aria-disabled` pour éléments désactivés
- `aria-current="page"` pour page active

### Focus Management
```css
:focus-visible {
    outline: 3px solid #0066cc;
    outline-offset: 2px;
}
```

### Lecteurs d'Écran
- ✅ Compatible NVDA (Windows)
- ✅ Compatible JAWS
- ✅ Compatible VoiceOver (Mac/iOS)
- ✅ Compatible TalkBack (Android)

## 🚀 Interactivité JavaScript

### Fonctionnalités Implémentées

#### 1. **Recherche Rapide**
```javascript
handleQuickSearch(event)
```
Redirection vers catalogue avec filtres pré-appliqués

#### 2. **Filtrage Dynamique**
```javascript
applyFilters()
```
- Filtrage par matière, niveau, localisation
- Filtrage par budget (slider)
- Filtrage par besoins spécifiques
- Tri (note, prix, expérience)
- Mise à jour en temps réel

#### 3. **Validation de Formulaire**
```javascript
validateEmail(email)
validatePhone(phone)
showValidationError(input, message)
```

#### 4. **Gestion des Modals**
- Focus management automatique
- Prévention scroll du body
- Fermeture avec Escape
- Aria-labels appropriés

#### 5. **Système de Notation**
- Interaction hover sur étoiles
- Sélection au clic
- Mise à jour couleur visuelle

#### 6. **LocalStorage**
```javascript
Storage.set(key, value)
Storage.get(key)
Storage.remove(key)
```

#### 7. **API Requests Helper**
```javascript
apiRequest(url, method, data)
```

## 📱 Responsivité

### Breakpoints Bootstrap 5
- **xs** : < 576px (Mobile)
- **sm** : ≥ 576px (Petit mobile)
- **md** : ≥ 768px (Tablette)
- **lg** : ≥ 992px (Laptop)
- **xl** : ≥ 1200px (Desktop)
- **xxl** : ≥ 1400px (Grand desktop)

### Mobile First Approach
- ✅ Layout adaptatif
- ✅ Navigation offcanvas sur mobile
- ✅ Grilles responsive
- ✅ Images optimisées
- ✅ Touch targets min 44x44px

## 🔒 Sécurité

### Recommandations
- Valider côté serveur TOUTES les données
- Utiliser HTTPS en production
- Implémenter CSRF protection
- Sanitizer inputs utilisateur
- Utiliser Content Security Policy (CSP)
- Chiffrer données sensibles

### Session Management
- Tokens JWT recommandés
- Refresh tokens
- Logout automatique (inactivité)
- LocalStorage pour données non-sensibles

## 📦 Dépendances

### Frameworks & Librairies
- **Bootstrap 5.3.0** - Framework CSS responsive
- **Font Awesome 6.4.0** - Icônes
- **Vanilla JavaScript** - Aucune dépendance JS

### CDN Links
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 🚀 Intégration Backend

### Points d'Intégrtion Prévus

#### 1. **API d'Authentification**
```javascript
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET /api/auth/profile
```

#### 2. **API Catalogue**
```javascript
GET /api/tutors (avec filtres)
GET /api/tutors/{id}
GET /api/tutors/{id}/reviews
```

#### 3. **API Panier/Réservation**
```javascript
POST /api/reservations
GET /api/reservations
PATCH /api/reservations/{id}
```

#### 4. **API Paiements**
```javascript
POST /api/payments
GET /api/payments/history
```

### Format Réponses Attendues
```json
{
  "success": true,
  "data": {...},
  "message": "Success message",
  "errors": []
}
```

## 🧪 Tests Recommandés

### Tests d'Accessibilité
- ✅ WAVE (Web Accessibility Evaluation Tool)
- ✅ Axe DevTools
- ✅ Lighthouse (Accessibility audit)
- ✅ NVDA Screen Reader Test
- ✅ Clavier seul navigation

### Tests de Responsivité
- ✅ Chrome DevTools
- ✅ Responsive Design Tester
- ✅ Tests sur vrais appareils

### Tests de Performance
- ✅ Lighthouse
- ✅ PageSpeed Insights
- ✅ WebPageTest

## 📚 Ressources & Documentation

### WCAG & Accessibilité
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Bootstrap Accessibility](https://getbootstrap.com/docs/5.0/getting-started/accessibility/)

### Bootstrap 5
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)

### Font Awesome
- [Font Awesome Icons](https://fontawesome.com/icons)

### JavaScript
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Info](https://javascript.info/)

## 🎓 Données Fictives (Mock Data)

Voir `js/catalogue.js` pour les données de 12 répétiteurs d'exemple.

Chaque tutor inclut :
- Informations personnelles
- Matières enseignées
- Niveaux
- Localisation
- Tarif
- Note et avis
- Expérience
- Badges
- Spécialités (Dys, TDAH, Haut Potentiel)

## 🔄 Prochaines Étapes

### Phase 2
- [ ] Intégration backend réelle
- [ ] Système de paiement (Stripe/PayPal)
- [ ] Notifications en temps réel
- [ ] Chat intégré
- [ ] Calendrier de disponibilités avancé
- [ ] Système de recommandations

### Phase 3
- [ ] Application mobile
- [ ] Vidéoconférence intégrée
- [ ] Système de points de fidélité
- [ ] Parrainage
- [ ] IA pour recommandations

### Phase 4
- [ ] Modes offline
- [ ] Progressive Web App (PWA)
- [ ] Intégration voix (assistants vocaux)
- [ ] Analyse de progression
- [ ] Gamification

## 📄 Licence

Projet Tutoring Help - Tous droits réservés

---

**Dernière mise à jour** : 12 mai 2026
