const URL = require('../../config/url.config');
const Axios =require('axios');
const sequelize =require('./sequelize');
const userModel = sequelize.import('../../models/yhbl_users')
//获取用户openid
exports.getOpenID = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	res = await Axios.get(URL.openid, {
		params: {
			appid: 'wx21486179476d27c9',
			secret:'dc0c24cdf408f4cc5c6a14d6c14b41fe',
			js_code:params.page,
		}
	})
}
//获取用户
exports.getUser = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		res = await userModel.create({
			openid:'144111',
			nickName:'k4g',
		});
		ctx.response.body = "插入数据成功！"
	} catch (err) {
		console.log(err);
	}
	
}


