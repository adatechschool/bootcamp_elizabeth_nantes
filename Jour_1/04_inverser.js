/*
> flip(array, 'vertical')
> [[7,8,9],[4,5,6],[1,2,3]]
*/

function flip(array, sens){

    if (sens === 'vertical') {
        let newArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;

    } else if (sens === 'horizontal') {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i].slice().reverse());
        }
        return newArray;
        
    } else {
        return array; // Retourner le tableau original si le sens n'est pas valide
    }
    
}

console.log(flip([[1, 2, 3],[4, 5, 6], [7, 8, 9]], 'vertical'));
console.log(flip([[1, 2, 3],[4, 5, 6], [7, 8, 9]], 'horizontal'));