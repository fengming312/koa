var router = require('koa-router')();
var user_controller = require('../../app/controllers/user_controller');

router.get('/getUser', user_controller.getUser);
router.post('/share', user_controller.share);
router.post('/getOpenid', user_controller.getOpenid);
router.post('/sign', user_controller.sign);
router.post('/tixian', user_controller.tixian);
router.post('/getTixianInfo', user_controller.getTixianInfo);
router.post('/getTixianRecordInfo', user_controller.getTixianRecordInfo);

module.exports = router;
