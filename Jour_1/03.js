const majority = (arr) => {
  const counts = {};
  let max = 0;
  let maxElement = null;
  let even = 0;
  let odd = 0;

  for (let num in arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > max) {
      max = counts[num];
      maxElement = num;
    }
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(max, maxElement, even, odd);
  if (max > 1) {
    return maxElement;
  } else if (even > odd) {
    return "even";
  } else if (odd > even) {
    return "odd";
  } else {
    return "Pas de majorité";
  }
};

console.log(majority([1, 2, 3, 4]));
