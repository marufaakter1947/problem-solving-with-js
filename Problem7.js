function findEvenNumbers(array) {
  let evenNumbers = [];

  for (let number of array) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
