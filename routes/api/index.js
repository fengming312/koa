var router = require('koa-router')();
var user_router = require('./user_router');
var all_router = require('./all');
var article_router = require('./article');
var topApi_router = require('./topApi');
router.use(user_router.routes(), user_router.allowedMethods());
router.use(all_router.routes(), all_router.allowedMethods());
router.use(article_router.routes(), article_router.allowedMethods());
router.use(topApi_router.routes(), topApi_router.allowedMethods());

module.exports = router;
