TP noté

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