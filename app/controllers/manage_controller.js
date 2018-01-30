const sequelize = require('./sequelize');
const checkModel = sequelize.import('../../models/yhbl_check')


//审核
exports.postCheck = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		res = await checkModel.update({
			'tagShow':params.tagShow,
		},{
			'where': {}
		});
		if (params.tagShow == '2') {
			ctx.response.body = {
				msg:'小程序已设置为审核状态！',
				tagShow:'2',
				buyText:""
			}
		}else if (params.tagShow == '1') {
			ctx.response.body = {
				msg:'小程序已设置为运行状态！',
				tagShow:'1',
				buyText:"复制淘口令，打开【手机淘宝APP】即可【领取优惠卷】并购买"
			}
		}
		
	} catch (err) {
		console.log(err);
	}
}
exports.getCheck = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		res = await checkModel.findOne({
			'attributes': ['tagShow'],
			'where': {}
		});
		ctx.response.body = {
			'msg':'获取审核状态成功！',
			'tagShow':res.tagShow
		}
	} catch (err) {
		console.log(err);
	}
}



