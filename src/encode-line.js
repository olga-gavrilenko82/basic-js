const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
let n =1;
let res = '';
for (let i=0; i< str.length; i++){
  if(str[i] === str[i+1]) {
    n = n+1;
  } else {
    res = res + n + str[i];
    
  }
}
return res;
}

module.exports = {
  encodeLine
};
