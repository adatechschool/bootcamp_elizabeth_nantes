// ## ♣️ Majorité, pairs ou impair ?

// [Source: Newsletter de Cassidoo](https://cassidoo.co/)

// Donner l'élément qui apparaît le plus fréquemment dans un tableau d'entiers.

// S'il n'y a pas d'élément qui apparaît plus qu'un autre, retourner une information indiquant si le tableau est composé en majorité de nombres pairs ou impairs.

// Si le tableau n'a pas de majorité et qu'il n'a pas plus d'éléments pairs qu'impairs, retourner 0

// Exemple

// ```
// > majority([3,1,4,1])
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"
// ```
function Majority(array){

array.sort()
for (let i = 0; i < array.length - 1; i++) {
    
    if (array[i] !== array[i + 1]) {    

       let newArray= array.splice(0, array[i]) 
        if (newArray>0) {

            return newArray}

    }else {  let arrayPair = array.filter((array) => array[i]%2 );
             let arrayImpair = array.filter((array) => array[i]%2 == false)

             if (arrayPair<arrayImpair) {
                return "Majorité impairs"

              } else if (arrayImpair==arrayPair){
                return "Pas de majorité" }
                else {
                    return "Majorité pairs"
                }
        

    }

}
}

console.log(Majority([3,1,4,1]))