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

  const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    return results;
  };

  assertArraysEqual(letterPositions("hello").e, [1]);