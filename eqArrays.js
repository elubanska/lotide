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
module.exports = eqArrays;
//eqArrays(["1","2","3"], ["1","2","3"]);