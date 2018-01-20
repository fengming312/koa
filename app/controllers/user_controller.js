//获取用户
exports.getUser = async (ctx, next) => {
    console.log('1111111111111111111111')
    ctx.body = {
        username: '阿，希爸',
        age: 30
    }
}


