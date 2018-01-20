//数据库操作
const Sequelize = require('sequelize');
const config = require('../../config');

var sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
  host: config.db_host,
  dialect: 'mysql',
  port: 3306,
});
const Data = sequelize.import('../../models/sh_article')

exports.article = async(ctx, next) => {
  console.log('开始-------->文章表')
  let params = ctx.request.body;
  console.log(params)
  ctx.response.body = await Data.findAndCountAll({
    limit: 10, //每页限制返回的数据条数
    offset: (params.pageno - 1) * 10 //开始的数据索引，比如当page=2 时offset=10 ，而pagesize我们定义为10，则现在为索引为10，也就是从第11条开始返回数据条目
  });
  ctx.response.body.pageno = params.pageno
  console.log('结束-------->文章表')
}