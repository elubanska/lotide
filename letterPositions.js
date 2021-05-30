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
    for (let i = 0; i < sentence.length; i++){
            let ct = 0;
            let pos = [];
            for(let j = 0; j < sentence.length; j++){
                if(sentence[j] === sentence[i]){
                    ct++;
                    pos.push(j);
                }
            }
            //console.log("Letter: ", sentence[i], " CT: ", ct, " POS: ", pos);
            //results[sentence[i]] = ({"count": ct, "position": pos});
            results[sentence[i]] = pos;
    }
    return results;
  };

 assertArraysEqual(letterPositions("hello").e, [1]);

 console.log(letterPositions('LHL'));