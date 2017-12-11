const request = require('request-promise')
const url = 'source of data';

exports.requestData = requestData;

function requestData() {
  return request
  .get(url, {
    json: true
  })
}
