<!-- A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs. -->

<!-- Un enfant monte un escalier de n marches et peut sauter soit 1 marche, soit 2 marches, soit 3 marches à la fois. Implémentez une méthode pour compter combien de façons possibles l'enfant peut monter les escaliers.
 -->

function countWays(n) {
   
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;

   
    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}

