/*Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0 */

function majoritePairOuImpair(tab) {

    //Gestion des edge cases.
    if (tab.length === 0){
        return 0;
    }

    //On compte les occurrences des pairs et impairs et la majorité des pairs et impairs.
    let occurrence = {};
    let maxOccurrence = 0;
    let maxOccurrenceElem = null;


    let majPair = 0;
    let majImpair = 0;

    for (let i = 0; i < tab.length; i++) {
        let elem = tab[i];
        occurrence[elem] = (occurrence[elem] || 0) + 1;

        if (elem % 2 === 0) {
            majPair++;
        } else {
            majImpair++;
        }

        // On met à jour l'élément le plus fréquent
        if (occurrence[elem] > maxOccurrence) {
            maxOccurrence = occurrence[elem];
            maxOccurrenceElem = elem;
        }
    }
        // On vérifie si un seul élément a la fréquence maximale. 
        let multipleMaxOccurrence = Object.values(occurrence).filter(x => x === maxOccurrence).length > 1;
        

        //On retourne la réponse en fonction des conditions fixées par l'énoncé.
        if (!multipleMaxOccurrence) {
            return maxOccurrenceElem;
        } else {
            if (majPair > majImpair) {
                return "Pairs";
            } else if (majImpair > majPair) {
                return "Impairs";
            } else {
                return "Pas de majorité";
            }
        }
}

console.log(majoritePairOuImpair([3,1,4,1])); // Sortie : 1
console.log(majoritePairOuImpair([33,44,55,66,77])); // Sortie : "Impairs"
console.log(majoritePairOuImpair([1,2,3,4]));    // Sortie : "Pas de majorité"
