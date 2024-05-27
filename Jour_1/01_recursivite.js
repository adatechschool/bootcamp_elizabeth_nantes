function waysToRunUp(nbOfSteps) {
    
    //On gère le cas où le nb de marches est négatif et le cas où il n'y a pas de marches.
    if (nbOfSteps < 0 || nbOfSteps === 0) {
        return 0;
    } 

    //On utilise la récursivité pour additionner le nb de façons possibles de monter les marches
    return waysToRunUp(nbOfSteps - 1) + waysToRunUp(nbOfSteps - 2) + waysToRunUp(nbOfSteps - 3)

}

console.log(waysToRunUp(0));
console.log(waysToRunUp(-2));
console.log(waysToRunUp(1));
console.log(waysToRunUp(3));
console.log(waysToRunUp(5));