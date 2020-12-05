const instance = require('./initial');
/**
 *Request a URL and params do a GET request then return a Promise
 * @param {string} URL: service URL
 * @param {object} ...params
 * this request handler need authentication operation
 */
const get = (url, params) => instance.get(url, params);
module.exports = get;
