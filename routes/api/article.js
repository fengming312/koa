var router = require('koa-router')();
var article_controller = require('../../app/controllers/article_controller');
router.get('/article', article_controller.article);

module.exports = router;