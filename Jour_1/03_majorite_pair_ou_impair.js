// > majority([3,1,4,1])
// > "1"

// > majority([33,44,55,66,77])
// > "Majorité impairs"

// > majority([1,2,3,4])
// > "Pas de majorité"

function majority(tab) {
    let fois = 1
    let majorite
    let tabPair =[]
    let tabImpair = []

    for(i=0; i< tab.length; i++){
        const repetition = tab.filter((word) => word == tab[i]);
        if(repetition.length > fois){
            fois = repetition.length
            majorite = tab[i]
        }
    }
    if(majorite != undefined){
        console.log(majorite)
        return
    }
    for(x=0; x<tab.length; x++){
        if(tab[x]%2 == 1){
            tabImpair.push(tab[x])
        }
        if(tab[x]%2 == 0){
            tabPair.push(tab[x])
        }
    }
    if(tabImpair.length == tabPair.length){
        console.log("Pas de majorite")
        return
    }
    if(tabImpair.length > tabPair.length){
        console.log("Majorité impairs")
        return
    }
    if(tabImpair.length < tabPair.length){
        console.log("Majorité pairs")
        return
    }
}
majority([1,2,3,4,4,3])