const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual === expected){
      console.log(`Assertation Passed: ${actual} === ${expected} 😀`)
    } else {
      console.log(`Assertation Failed: ${actual} !== ${expected} 🥴`)
    }
};

const findKeyByValue = function(object, value){
    //looping thourough all keys in object and returnig the key connected to the searched value
    let searchedKey = null;
    for (let key in object) {
         //console.log(key, "", object[key]);
         if(object[key] === value){
             searchedKey = key;
             break;
         }    
    }
    return searchedKey;
}

console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);