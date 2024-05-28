//Implement an algorithm to determine if a string has all unique characters. 
//what if you cannot use additional data structures? 

let string = "phrase";
let array = string.split('').sort();

function isUnique(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log(isUnique(array));