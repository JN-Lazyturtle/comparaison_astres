# Compar'Astre | API en Node Js

## Installation
Notre API est en "production" sur Vercel, accessible via l'adresse https://compar-astre-back.vercel.app/astres

Il est aussi possible de la lancer en local, elle sera alors accessible via l'adresse http://localhost:3000/
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
- index.js : classe principal dont le but est de définir les routes et d'extraire les argument des reqûetes
- controller : un controller par table de BD, gère les règles métiers (vérifications entre autres)
- BD : Contient la classe connecionBD qui est assez abstraite pour gérer les deux tables
- model : permet de s'assurer que les données envoyés par l'utilisateur correspondent au format attendu. Permet de préserver la cohérence de la BD

### Authentification


### CRUD
Les routes pour CRUD ont été mises en places.

Lors de la création, le login du user contenu dans le token est utilisé pour set l'auteur de l'astre.

Lors de l'update et du delete, on vérifie que le login contenu dans le token soit le même que l'auteur de l'astre

================================================================


Créez une API de gestion de recettes. Cette API doit contenir:

    une route pour récupérer une recette

    une route pour récupérer la liste des recettes

    une route pour ajouter une recette

    une route pour supprimer une recette

    une route pour modifier une recette

    une route pour créer un compte

    une route pour se connecter (récupérer un JWT)

Les routes liées à la creation/suppression/modification de recettes doivent être uniquement accessibles aux personnes connectés. La seule personne pouvant modifier ou supprimer une recette doit être la personne qui l'a créé.

L'application devra utilisé les modules comme vu en TP (ne pas tout mettre dans un seul fichier).

Les utilisateurs ainsi que les recettes seront stockés dans restdb comme vu en TP.

Le système d'authentification doit être fait avec les librairies utilisées en TP (passport et passport-jwt).

Le projet doit être déployé sur Heroku.

ATTENTION: l'api doit communiquer uniquement en JSON (res.json avec express).

ATTENTION 2: pour communiquer avec votre serveur express depuis une page web, vous aurez besoin de gérer les CORS. voir le middleware express cors

Critères de notation (non exhaustif):

    Comprehension minimale de REST (pas de get pour modifier des données et pas de post pour juste récupérer des données par exemple)
    utilisation correcte de passport (comprehension JWT, signature, verification, protection de route, verification d'identité)
    bonne gestion des modules (le découpage est présent + est coherent)
    déployé sur heroku (ça tourne pour de vrai, pas juste en local)
    qualité de code
    documentation (code clair et commenté, qualité du readme)

Le rendu du projet sera

    l'URL d'un github contenant les sources de votre projet ainsi qu'un readme qui explique comment lancer/installer le projet + les parties manquantes et pourquoi (si vous n'avez tout fait).
    l'URL de votre API + l'url de l'application finale (avec la partie Vue.js)