//by ELO
/********************************************************************/
const assertArraysEqual = function(actual, expected) {
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
/********************************************************************/

//Middle function definition
const middle = function(array){
  let len = array.length;
  let str = len/2;
  end = str + 1;
  str_odd = Math.ceil(str);
  //console.log(str_odd);
  middle_array = [];

  if (len === 2) {
    return middle_array;
  }
};
/********************************************************************/
middle([1,2,3,4,5,6]);
middle([1,2,3,4,5,6,7]);

  /*
 1. check the length of the array
 len = array.length
 start = len/2
 end = stert +1
 start_odd = math.floor(start)

 2. if 2 => return empty array []
 3. if even (length/2) % 0 => new.push(array.[array])
  */

