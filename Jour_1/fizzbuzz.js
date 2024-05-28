function count(number) {
    for (let number= 1; number <= 100; number++) {
        if (number %3) {
            console.log("Fizz")
        } else if (number%5) {
            console.log("Buzz")
        } else if (number%15) {
            console.log(FizzBuzz)
        }       
    }
}

count(10);