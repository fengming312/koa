var router = require('koa-router')();
var user_router = require('./user_router');
var all_router = require('./all');
var topApi_router = require('./topApi');
var manage_router = require('./manage_router');
router.use(user_router.routes(), user_router.allowedMethods());
router.use(all_router.routes(), all_router.allowedMethods());
router.use(topApi_router.routes(), topApi_router.allowedMethods());
router.use('/manage',manage_router.routes(), manage_router.allowedMethods());

module.exports = router;
