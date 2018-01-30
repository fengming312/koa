//小程序后台管理系统的路由
var router = require('koa-router')();
var manage_controller = require('../../app/controllers/manage_controller');
router.post('/postCheck', manage_controller.postCheck);
router.post('/getCheck', manage_controller.getCheck);

module.exports = router;