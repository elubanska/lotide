const tail = require('../tail');
const assertEqual = require('../assertEqual');

console.log("--------");
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log("--------");
assertEqual(tail(words),['Lighthouse', 'Labs']);
console.log("--------");
const test = [1,2,7,4,5];
assertEqual(tail(test),[2,3,4,5]);