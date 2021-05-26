const assertArrayEqual = function(actual, expected) {
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
};


function tail(array){
  let tail_array = [];
  for (let i = 1; i < array.length; i++){
    tail_array.push(array[i]);
  }
  return tail_array;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log("--------");
assertArrayEqual(tail(words),['Lighthouse', 'Labs']);
const test = [1,2,7,4,5];
assertArrayEqual(tail(test),[2,3,4,5]);