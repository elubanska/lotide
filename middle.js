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
  middle_array = [];
  let len = array.length;
  let str = len/2;
  end = str + 1;
  str_odd = Math.ceil(str);
  
  if (len === 2) {

    middle_array = [];
  } else if (str === str_odd) {
    middle_array.push(array[str-1],array[str]);
  } else if (str !== str_odd){
    middle_array.push(array[str_odd-1]);
  }
  return console.log(middle_array);
};
/********************************************************************/
middle([1,2]);
middle([1,2,3,4,5,6]);
middle([1,2,3,4,5,6,7]);
middle([4,62,73,5,5,54,6,7]);
middle([1,2,3,4,6,7,8]);
middle([1,2,3,4,5,6,7,45,4,56,45,4,5]);

  /*
 1. check the length of the array
 len = array.length
 start = len/2
 end = stert +1
 start_odd = math.floor(start)

 2. if 2 => return empty array []
 3. if even (length/2) % 0 => new.push(array.[array])
  */

