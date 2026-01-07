function vowels (string){
    let text = string.toUpperCase();
    let count = 0;
    let vowel = "AEIOU";
    for(let char of text){
        if(vowel.includes(char)){
            count++;
        }
    }
        return count;

}
console.log(vowels("programming"));