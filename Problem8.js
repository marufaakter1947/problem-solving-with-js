function capitalizeWords(string) {
  let words = string.split(" ");
  let result = [];

  for (let word of words) {
    result.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}
console.log(capitalizeWords("hello world"));
