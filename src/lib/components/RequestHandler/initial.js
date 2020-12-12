const axios = require('axios');
const isObject = require('lodash/isObject');
const objectUtil = require('lodash/object');
/**
 *Request a BaseURL and some other params to do a Initial request handler
 * @param {string / json} baseURL: base service URL or json config file, this paremeter is required,
 * @param {number}  timeout default value is 5000,
 * @param {boolean}  withCredentials default value is false,
 * @param {string}  responseType  default value is application/json,
 * @param {string}  responseEncoding default value is utf-8,
 * @param {number}  timeout = 5000,
 * this request handler need authentication operation
 */
const initial = (
  baseURL,
  timeout = 5000,
  withCredentials = false,
  responseType = 'application/json',
  responseEncoding = 'utf8',
) => {
  const instance = axios.create();
  instance.interceptors.request.use(config => {
    if (isObject(baseURL)) {
      return objectUtil.assign(config, baseURL);
    }
    return Object.assign(config, {
      baseURL,
      timeout,
      withCredentials,
      responseType,
      responseEncoding,
    });
  });

  instance.interceptors.response.use(
    response => {
      if (response.status === 204 || response.status === 205) {
        return null;
      }
      if (response.status >= 200 && response.status < 300) {
        return { status: response.status, data: response.data };
      }
      return response.status;
    },
    e => {
      const error = new Error(e.statusText);
      error.response = e;
      Promise.reject(error);
      throw error;
    },
  );

  return instance;
};
module.exports = initial;
