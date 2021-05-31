const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
console.log("-----")
assertEqual(head([3,6,7]), 5);