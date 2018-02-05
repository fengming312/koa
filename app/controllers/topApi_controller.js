//获取用户
const TopApi = require('../SDK/examples/apiTest');
exports.topApi = async(ctx, next) => {
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

/*
'text': '【年货节】支付宝红包，最高888元，返回短信再复制，打开支付宝领红包！',
'url': 'https://s.click.taobao.com/RTdNZUw',
'logo': 'https://img.alicdn.com/tfs/TB1dpkpmxrI8KJjy0FpXXb5hVXa-440-180.jpg'
*/
