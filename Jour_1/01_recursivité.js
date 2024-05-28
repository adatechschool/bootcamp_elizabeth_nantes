//cas d'arrêt : n est à 0
// calculer le nombre de manière dont ont peu monter l'escalier

//cas 1 marche
let count = 0;
function stepOne(n) {
    if (n > 0) {
        count++;
        console.log(count);
        n -= 1;
        console.log(n);
        stepOne(n);
    } else {
        console.log("c'est fini");
    }
}

// NE MARCHE PAS
function stepTwo(n) {
    if (n % 2 == 0 && n > 0) {
        count++;
        console.log("nombre de passage :")
        console.log(count);
        n -= 2;
        console.log("nombre de marches restantes: ")
        console.log(n);
        stepTwo(n);
    } else {
        if(n==0){
            console.log("c'est fini")
        }
        else{
            count++;
            n -= 1;
            stepTwo(n)
        }
    }
}

// stepOne(15);
stepTwo(13)
