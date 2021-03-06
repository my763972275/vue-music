import {commonParams} from './config'
import axios from 'axios'
const debug = process.env.NODE_ENV !== 'production'

export function getLyric(mid) {
    const url = debug ? '/api/lyric' : 'http://ustbhuangyi.com/music/api/lyric'
  
    const data = Object.assign({}, commonParams, {
      songmid: mid,
      platform: 'yqq',
      hostUin: 0,
      needNewCode: 0,
      categoryId: 10000000,
      pcachetime: +new Date(),
      format: 'json'
    })
  
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
}