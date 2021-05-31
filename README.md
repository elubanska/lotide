# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @elubanska/lotide`

**Require it:**

`const _ = require('@elubanska/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: compars two strings
* `head`: returns first element of array
* `tail`: returns all elements of array except the first one
* `eqArrays`: compares two arrays
* `countLetters`: returns a count of each of the letters in the sentence
* and more...