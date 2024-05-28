function reverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function flip(arrayofArray, sens) {
  if (sens === 'vertical') {
    return reverse(arrayofArray);
  } else if (sens === 'horizontal') {
    new arrayofArray=[];
    for (const array of arrayofArray) {
      newArrayofArray.push(reverse(array));
    }
  }
}
