const instance = require('./initial');
/**
 *Request a URL and params do a POST request then return a Promise
 * @param {string} URL: service URL
 * @param {object} ...params: query parameters
 * this request handler doesn't need authentication operation
 */
const post = (url, inputData = {}) => instance.post(url, inputData);

module.exports = post;
