function countLetters(str){
 let letters = {};
 for (let i = 0; i < str.length; i++){
     for (let j =0; j <str.length; j++){
        let count = 0;

            if(str[j] === str[i]){
                count++;
            }
        
        letters[str[i]] = count;
     }
  }
  return letters;
}
console.log(countLetters('LHL'));
console.log("***********************");
console.log(countLetters('JavaScript is the best programming language ever!'));
console.log("***********************");
console.log(countLetters('just after python'));
console.log("***********************");
console.log(countLetters('and C of course'));