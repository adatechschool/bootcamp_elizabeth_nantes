//Implementer une méthode qui me permet de vérifier si une string ne contient que des caractères uniques sans autre structure de données .

function isUnique(str) {
    return str.length === new Set(str).size;
}

console.log("methode 1 hello : ", isUnique("hello"));
console.log("methode 1 world: ", isUnique("world"));

function isUniqueWithoutSet(data) {

    data = data.toLowerCase(); //on se méfie de la casse !

    //on boucle sur la string pour voir si chaque caractère est different de tout le reste
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] === data[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log("methode 2 hello : ", isUniqueWithoutSet("hello"));
console.log("methode 2 world : ", isUniqueWithoutSet("world"));
