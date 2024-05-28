//A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. 
//Implement a method to count how many possible ways the child can run up the stairs.

function countWays(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
    }
}

let n = 5; // Nombre de marches de l'escalier
let ways = countWays(n);
console.log(ways);