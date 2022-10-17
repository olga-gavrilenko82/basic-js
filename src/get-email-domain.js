const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 
 let i = email.indexOf('@');
 let  getDomain = email.substring(i+1); 

 return getDomain;
};

module.exports = {
  getEmailDomain
};
