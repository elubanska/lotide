const words = ["hello", "world", "lighthouse"];
const words_2 = ["hello", "world", "lighthouse"];
const assertArraysEqual = function(actual, expected) {
    eqArrays(actual,expected);
  };
  
  const eqArrays = function(actual, expected) {
    if (actual.length !== expected.length) {
      console.log(`Assertation Failed: ${actual} !== ${expected} 🥴`)
      return false;
    } 
    for (let i = 0; i < actual.length; i++){
      if (actual[i] !== expected[i]) {
        console.log(`Assertation Failed: ${actual} !== ${expected} 🥴`)
        return false;
      }   
    }
    console.log(`Assertation Passed: ${actual} === ${expected} 😀`)
    return true;
  };
  
const without = function(source, itemsToRemove) {
    let newArray = []; 
    newArray = source;
    //console.log(`Source: `,newArray, ` Source: `, source);
    for (let i = 0; i < newArray.length; i++){
        // console.log("i: ",i);
        for(let j = 0; j<itemsToRemove.length; j++){
            // console.log("j: ",j);
            if (newArray[i] === itemsToRemove[j]) {
                newArray.splice(i,1);
                console.log(`Removed item: `,itemsToRemove[j]);
            }
        }    
    }
    //console.log(`New array: `,newArray, ` Source: `, source);
    //console.log(`Assertation Passed: ${actual} === ${expected} 😀`)
//    return newArray;
};



without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words_2, ["hello", "world", "lighthouse"]);
without([1,2,3],[2]);
without(["1","2","3"],["1",2,"3"]);
