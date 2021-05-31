const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
  /*
 1. check the length of the array
 len = array.length
 start = len/2
 end = stert +1
 start_odd = math.floor(start)

 2. if 2 => return empty array []
 3. if even (length/2) % 0 => new.push(array.[array])
  */

