import { getLyric } from "../../api/song"
import {ERR_OK} from '../../api/config'
import { Base64 } from 'js-base64'
export default class Song{
    constructor({id,mid,singer,name,album,duration,image,url}){
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.album = album
        this.duration = duration
        this.image = image
        this.url = url
    }
    getLyric() {
        if (this.lyric) {
          return Promise.resolve(this.lyric)
        }
    
        return new Promise((resolve, reject) => {
          getLyric(this.mid).then((res) => {
            if (res.retcode === ERR_OK) {
              this.lyric = Base64.decode(res.lyric) 
              resolve(this.lyric)
            } else {
              reject('no lyric')
            }
          })
        })
      }
}

export function createSong(musicData){
    return new Song({
        id:musicData.songid,
        mid:musicData.songmid,
        singer:filterSinger(musicData.singer),
        name:musicData.songname,
        album:musicData.albumname,
        duration:musicData.interval,
        image:`https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
        // http://dl.stream.qqmusic.qq.com/C400${音乐mid}.m4a？vkey=${vkey}&guid=1819638027&uin=0&fromtag=66
        url:'https://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400004Fimy419PpsA.m4a?guid=5774462924&vkey=2335D1E8D0A87EB936C1095AE66F742F2255FFBC11C3168142EB82FDF0652E3C2A71086748EFCA0AB6E5CB66DE380BFBB2A9CE6D1463DB1C&uin=0&fromtag=38'
    })
    
}

function filterSinger(singer){
    let ret = []
    if(!singer){
        return ''
    }
    singer.forEach(s => {
        ret.push(s.name)
    });
    return ret.join('/')
}

