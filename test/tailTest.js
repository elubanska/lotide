const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// console.log("--------");
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// console.log("--------");
// assertEqual(tail(words),['Lighthouse', 'Labs']);
// console.log("--------");
// const test = [1,2,7,4,5];
// assertEqual(tail(test),[2,3,4,5]);

describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']); 
    });

    it("returns [6, 7] for [3, 6, 7]", () => {
        assert.deepEqual(tail([3, 6, 7]), [6, 7]); 
    });
});