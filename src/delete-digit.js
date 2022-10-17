const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res =0;
  let digits = [];
  while (n){
digits.push(n % 10);
n = Math.floor(n / 10);
  }
  for(let i=0; i < digits.length; i++){
let n1 = 0;
for (let j = digits.length - 1; j >= 0; j--){
  if(j !== i) {
    n1 = n1 *10 + digits[j];
  }
}
res = Math.max(n1, res);
  }
  return res;
}

module.exports = {
  deleteDigit
};
