function sumAllNumbers(array) {
  let sum = 0;

  for (let number of array) {
    sum += number;
  }

  return sum;
}

console.log(sumAllNumbers([1, 2, 3, 4]));
