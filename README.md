# Compar'Astre | API en Node Js

## Installation
Notre API est en "production" sur Vercel, accessible via l'adresse https://compar-astre-back.vercel.app/astres

Il est aussi possible de la lancer en local, elle sera alors accessible via l'adresse http://localhost:3000/astres
```
git clone https://github.com/JN-Lazyturtle/comparaison_astres.git
cd comparaison_astres
npm install
node index.js
```
### Base de données
Comme indiqué en cours nous hébergons nos données sur restDB, que nous requêtons pour CRUD les données.

Nous avons une table utilisateurs et une table astres.

### Architecture
- index.js : classe principal dont le but est de définir les routes et d'extraire les argument des requêtes
- controller : un controller par table de BD, gère les règles métiers (notamment les vérifications)
- BD : Contient la classe connexionBD qui est suffisement abstraite pour gérer les deux tables
- model : permet de s'assurer que les données envoyées par l'utilisateur correspondent au format attendu. Permet de préserver la cohérence de la BD

### Authentification

Le système d'authentification a été fait avec les librairies passport et passport-jwt.

### CRUD
Les routes pour CRUD ont été mises en places.

Lors de la création, le login du user contenu dans le token est utilisé pour set l'auteur de l'astre.

Lors de l'update et du delete, on vérifie que le login contenu dans le token soit le même que l'auteur de l'astre
