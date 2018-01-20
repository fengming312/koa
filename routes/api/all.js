var router = require('koa-router')();
var all_controller = require('../../app/controllers/all_controller');
router.post('/all', all_controller.all);

module.exports = router;