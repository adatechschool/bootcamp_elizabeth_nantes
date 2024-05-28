<!-- Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? -->
<!-- Implémentez un algorithme pour déterminer si une chaîne de caractères contient uniquement des caractères uniques. Que faire si vous ne pouvez pas utiliser de structures de données supplémentaires ? -->
function unique(chaine) {
  chaine = chaine.split('').sort();

  for (let i = 0; i < chaine.length - 1; i++) {
    if (chaine[i] === chaine[i + 1]) {
      return false;
    }
  }

  return true;
}