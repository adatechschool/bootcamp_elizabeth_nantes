const uniqueChars = (str) => {
  const charSet = {};
  for (let i = 0; i < str.length; i++) {
    if (charSet[str[i]]) {
      return false;
    }
    charSet[str[i]] = true;
    console.log(charSet);
  }
  return true;
};
console.log(uniqueChars("helo")); // false

const uniqueChars2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

console.log(uniqueChars2("hello"));
