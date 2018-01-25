const URL = require('../../config/url.config');
const Axios = require('axios');
const sequelize = require('./sequelize');
const userModel = sequelize.import('../../models/yhbl_users')
const schedule = require('node-schedule');
//定时初始化签到状态
let rule = new schedule.RecurrenceRule();
rule.hour =0; rule.minute =0; rule.second =0
var j = schedule.scheduleJob(rule, function(){
	console.log('现在时间：',new Date());
	userModel.update({
		'shareStatus':'N',
		'signStatus':'N'
	},{
		'where': {}
	})
});

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
	let params = ctx.request.body;
	let num = 50;
	let pointsNew = Number(params.points) + num
	try {
		await userModel.update({
			'points':pointsNew,
			'shareStatus':params.shareStatus
		},{
			'where': {
				'openid': params.openid
			}
		})
		let res = await userModel.findOne({
			'attributes': ['points', 'money','shareStatus','signStatus','openid'],
			'where': {'openid': params.openid}
		});
		ctx.response.body = {
			'msg':'转发成功！',
			'pointsNum':num,
			'points':res.points,
			'shareStatus':res.shareStatus
		}
	} catch (err) {
		ctx.response.body = err
	}
}
//签到加积分
exports.sign = async (ctx, next) => {
	let params = ctx.request.body;
	let num = 10;
	let pointsNew = Number(params.points) + num
	try {
		await userModel.update({
			'points':pointsNew,
			'signStatus':params.signStatus
		},{
			'where': {
				'openid': params.openid
			}
		})
		let res = await userModel.findOne({
			'attributes': ['points', 'money','shareStatus','signStatus','openid'],
			'where': {'openid': params.openid}
		});
		ctx.response.body = {
			'msg':'签到成功！',
			'pointsNum':num,
			'points':res.points,
			'signStatus':res.signStatus
		}
	} catch (err) {
		ctx.response.body = err
	}
}
//获取openid
exports.getOpenid = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		res = await Axios.get('https://api.weixin.qq.com/sns/jscode2session?appid=wx21486179476d27c9&secret=c04de458bdc557c4df740b5c1695c599&js_code=' + params.js_code + '&grant_type=authorization_code', {
			params: {}
		})
		//如果没有这个openid就创建如果有就拉取积分和余额
		let userInfo = await userModel.findOne({
			'attributes': ['points', 'money','shareStatus','signStatus','openid'],
			'where': {'openid': res.data.openid}
		});
		if (!userInfo) {
			await userModel.create({
				'openid': res.data.openid,
				'session_key': res.data.session_key,
				'avatarUrl': params.avatarUrl,
				'nickName': params.nickName,
				'gender': params.gender,
				'city': params.city,
				'province': params.province,
				'country': params.country,
				'language': params.language,
				'points':0,
				'money':0,
				'shareStatus':'N',
				'signStatus':'N',
			});
			userInfo = await userModel.findOne({
				'attributes': ['points', 'money','shareStatus','signStatus','openid'],
				'where': {'openid': res.data.openid}
			});
		}
		ctx.response.body = userInfo
//		ctx.response.body = res.data//这里一定一定一定一定不要只写成res
	} catch (err) {
		ctx.response.body = "插入数据失败！"
	}
	
}


