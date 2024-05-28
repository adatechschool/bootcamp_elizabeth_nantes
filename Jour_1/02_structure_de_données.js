// code CHATGPT

function isUnique(string) {
    splittedString = string.split("").sort(); // classer   dans l'ordre alphabétique
    for (let i = 1; i < splittedString.length; i++) { // itérer dans la string
        if (splittedString[i] === splittedString[i-1]) { // seulement si 2 éléments sont identiques, return false, si pas 2 éléments pareil alors tu fais rien
            return false;
        }
    }
    return true; // sinon return true
}

console.log(isUnique("test"));
