// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
function verifieCaracteres(string){
    for(i=0; i<string.length; i++){
        for(x=i+1; x<string.length; x++){
            if(string[x] == string[i]){
                return console.log("non unique")
            }
        }
    }
   return console.log("Unique")

}
verifieCaracteres("dfhujikg")