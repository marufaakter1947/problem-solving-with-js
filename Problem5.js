function removeDuplicates(array) {
  let uniqueNumbers = [];

  for (let number of array) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
