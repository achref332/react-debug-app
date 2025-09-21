# Rapport de débogage React - Version corrigée

## Étapes suivies
1. Création du projet avec `create-react-app`.
2. Ajout de composants : `Counter`, `UserCard`, `BuggyComponent`.
3. Inspection avec React Developer Tools.

## Problèmes trouvés et solutions
1. **Counter.js**
   - Problème : `setCount(count)` → le compteur ne s’incrémente pas.
   - Solution : `setCount(count + 1)`.

2. **UserCard.js**
   - Problème : prop `name` manquante → affichage `undefined`.
   - Solution : ajouter la prop `name="John Doe"`.

3. **BuggyComponent.js**
   - Problème : warning React → clé (`key`) manquante dans la liste.
   - Solution : ajouter `key={item}` dans chaque `<li>`.

## Résultat final
- Le compteur fonctionne correctement.
- Les données des utilisateurs s’affichent correctement.
- Aucun warning dans la console.
