const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertation Passed: ${actual} === ${expected} 😀`)
  } else {
    console.log(`Assertation Failed: ${actual} !== ${expected} 🥴`)
    }
  };

function head(array){
  return array[0];
}
//console.log(head([1,2,3]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log("-----")
assertEqual(head([3,6,7]), 5);
