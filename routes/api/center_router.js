var router = require('koa-router')();
var center_controller = require('../../app/controllers/center_controller');
router.get('/center', center_controller.center);

module.exports = router;