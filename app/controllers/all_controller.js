const Axios =require('axios');
const config = require('../../config/url.config');

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
      res = await Axios.get(config.dataoke_jingxuan, {
        params: {
          appkey: config.dataoke_key,
          page:params.page,
        }
      })
      for (let i = 0; i < res.data.result.length; i++) {
        if (!res.data.result[i].Pic.startsWith("http")) {
          res.data.result[i].Pic = "http:"+res.data.result[i].Pic;
        }
      }
    }else {
      res = await Axios.get(config.taokezhushou_jingxuan, {
        params: {
          app_key: config.dataokezhushou_key,
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
    res = await Axios.get(config.dataoke_tophour, {
      params: {
        appkey: config.dataoke_key,
        page:params.page,
        v:2
      }
    })
    for (let i = 0; i < res.data.result.length; i++) {
      if (!res.data.result[i].Pic.startsWith("http")) {
        res.data.result[i].Pic = "http:"+res.data.result[i].Pic;
      }
    }
  }else if (params.api == "top_day") {
    res = await Axios.get(config.taokezhushou_topday, {
      params: {
        app_key: config.dataokezhushou_key,
        page:params.page,
      }
    })
  }else if (params.api == "search") {
    res = await Axios.get(config.qingtao_search, {
      params: {
        s_type:'1',
        v:'1.0',
        app_key: config.qingtao_key,
        page:params.page,
        sort:params.sort,
        key_word:params.searchValue,
      }
    })
  }
  
  ctx.response.body = res.data
}