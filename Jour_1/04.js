const flip = (arr, mode) => {
  switch (mode) {
    case "horizontal":
      return arr.map((tab) => [...tab].reverse());
    case "vertical":
      return [...arr].reverse();
    default:
      return arr;
  }
};

console.log(
  flip(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "horizontal"
  )
);
console.log(
  flip(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "vertical"
  )
);
