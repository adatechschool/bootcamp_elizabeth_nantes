const stairCase = (n, temp = {}) => {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (temp[n]) {
    // enleve un calcul inutile =)
    console.log("temp", temp);
    return temp[n];
  } else {
    temp[n] =
      stairCase(n - 1, temp) + stairCase(n - 2, temp) + stairCase(n - 3, temp);
    console.log("else", temp);
    return temp[n];
  }
};
console.log(stairCase(5));
