const Koa = require('koa')
const app = new Koa()
const response_formatter = require('./middlewares/response_formatter');
const router = require('koa-router')()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const api = require('./routes/api')
//log工具
const logUtil = require('./utils/log_util');


app.use(cors());

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async(ctx, next) => {
  //响应开始时间
  const start = new Date()
  //响应间隔时间
  var ms;
  try {
    //开始进入到下一个中间件
    await next();
    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponse(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
})

//添加格式化处理响应结果的中间件，在添加路由之前调用
//仅对/api开头的url进行格式化处理
app.use(response_formatter('^/api'));

// routes
router.use('/api', api.routes(), api.allowedMethods())
app.use(router.routes(), router.allowedMethods())
// response
app.on('error', function (err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx);
});
module.exports = app