const assertEqual = function(actual, expected) {
    if (actual === expected){
      console.log(`Assertation Passed: ${actual} === ${expected} 😀`)
    } else {
      console.log(`Assertation Failed: ${actual} !== ${expected} 🥴`)
    }
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
  };
  eqArrays([1, 3, 3], [1, 2, 3]);
  //assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);