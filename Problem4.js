function findMaximum(array) {
  
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      largestNumber = array[i];
    }
  }

  return largestNumber;
}
console.log(findMaximum([5, 1, 9, 3]));
