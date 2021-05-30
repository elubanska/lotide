// FUNCTION IMPLEMENTATION
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
    return true;
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) { //check if both object length is equal, if not stop 
        return false;
    } else {
        for (let key in object1) {
            if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //check if both element are array
                if(object1[key].length === object2[key].length){
                    eqArrays(object1[key], object2[key]);                     //
                } else {
                    return false;
                }       
            }
            else if(object1[key] === object2[key]){
                continue; // go to next element 
            }
            else {                
                return false;
            }
        }
        return true;
    }    
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false