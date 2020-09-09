import jsonp from '../common/js/jsonp'
import {commonParams,options} from '../api/config'
import axios from 'axios'
// 获取轮播图数据
export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({},commonParams,{
        platform:'h5',
        uin:0,
        needNewCode:1
    })

    return jsonp(url,data,options)
}

// 获取歌单数据
// export function getDiscList(){
//     const url = '/api/getDiscList'
//     const data = Object.assign({},commonParams,{
//         platform:'yqq',
//         hostUin:0,
//         sin:0,
//         ein:29,
//         sortId:5,
//         needNewCode:0,
//         categoryId:10000000,
//         rnd:Math.random()
//     })
//     return axios.get(url,{
//           param:data
//       }).then(res => {
//           console.log(res)
//           return Promise.resolve(res.data)
//       }).catch(err =>{
//           console.log(err)
//       })
// }

export function getDiscList() {
    // 线上环境地址，同学们根据自己的需要配置修改
    const url = '/api/getDiscList'
  
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'
    })
  
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }

  // 
  export function getSongList(dissid){
    const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    const data = Object.assign({},commonParams,{
      json:1,
      utf8:1,
      disstid:dissid,
      type:1,
      onlysong:0,
      platform:'yqq',
      hostUin:0,
      needNewCode:0,
      g_tk:67232076
  })

  return jsonp(url,data,options)
  }