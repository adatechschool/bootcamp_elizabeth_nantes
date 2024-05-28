// A child is running up a staircase with n steps and can hop either 1 step,
// 2 steps, or 3 steps at a time. Implement a method to count how many possible
// ways the child can run up the stairs.


function possibilite(n){
    if(n > 1){
        possibilite(n-3) + possibilite(n-2) + possibilite(n-1)
    }
    if(n==2){
        return 2
    }
    if(n == 1){
        return 1
    }
}

possibilite(1) = 1
possibilite(2) = 11, 2 => 2
possibilite(3) = 111, 21, 12, 3 => 4
(4) = 31, 22, 211, 1111=> 7
