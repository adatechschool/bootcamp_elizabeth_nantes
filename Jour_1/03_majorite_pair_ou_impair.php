<?php

function majority($arr) {
    if (empty($arr)) {
        return "Pas de majorité";
    }

    // Compter les occurrences de chaque élément
    $counts = array_count_values($arr);
    arsort($counts);
    $elemMajority = array_key_first($counts);
    $maxCount = $counts[$elemMajority];

    // Vérifier si un autre élément a le même nombre d'occurrences
    $isUniqueMax = true;
    foreach ($counts as $element => $count) {
        if ($element != $elemMajority && $count == $maxCount) {
            $isUniqueMax = false;
            break;
        }
    }

    if ($isUniqueMax) {
        return (string)$elemMajority;
    }

    // Compter les nombres pairs et impairs
    $evenCount = 0;
    $oddCount = 0;
    foreach ($arr as $num) {
        if ($num % 2 == 0) {
            $evenCount++;
        } else {
            $oddCount++;
        }
    }

    if ($evenCount > $oddCount) {
        return "Majorité pairs";
    } elseif ($oddCount > $evenCount) {
        return "Majorité impairs";
    } else {
        return "Pas de majorité";
    }
}

// Exemples d'utilisation :
echo majority([3, 1, 4, 1]); // "1"
echo majority([33, 44, 55, 66, 77]); // "Majorité impairs"
echo majority([1, 2, 3, 4]); // "Pas de majorité"

