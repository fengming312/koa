var router = require('koa-router')();
var user_router = require('./user_router');
var all_router = require('./all');
var center_router = require('./center_router');
var topApi_router = require('./topApi');
router.use(user_router.routes(), user_router.allowedMethods());
router.use(all_router.routes(), all_router.allowedMethods());
router.use(center_router.routes(), center_router.allowedMethods());
router.use(topApi_router.routes(), topApi_router.allowedMethods());

module.exports = router;
