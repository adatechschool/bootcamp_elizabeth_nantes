<?php

function gotUniqueCarac($str) {
    // Je crée un tableau pour stocker les caractères déjà vus (hashmap)
    $allCaracs = [];

    // Boucle à travers chaque caractère de la chaîne
    for ($i = 0; $i < strlen($str); $i++) {
        // $val prend la valeur du caractère à la position $i
        $val = $str[$i];

        // Vérifie si le caractère est déjà dans le tableau
        if (isset($allCaracs[$val])) {
            return false; // Le caractère itéré n'est pas unique
        }

        // Ajoute le caractère au tableau des caractères vus
        $allCaracs[$val] = true; 
    } 
    return true; // Tous les caractères sont uniques
}
$str = "abcdefg";
if (gotUniqueCarac($str)) {
    echo "Tous les caractères sont uniques.";
} else {
    echo "Il y a des caractères en double.";
}

