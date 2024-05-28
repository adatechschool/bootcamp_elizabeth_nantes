function majority(array) {
    const map = new Map();
  for (const number of array) {
    if (map.has(number)){
        map.set(number), map.get(number) +1);
        else {
            map.set(number,1)
        }
    })
  }
}
