
<header
On définit la fonction de façon algorythmique de cette façon :

Si l'enfant est sur une marche n , il peut venir de la marche n-1, n-2 ou n-3. 
Ce qui fait que pour aller à la marche n , on doit faire la somme des marches n-1/n-2/n-3.
header>

< ?<?php 

  function countStairs ($n) {
    //ici on connait les valeurs de bases qui sont n-1/n-2/n-3//
    if ($n == 0) return 1;
    if ($n == 1) return 1;
    if ($n == 2) return 2;

    // ici je créer un tableau pour stocker mes valeurs de résultats//
    $val = array_fill(0, $n+1, 0);

    $val[0] = 1;
    $val[1] = 1;
    $val[2] = 2;

    for($i = 3 ;  $i <= $n ; $i++) {
        $val[$i] = $val[$i-1] + $val[$i-2] + $val[$i-3];
    }
    return $val[$n];
  }
  $n = 100;
  echo "Nombre de façons de monter $n marches: " . countStairs($n);

?> 