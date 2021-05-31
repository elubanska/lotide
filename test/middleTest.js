const middle = require('../middle');
const assert = require('chai').assert;

// middle([1,2]);
// middle([1,2,3,4,5,6]);
// middle([1,2,3,4,5,6,7]);
// middle([4,62,73,5,5,54,6,7]);
// middle([1,2,3,4,6,7,8]);
// middle([1,2,3,4,5,6,7,45,4,56,45,4,5]);
describe("#middle", () => {
    it("returns []  for [1, 2]", () => {
      assert.deepEqual(middle([1, 2])); 
    });
    it("returns [4] for [1,2,3,4,5,6,7]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6,7])); 
    });
    it("returns [3,4] for [1,2,3,4,5,6]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6])); 
    });
  });