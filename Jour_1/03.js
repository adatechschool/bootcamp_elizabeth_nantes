const majority = (arr) => {
  const counts = {};
  let max = 0;
  let maxElement = [];
  let even = 0;
  let odd = 0;

  for (let num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > max) {
      max = counts[num];
      maxElement = [num];
    } else if (counts[num] === max) {
      maxElement.push(num);
    }
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(max, maxElement, even, odd);
  if (max > 1 && maxElement.length === 1) {
    return maxElement[0];
  } else if (even > odd) {
    return "even";
  } else if (odd > even) {
    return "odd";
  } else {
    return "Pas de majorité";
  }
};

console.log(majority([33, 44, 55, 66, 77]));
