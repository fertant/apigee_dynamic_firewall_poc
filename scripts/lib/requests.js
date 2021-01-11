const Promise = require('bluebird');
const request = require('superagent');
const logger = require('./logger');

const proxyEndpoint = 'shutovandrii-eval-prod.apigee.net';
const apigeeEndpoint = 'api.enterprise.apigee.com/v1/organizations/shutovandrii-eval/environments';
const token = '';

module.exports = {
  testRequest: (path, query, body) => {
    const url = `https://${proxyEndpoint}/${path}`;
    logger.info(`Request url ${url}.`);

    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('accept', 'json')
        .end((err, res) => {
          if (err || !res) {
            return reject(err || 'Unknown error');
          }
          if (res.status >= 403) {
            return reject(res.error || res.body || res);
          }
          return resolve(res.body);
        })
    });
  },
  getKVMValuesRequest: (mapName) => {
    const env = 'prod';
    const url = `https://${apigeeEndpoint}/${env}/keyvaluemaps/${mapName}`;
    logger.info(`Request url ${url}.`);

    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err || !res) {
            return reject(err || 'Unknown error');
          }
          if (res.status >= 403) {
            return reject(res.error || res.body || res);
          }
          return resolve(res.body);
        })
    });
  },
  getKVMValueRequest: (mapName, valueName) => {
    const env = 'prod';
    const url = `https://${apigeeEndpoint}/${env}/keyvaluemaps/${mapName}/entries/${valueName}`;
    logger.info(`Request url ${url}.`);

    return new Promise((resolve, reject) => {
      request
        .get(url)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err || !res) {
            return reject(err || 'Unknown error');
          }
          if (res.status >= 403) {
            return reject(res.error || res.body || res);
          }
          return resolve(res.body);
        })
    });
  },
  postKVMValueRequest: (mapName, data) => {
    const env = 'prod';
    const url = `https://${apigeeEndpoint}/${env}/keyvaluemaps/${mapName}/entries`;
    logger.info(`Request url ${url}.`);

    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(data)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err || !res) {
            return reject(err || 'Unknown error');
          }
          if (res.status >= 403) {
            return reject(res.error || res.body || res);
          }
          return resolve(res.body);
        })
    });
  },
  putKVMValueRequest: (mapName, valueName, data) => {
    const env = 'prod';
    const url = `https://${apigeeEndpoint}/${env}/keyvaluemaps/${mapName}/entries/${valueName}`;
    logger.info(`Request url ${url}.`);

    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(data)
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          if (err || !res) {
            return reject(err || 'Unknown error');
          }
          if (res.status >= 403) {
            return reject(res.error || res.body || res);
          }
          return resolve(res.body);
        })
    });
  }
};
