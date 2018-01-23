//数据库实例化
const Sequelize = require('sequelize');
const config = require('../../config');
module.exports = new Sequelize(config.db_name, config.db_user, config.db_pass, {
	host: config.db_host,
	dialect: 'mysql',
	port: 3306,
	timezone: "+08:00",
});