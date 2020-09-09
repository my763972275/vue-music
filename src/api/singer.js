import jsonp from '../common/js/jsonp'
import {commonParams,options} from '../api/config'
import axios from 'axios'
export  const singerList =[
    { "country": "", "singer_id": 29858, "singer_mid": "00067r4p0wBDDN", "singer_name": "任然", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M00000067r4p0wBDDN.webp" }, 
    { "country": "", "singer_id": 4558, "singer_mid": "0025NhlN2yWrP4", "singer_name": "周杰伦", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000025NhlN2yWrP4.webp" }, 
    { "country": "", "singer_id": 5062, "singer_mid": "002J4UUk29y8BY", "singer_name": "薛之谦", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002J4UUk29y8BY.webp" }, 
    { "country": "", "singer_id": 60505, "singer_mid": "000aHmbL2aPXWH", "singer_name": "李荣浩", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000aHmbL2aPXWH.webp" }, 
    { "country": "", "singer_id": 13948, "singer_mid": "001fNHEf1SFEFN", "singer_name": "G.E.M. 邓紫棋", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001fNHEf1SFEFN.webp" }, 
    { "country": "", "singer_id": 4286, "singer_mid": "001BLpXF2DyJe2", "singer_name": "林俊杰", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001BLpXF2DyJe2.webp" }, 
    { "country": "", "singer_id": 143, "singer_mid": "003Nz2So3XXYek", "singer_name": "陈奕迅", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003Nz2So3XXYek.webp" }, 
    { "country": "", "singer_id": 7221, "singer_mid": "000CK5xN3yZDJt", "singer_name": "许嵩", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000CK5xN3yZDJt.webp" }, 
    { "country": "", "singer_id": 963482, "singer_mid": "004GZcGF2ZgJYo", "singer_name": "白小白", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004GZcGF2ZgJYo.webp" }, 
    { "country": "", "singer_id": 43665, "singer_mid": "004dr7ZS36C2B1", "singer_name": "梦然", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004dr7ZS36C2B1.webp" }, 
    { "country": "", "singer_id": 3954, "singer_mid": "001z2JmX09LLgL", "singer_name": "汪苏泷", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001z2JmX09LLgL.webp" }, 
    { "country": "", "singer_id": 224, "singer_mid": "002raUWw3PXdkT", "singer_name": "张韶涵", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002raUWw3PXdkT.webp" }, 
    { "country": "", "singer_id": 1507534, "singer_mid": "001BHDR33FZVZ0", "singer_name": "毛不易", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001BHDR33FZVZ0.webp" }, 
    { "country": "", "singer_id": 199509, "singer_mid": "003fA5G40k6hKc", "singer_name": "周深", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003fA5G40k6hKc.webp" }, 
    { "country": "", "singer_id": 89698, "singer_mid": "003Cn3Yh16q1MO", "singer_name": "庄心妍", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003Cn3Yh16q1MO.webp" }, 
    { "country": "", "singer_id": 1190986, "singer_mid": "003DBAjk2MMfhR", "singer_name": "BLACKPINK", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003DBAjk2MMfhR.webp" }, 
    { "country": "", "singer_id": 2079450, "singer_mid": "000wHoyF0OZB6B", "singer_name": "胡66", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000wHoyF0OZB6B.webp" }, 
    { "country": "", "singer_id": 4246, "singer_mid": "003iPzNg35cWzp", "singer_name": "程响", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003iPzNg35cWzp.webp" }, 
    { "country": "", "singer_id": 944940, "singer_mid": "0020PeOh4ZaCw1", "singer_name": "Alan Walker (艾兰·沃克)", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000020PeOh4ZaCw1.webp" }, 
    { "country": "", "singer_id": 4199, "singer_mid": "001TgcTp2jHGOR", "singer_name": "蒋雪儿", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001TgcTp2jHGOR.webp" }, 
    { "country": "", "singer_id": 4615, "singer_mid": "002ZOuVm3Qn20Y", "singer_name": "李宇春", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002ZOuVm3Qn20Y.webp" }, 
    { "country": "", "singer_id": 1288409, "singer_mid": "002vALgR3hRRlv", "singer_name": "音阙诗听", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002vALgR3hRRlv.webp" }, 
    { "country": "", "singer_id": 173914, "singer_mid": "003AD17D4PYPFR", "singer_name": "Vicetone", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003AD17D4PYPFR.webp" }, 
    { "country": "", "singer_id": 2, "singer_mid": "002pUZT93gF4Cu", "singer_name": "BEYOND", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002pUZT93gF4Cu.webp" }, 
    { "country": "", "singer_id": 265, "singer_mid": "001JDzPT3JdvqK", "singer_name": "王力宏", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001JDzPT3JdvqK.webp" }, 
    { "country": "", "singer_id": 1103924, "singer_mid": "001ZVMXf3ZYVX7", "singer_name": "曲肖冰", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001ZVMXf3ZYVX7.webp" }, 
    { "country": "", "singer_id": 1016794, "singer_mid": "002nXp292LIOGV", "singer_name": "蔡徐坤", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002nXp292LIOGV.webp" }, 
    { "country": "", "singer_id": 1473880, "singer_mid": "004V53Ga0bV65j", "singer_name": "陈雪凝", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004V53Ga0bV65j.webp" }, 
    { "country": "", "singer_id": 174, "singer_mid": "004Be55m1SJaLk", "singer_name": "张学友", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004Be55m1SJaLk.webp" }, 
    { "country": "", "singer_id": 6499, "singer_mid": "002azErJ0UcDN6", "singer_name": "张杰", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002azErJ0UcDN6.webp" }, 
    { "country": "", "singer_id": 39657, "singer_mid": "000LsFo136kIv4", "singer_name": "魏新雨", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000LsFo136kIv4.webp" }, 
    { "country": "", "singer_id": 198135, "singer_mid": "001IoTZp19YMDG", "singer_name": "易烊千玺", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001IoTZp19YMDG.webp" }, 
    { "country": "", "singer_id": 11608, "singer_mid": "003tMm0y0TuewY", "singer_name": "杨宗纬", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003tMm0y0TuewY.webp" }, 
    { "country": "", "singer_id": 34412, "singer_mid": "000zmpju02bEBm", "singer_name": "TFBOYS", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000zmpju02bEBm.webp" }, 
    { "country": "", "singer_id": 11606, "singer_mid": "001f0VyZ1hmWZ1", "singer_name": "林宥嘉", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001f0VyZ1hmWZ1.webp" }, 
    { "country": "", "singer_id": 4607, "singer_mid": "000aw4WC2EQYTv", "singer_name": "张靓颖", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000aw4WC2EQYTv.webp" }, 
    { "country": "", "singer_id": 940748, "singer_mid": "004WgCsE3KBddt", "singer_name": "陈粒", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004WgCsE3KBddt.webp" }, 
    { "country": "", "singer_id": 74, "singer_mid": "000Sp0Bz4JXH0o", "singer_name": "五月天", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000Sp0Bz4JXH0o.webp" }, 
    { "country": "", "singer_id": 40449, "singer_mid": "001Lr98T0yEWAk", "singer_name": "赵雷", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001Lr98T0yEWAk.webp" }, 
    { "country": "", "singer_id": 22855, "singer_mid": "0040Eq913AwwEZ", "singer_name": "阿悄", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000040Eq913AwwEZ.webp" }, 
    { "country": "", "singer_id": 112, "singer_mid": "000hNnWC3kko2c", "singer_name": "蔡健雅", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000hNnWC3kko2c.webp" }, 
    { "country": "", "singer_id": 60894, "singer_mid": "002MfEld3FWp0R", "singer_name": "张艺兴", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002MfEld3FWp0R.webp" }, 
    { "country": "", "singer_id": 51, "singer_mid": "003jJGvv3C82KZ", "singer_name": "刘若英", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003jJGvv3C82KZ.webp" }, 
    { "country": "", "singer_id": 171, "singer_mid": "000xogLP35ayzS", "singer_name": "杨千嬅", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000xogLP35ayzS.webp" }, 
    { "country": "", "singer_id": 167, "singer_mid": "0000mFvh1jtLcz", "singer_name": "张信哲", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000000mFvh1jtLcz.webp" }, 
    { "country": "", "singer_id": 109, "singer_mid": "001pWERg3vFgg8", "singer_name": "孙燕姿", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001pWERg3vFgg8.webp" }, 
    { "country": "", "singer_id": 200521, "singer_mid": "0022bqqN3dRfN4", "singer_name": "周兴哲", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000022bqqN3dRfN4.webp" }, 
    { "country": "", "singer_id": 163, "singer_mid": "003aQYLo2x8izP", "singer_name": "刘德华", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003aQYLo2x8izP.webp" }, 
    { "country": "", "singer_id": 61620, "singer_mid": "004KKLWZ4320g1", "singer_name": "宋冬野", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004KKLWZ4320g1.webp" }, 
    { "country": "", "singer_id": 54, "singer_mid": "000cISVf2QqLc6", "singer_name": "莫文蔚", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000cISVf2QqLc6.webp" }, 
    { "country": "", "singer_id": 11733, "singer_mid": "004AlfUb0cVkN1", "singer_name": "BIGBANG (빅뱅)", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004AlfUb0cVkN1.webp" }, 
    { "country": "", "singer_id": 14411, "singer_mid": "004dXznj3zlHKW", "singer_name": "孙露", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004dXznj3zlHKW.webp" }, 
    { "country": "", "singer_id": 163550, "singer_mid": "002Vcz8F2hpBQj", "singer_name": "华晨宇", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002Vcz8F2hpBQj.webp" }, 
    { "country": "", "singer_id": 244, "singer_mid": "000iZroE1VWLJG", "singer_name": "刀郎", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000iZroE1VWLJG.webp" }, 
    { "country": "", "singer_id": 51313, "singer_mid": "002YZsgF2rNFZL", "singer_name": "DJ小鱼儿", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002YZsgF2rNFZL.webp" }, 
    { "country": "", "singer_id": 3376, "singer_mid": "00235pCx2tYjlq", "singer_name": "许巍", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M00000235pCx2tYjlq.webp" }, 
    { "country": "", "singer_id": 6154, "singer_mid": "0022DRSx1GZbbS", "singer_name": "金池", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000022DRSx1GZbbS.webp" }, 
    { "country": "", "singer_id": 7139, "singer_mid": "002bRRFq26jMHU", "singer_name": "马健涛", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002bRRFq26jMHU.webp" }, 
    { "country": "", "singer_id": 156095, "singer_mid": "004ABIFV1EZUAj", "singer_name": "The Chainsmokers", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004ABIFV1EZUAj.webp" }, 
    { "country": "", "singer_id": 4365, "singer_mid": "004NMZuf2BLjg8", "singer_name": "周传雄", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000004NMZuf2BLjg8.webp" }, 
    { "country": "", "singer_id": 8061, "singer_mid": "002DYd0J2HmOvc", "singer_name": "儿歌", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002DYd0J2HmOvc.webp" }, 
    { "country": "", "singer_id": 44, "singer_mid": "000GGDys0yA0Nk", "singer_name": "梁静茹", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000GGDys0yA0Nk.webp" }, 
    { "country": "", "singer_id": 168, "singer_mid": "0044wQXL0ElWF1", "singer_name": "张宇", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000044wQXL0ElWF1.webp" }, 
    { "country": "", "singer_id": 87, "singer_mid": "0001v4XU1cZxPy", "singer_name": "张国荣", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000001v4XU1cZxPy.webp" }, 
    { "country": "", "singer_id": 4701, "singer_mid": "001ByAsv3XCdgm", "singer_name": "田馥甄", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001ByAsv3XCdgm.webp" }, 
    { "country": "", "singer_id": 264, "singer_mid": "000GDDuQ3sGQiT", "singer_name": "王菲", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000GDDuQ3sGQiT.webp" }, 
    { "country": "", "singer_id": 42, "singer_mid": "002UGAkU4ZDoTZ", "singer_name": "李宗盛", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000002UGAkU4ZDoTZ.webp" }, 
    { "country": "", "singer_id": 227, "singer_mid": "0027pdHE4STooO", "singer_name": "蔡依林", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000027pdHE4STooO.webp" }, 
    { "country": "", "singer_id": 161444, "singer_mid": "003bQEFA3KrvLI", "singer_name": "刘瑞琦", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003bQEFA3KrvLI.webp" }, 
    { "country": "", "singer_id": 96, "singer_mid": "003NThQh3ujqIo", "singer_name": "周华健", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003NThQh3ujqIo.webp" }, 
    { "country": "", "singer_id": 219, "singer_mid": "003AfDK34H82GU", "singer_name": "张敬轩", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003AfDK34H82GU.webp" },
     { "country": "", "singer_id": 228, "singer_mid": "000JvETZ3tOrPR", "singer_name": "陈慧娴", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000JvETZ3tOrPR.webp" }, 
     { "country": "", "singer_id": 149, "singer_mid": "0040D7gK4aI54k", "singer_name": "谭咏麟", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M0000040D7gK4aI54k.webp" }, 
     { "country": "", "singer_id": 19454, "singer_mid": "001Ah7ZB0siso7", "singer_name": "降央卓玛", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001Ah7ZB0siso7.webp" }, 
     { "country": "", "singer_id": 16012, "singer_mid": "000acPsp0cfUZr", "singer_name": "张芸京", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000acPsp0cfUZr.webp" }, 
     { "country": "", "singer_id": 204664, "singer_mid": "001SqkF53OEhdO", "singer_name": "鹿晗", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001SqkF53OEhdO.webp" }, 
     { "country": "", "singer_id": 5924, "singer_mid": "000Q4W691sMvLG", "singer_name": "苏打绿", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000Q4W691sMvLG.webp" }, 
     { "country": "", "singer_id": 1011983, "singer_mid": "001t94rh4OpQn0", "singer_name": "双笙", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000001t94rh4OpQn0.webp" }, 
     { "country": "", "singer_id": 31035, "singer_mid": "003U6coz1AhN3H", "singer_name": "简弘亦", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000003U6coz1AhN3H.webp" }, 
     { "country": "", "singer_id": 4442, "singer_mid": "000mLAT42CFWNa", "singer_name": "朴树", "singer_pic": "http:\/\/y.gtimg.cn\/music\/photo_new\/T001R150x150M000000mLAT42CFWNa.webp" } 
    ]

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}

// 获取歌手列表
export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}

// 获取歌曲的vkey
export function getSongVkey(songmid) {
  const url ='/api/getSongVkey'
  const data = Object.assign({},commonParams,{
    "-":"getplaysongvkey564623675413412",
    "g_tk":"94551879",
    "loginUin":"13373122569",
    "format":"json",
    "inCharset":"utf8",
    "outCharset":"utf-8",
    "notice":0,
    "platform":"yqq.json",
    "needNewCode":0,
    "data":{
      "req_0":{
        "module":"vkey.GetVkeyServer",
        "method":"CgiGetVkey",
        "param":{
          "guid":5774462924,
          "songmid":[ `${songmid}` ],
          "songtype":[0],
          "uin":"0",
          "loginflag":1,
          "platform":"20"
        }
      },
      "comm":{
        "uin":1337312569,
        "format":"json",
        "ct":24,
        "cv":0
      }
    }
  })
  return axios.get(url,{
    params:data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}