const head = require('../head');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// console.log("-----")
// assertEqual(head([3,6,7]), 5);
describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
      assert.strictEqual(head([1, 2, 3]), 1);
    });
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });

  it("returns 3 for [3, 6, 7]", () => {
    assert.strictEqual(head([3, 6, 7]), 3); 
  });