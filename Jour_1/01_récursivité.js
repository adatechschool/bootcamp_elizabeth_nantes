// La condition d'arrêt -> quand tous les escaliers sont montés 
//-> quand nb de dernieres marches montées= nb de marches restant

// La résolution du problème 
//-> afficher/retourner toutes les manières de monter les escaliers

// L'appel récursif -> la fonction s'appelle elle même pendant son execution, 
//on soustrait les dernieres marches montées au nombres d'escaliers

// const countHowChildRunStairs = []
// //à retourner à la fin

// function staircaseNumber(){
//     if (staircaseNumber=0){
//         countHowChildRunStairs.push(staircaseNumber/3)
//     }

// }


// if (staircaseNumber=>0){ 
//     countHowChildRunStairs.push(staircaseNumber/3)
//  }
// else if (staircaseNumber=>0){
//      countHowChildRunStairs.push(staircaseNumber/2)
// }

//correction 


{
    function countPath(stairsNumber){
        return countPathRec(1, stairsNumber)
            + countPathRec(2, stairsNumber)
            + countPathRec(3, stairsNumber);
    }
     //step= 1
    //stairsNumber = 2;  
    function countPathRec(step,stairsNumber){
        if (step===stairsNumber){
            return 1;
        }
        if (step> stairsNumber){
            return 0;
        }
        return countPathRec(1,stairsNumber-step)
        + countPathRec(2, stairsNumber)
        + countPathRec(3, stairsNumber);
    }
    console.log(countPath(7))
    ;
}

