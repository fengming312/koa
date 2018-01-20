const Axios =require('axios');

exports.all = async (ctx,next) => {
  let res;
  let params = ctx.request.body;
  if (params.api == "all") {
    // if (params.cate_id == 0) {
    //   res = await Axios.get('http://api.taokezhushou.com/api/v1/all', {
    //     params: {
    //       app_key: 'dda0b3fd3879156d',
    //       page:params.page,
    //     }
    //   })
    if (params.cate_id == 0) {
      res = await Axios.get('http://api.dataoke.com/index.php?r=Port/index&type=total&v=2', {
        params: {
          appkey: 'z3slibyowj',
          page:params.page,
        }
      })
    }else {
      res = await Axios.get('http://api.taokezhushou.com/api/v1/search', {
        params: {
          app_key: 'dda0b3fd3879156d',
          page:params.page,
          cate_id:params.cate_id,
          sort:params.sort
        }
      })
    }
  }else if (params.api == "top_hour") {
    // res = await Axios.get('http://api.taokezhushou.com/api/v1/top_hour', {
    //   params: {
    //     app_key: 'dda0b3fd3879156d',
    //     page:params.page,
    //   }
    // })
    res = await Axios.get('http://api.dataoke.com/index.php?r=Port/index&type=paoliang', {
      params: {
        appkey: 'z3slibyowj',
        page:params.page,
        v:2
      }
    })
  }else if (params.api == "top_day") {
    res = await Axios.get('http://api.taokezhushou.com/api/v1/top_day', {
      params: {
        app_key: 'dda0b3fd3879156d',
        page:params.page,
      }
    })
  }
  
  ctx.response.body = res.data
}