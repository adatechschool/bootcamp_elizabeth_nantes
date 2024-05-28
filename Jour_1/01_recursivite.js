function waysToRunUp(nbOfSteps, stairway = {}) {
    
    //On gère le cas où le nb de marches est négatif et le cas où il n'y a pas de marches.
    if (nbOfSteps < 0 ) {
        return 0;
    } 

    if (nbOfSteps === 0) {
        return 1;
    }

    //On vérifie si le résultat est déjà calculé.
    if (stairway[nbOfSteps] != undefined){
        return stairway[nbOfSteps];
    }

    //On utilise la récursivité pour additionner le nb de façons possibles de monter les marches
    return stairway[nbOfSteps] = waysToRunUp(nbOfSteps - 1, stairway) + waysToRunUp(nbOfSteps - 2, stairway) + waysToRunUp(nbOfSteps - 3, stairway);

}

console.log(waysToRunUp(0));
console.log(waysToRunUp(-2));
console.log(waysToRunUp(1));
console.log(waysToRunUp(3));
console.log(waysToRunUp(5));