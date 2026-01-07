function palindrome(string) {
  let reversedString = string.split("").reverse().join("");
  let result= string === reversedString;
  return result;
}

 console.log(palindrome("madam"));

console.log(palindrome("hello"));
