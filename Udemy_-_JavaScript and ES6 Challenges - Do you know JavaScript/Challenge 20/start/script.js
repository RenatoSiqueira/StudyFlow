/* CHALLENGE 20 - Sum positive and negative numbers

Create a function sumPlusMinus() that takes array
and sums separately positive and negative numbers.

It should return an object like this:
{
  plus: 74, // sum of all positive numbers
  minus: -54 // sum of all negative numbers
}
*/

"use strict";

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write sumPlusMinus() function here
/*
function sumPlusMinus(nums) {
  var plus = nums.filter( item => item > 0).reduce( (acc, curr) => acc + curr, 0 );
  var minus = nums.filter( item => item < 0).reduce( (acc, curr) => acc - curr, 0);
  return { plus, minus }
}
*/

function sumPlusMinus(nums) {
  return nums.reduce( (acc, curr) => {
    return {
      plus: curr > 0 ? acc.plus + curr : acc.plus,
      minus: curr < 0 ? acc.minus + curr : acc.minus
    }
  }, { plus: 0, minus: 0})
}

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}
