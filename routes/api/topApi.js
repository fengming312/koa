var router = require('koa-router')();
var topApi_controller = require('../../app/controllers/topApi_controller');
router.post('/topApi', topApi_controller.topApi);

module.exports = router;