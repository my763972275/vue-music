import jsonp from '../common/js/jsonp'
import {commonParams,options} from '../api/config'
import { Base64 } from 'js-base64'
import axios from 'axios'
export function getHotKey(){
    const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({},commonParams,{
        platform:'h5',
        needNewCode:1,
        g_tk:1928093487
    })
    return jsonp(url,data,options)
}

export function search(query, page, zhida, perpage) {
    // const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
    const url = '/api/search'
    const data = Object.assign({}, commonParams, {
      w: query,
      p: page,
      perpage,
      n: perpage,
      catZhida: zhida ? 1 : 0,
      zhidaqu: 1,
      t: 0,
      flag: 1,
      ie: 'utf-8',
      sem: 1,
      aggr: 0,
      remoteplace: 'txt.mqq.all',
      uin: '',
      needNewCode: 1,
      platform: 'h5',
      g_tk:5381,
      _: 1599719007340,
      g_tk_new_20200303: 5381
    })
  
    return axios.get(url,{
      params:data
    }).then(res => {
      console.log(res)
      return Promise.resolve(res.data)
    })


    // return new Promise((resolve, reject) => {
    //   getLyric(this.mid).then((res) => {
    //     if (res.retcode === ERR_OK) {
    //       this.lyric = Base64.decode(res.lyric) 
    //       resolve(this.lyric)
    //     } else {
    //       reject('no lyric')
    //     }
    //   })
    // })
  }