// code CHATGPT

function majority(array) {
    const frequency = {};
    let maxFrequency = 0;
    let mostFrequent = null;
    let even = 0;
    let odd = 0;

    // remplir le dico
    for (let i = 0; i < array.length; i++) {
        if (frequency[array[i]] != null) {
            // si l'élément est dans le dico augmenter son occurence
            frequency[array[i]]++;
        } else {
            frequency[array[i]] = 1; // si l'élément est pas dans le dico, le mettre
        }
    }

    // itérer dans le dico
    for (let i in frequency) {
        if (frequency[i] > maxFrequency) {
            // si l'élément a plus d'occurence que le max, alors on set le nouveau max
            maxFrequency = frequency[i];
            mostFrequent = i;
        }
        if (frequency[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    if (even > odd) {
        return "even";
    }
    if (odd > even) {
        return "odd";
    } else {
        return mostFrequent;
    }
}

console.log(majority([1, 4, 7, 2, 3]));
