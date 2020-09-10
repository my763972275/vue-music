import {commonParams,options} from './config'
// import 
import jsonp from '../common/js/jsonp'
export function  getTopList(){
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
    const data = Object.assign({},commonParams,{
        platform:'h5',
        needNewCode:1,
    })
    return jsonp(url,data,options)
}


export function getMusicList(topid){
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
    const data = Object.assign({},commonParams,{
        platform:'h5',
        page:'detail',
        needNewCode:1,
        type:'top',
        tpl:3,
        topid
    })
    return jsonp(url,data,options)
}