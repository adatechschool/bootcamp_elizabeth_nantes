// function stairCase(n) {
//   let array = [];
//   if (n + 1 >= 3) {
//     array.push(4);
//   }
//   if (n + 1 >= 2) {
//     array.push(2);
//   }

//   if (n + 1 >= 1) {
//     array.push(1);
//   }
//   return array;
// }

// console.log(stairCase(1));

function countPath(stairsNumber) {
  return (
    countPathRec(1, stairsNumber) +
    countPathRec(2, stairsNumber) +
    countPathRec(3, stairsNumber)
  );
}

function countPathRec(step, stairsNumber) {
  if (step === stairsNumber) {
    return 1;
  }
  if (step > stairsNumber) {
    return 0;
  }
  return (
    countPathRec(1, stairsNumber - step) +
    countPathRec(2, stairsNumber - step) +
    countPathRec(3, stairsNumber - step)
  );
}

console.log(countPath(4));
