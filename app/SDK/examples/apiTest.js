/**
 * Module dependencies.
 */

ApiClient = require('../index.js').ApiClient;

const client = new ApiClient({
    'appkey':'23237058',
    // 'appkey':'23236897',
    'appsecret':'58346a42816f02ed2f70ada090bf6be8',
    // 'appsecret':'e5246086f97c92af1e4c9cd498f51047',
    'url':'http://gw.api.taobao.com/router/rest'
});


module.exports = client;