## ♣️ Majorité, pairs ou impair ?

[Source: Newsletter de Cassidoo](https://cassidoo.co/)

Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

Exemple

```
> majority([3,1,4,1])
> "1"

> majority([33,44,55,66,77])
> "Majorité impairs"

> majority([1,2,3,4])
> "Pas de majorité"
```
function majority(arr) {
    // Initialisation des compteurs et des variables
    let count = {}; // Un objet vide pour compter les occurrences de chaque élément
    let maxCount = 0; // Compteur pour le nombre maximum d'occurrences d'un élément
    let mostFrequent; // Stocke l'élément le plus fréquent rencontré jusqu'à présent
    let oddCount = 0; // Compteur pour les nombres impairs
    let evenCount = 0; // Compteur pour les nombres pairs

    // Parcours de tous les éléments du tableau
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]; // Stocke l'élément actuel du tableau

        // Incrémente le compteur pour l'élément num dans l'objet count
        count[num] = (count[num] || 0) + 1;

        // Vérifie si l'élément num est devenu le plus fréquent jusqu'à présent
        if (count[num] > maxCount) {
            maxCount = count[num];
            mostFrequent = num;
        }

        // Vérifie si l'élément num est pair ou impair et incrémente le compteur approprié
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Détermination du résultat en fonction des compteurs calculés
    if (maxCount > 1) {
        return mostFrequent; // S'il y a un élément majoritaire, le retourne
    } else if (evenCount > arr.length / 2) {
        return "Majorité pairs"; // S'il y a une majorité de nombres pairs, retourne "Majorité pairs"
    } else if (oddCount > arr.length / 2) {
        return "Majorité impairs"; // S'il y a une majorité de nombres impairs, retourne "Majorité impairs"
    } else {
        return "Pas de majorité"; // Si aucun cas ci-dessus n'est vérifié, retourne "Pas de majorité"
    }
}


console.log(majority([1, 2, 3, 4])); // "Pas de majorité"
