const URL = require('../../config/url.config');
const Axios = require('axios');
const sequelize = require('./sequelize');
const userModel = sequelize.import('../../models/yhbl_users')
const tixianModel = sequelize.import('../../models/yhbl_tixian')
const tixianRecordModel = sequelize.import('../../models/yhbl_tixian_record')
const schedule = require('node-schedule');
//定时初始化签到状态
let rule = new schedule.RecurrenceRule();
rule.hour =0; rule.minute =0; rule.second =0
var j = schedule.scheduleJob(rule, function(){
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
	let pointsNew = Number(params.points) + num;
  let money = (pointsNew * 0.01).toFixed(2).toString()
	try {
		await userModel.update({
			'points':pointsNew,
			'shareStatus':params.shareStatus,
      'money':money
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
			'shareStatus':res.shareStatus,
      'money':res.money
		}
	} catch (err) {
		ctx.response.body = err
	}
}
//签到加积分
exports.sign = async (ctx, next) => {
	let params = ctx.request.body;
	let num = 10;
	let pointsNew = Number(params.points) + num;
	let money = (pointsNew * 0.01).toFixed(2).toString()
	try {
		await userModel.update({
			'points':pointsNew,
			'signStatus':params.signStatus,
			'money':money
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
			'signStatus':res.signStatus,
			'money':res.money
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
		res = await Axios.get('https://api.weixin.qq.com/sns/jscode2session?appid=wxc1c3cca409f1c515&secret=93c64e90f34057f4365c4880b6b007d2&js_code=' + params.js_code + '&grant_type=authorization_code', {
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
//提现
exports.tixian = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		await userModel.update({
			'points':(params.points-params.tixianMoney*100).toFixed(0).toString(),
			'money':(params.money-params.tixianMoney).toFixed(2).toString()
		},{
			'where': {
				'openid': params.openid
			}
		})
		//如果没有这个openid就创建如果有就拉取积分和余额
		let tixianInfo = await tixianModel.findOne({
			'attributes': ['status'],
			'where': {'openid': params.openid}
		});
		//增加提现记录
		await tixianRecordModel.create({
			'openid': params.openid,
			'status':params.status,
			'zhifubao':params.zhifubao,
			'name':params.name,
			'tel':params.tel,
			'money':params.tixianMoney,
		});
		if (!tixianInfo) {
			await tixianModel.create({
				'openid': params.openid,
				'status':params.status,
				'zhifubao':params.zhifubao,
				'name':params.name,
				'tel':params.tel,
				'money':params.tixianMoney,
			});
			tixianInfo = await tixianModel.findOne({
				'attributes': ['status'],
				'where': {'openid': params.openid}
			});
		}else {
			res = await tixianModel.update({
				'status':params.status,
				'zhifubao':params.zhifubao,
				'name':params.name,
				'tel':params.tel,
				'money':params.money,
			},{
				'where': {'openid': params.openid}
			});
			tixianInfo = await tixianModel.findOne({
				'attributes': ['status'],
				'where': {'openid': params.openid}
			});
		}
		ctx.response.body = tixianInfo
	} catch (err) {
		console.log(err);
		ctx.response.body = "提现数据错误！"
	}
}
//查询提现信息
exports.getTixianInfo = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		//如果没有这个openid就创建如果有就拉取积分和余额
		let tixianInfo = await tixianModel.findOne({
			'where': {'openid': params.openid}
		});
		
		ctx.response.body = tixianInfo
	} catch (err) {
		ctx.response.body = "查询提现数据错误！"
	}
}
//查询提现记录信息
exports.getTixianRecordInfo = async (ctx, next) => {
	let res;
	let params = ctx.request.body;
	try {
		//如果没有这个openid就创建如果有就拉取积分和余额
		let tixianInfo = await tixianRecordModel.findAll({
			'where': {'openid': params.openid}
		});
		
		ctx.response.body = tixianInfo
	} catch (err) {
		ctx.response.body = "查询提现记录信息错误！"
	}
}



