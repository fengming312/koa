//获取用户
const TopApi = require('../SDK/examples/apiTest');
exports.topApi = async(ctx, next) => {
    console.log('淘口令----------->开始')
    let params = ctx.request.body;
    let temp = await new Promise((resolve, reject) => {
        TopApi.execute('taobao.tbk.tpwd.create', {
                'text': params.title,
                'url': params.url,
                'logo': params.logo
            },
            (error, response) => {
                if (!error) {
                    console.log(response)
                    resolve(response);
                } else
                    reject(error);
            }
        );
    })
    ctx.body = {
        modle: temp.data.model,
    }
}