{
  function allUniq(str) {
    return str.length === new Set(str).size;
  }

  function allUniqWithoutStruc(str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str(i) === str(j)) {
          return false;
        }
      }
    }
    return true;
  }
}

console.log(allUniq('abc')); //-> //true)
console.log(allUniq('abca')); //-> //false)
