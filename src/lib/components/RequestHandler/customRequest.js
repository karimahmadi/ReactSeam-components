/**
 *Request a url, method, params or data do ANY request then return a Promise
 * @param {string} url: relative url
 * @param {string} method: can be post or get
 * @param {object} params: array of query string, used when method is get
 * @param {object} data: json of body request, used when method is post
 * this request handler doesn't need authentication operation
 */
const customRequest = (instance, url, method, params, data) =>
  instance({
    method,
    url,
    params,
    data,
  });

module.exports = customRequest;
