var router = require('koa-router')();
var user_controller = require('../../app/controllers/user_controller');

router.get('/getUser', user_controller.getUser);
router.post('/share', user_controller.share);
router.post('/getOpenid', user_controller.getOpenid);
router.post('/sign', user_controller.sign);

module.exports = router;
