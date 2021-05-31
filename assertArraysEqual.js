const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  
  eqArrays(actual,expected);
};


module.exports = assertArraysEqual;
