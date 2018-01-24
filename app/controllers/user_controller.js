const URL = require('../../config/url.config');
const Axios = require('axios');
const sequelize = require('./sequelize');
const userModel = sequelize.import('../../models/yhbl_users')

//获取用户
exports.getUser = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		res = await userModel.create({
			openid: '144111',
			nickName: 'k4g',
		});
		ctx.response.body = "插入数据成功！"
	} catch (err) {
		console.log(err);
	}
}
//转发加积分
exports.share = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		
		ctx.response.body = "转发成功！"
	} catch (err) {
		console.log(err);
	}
}
//获取openid
exports.getOpenid = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		res = await Axios.get('https://api.weixin.qq.com/sns/jscode2session?appid=wx21486179476d27c9&secret=c04de458bdc557c4df740b5c1695c599&js_code='+params.js_code+'&grant_type=authorization_code', {
			params: {
//			'grant_type': 'authorization_code',
//			'secret': 'c04de458bdc557c4df740b5c1695c599',
//			'appid': 'wx21486179476d27c9',
////			appid: 'wxc1c3cca409f1c515',//个人号
////			secret: '93c64e90f34057f4365c4880b6b007d2',//个人号
//			'js_code': params.js_code,
			}
		})
		console.log(res.data);
		ctx.response.body = res.data//这里一定一定一定一定不要只写成res
	} catch (err) {
		console.log(err);
	}

}


