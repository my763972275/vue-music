<template>
    <div class="signer" ref="singer">
        <list-view :data = "singers" @select="selectSinger" ref="list"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
import {singerList,getSingerList} from '../../api/singer'
import {ERR_OK} from '../../api/config'
import Singer from '../../common/js/singer'
import ListView from '../../base/listview/listview'
import {mapMutations} from 'vuex'
 import {playlistMixin} from '../../common/js/mixin'
const HOT_NAME = '热门'
const HOT_SINGER_LENGTH = 10
    export default {
        mixins: [playlistMixin],
        components:{
            ListView
        },
        data(){
            return{
                singers:[]
            }
        },
        created(){
            this._getSingerList()
            // this._getSingerDetail()
        },
        methods:{
           handlePlaylist(playlist) {
            const bottom = playlist.length > 0 ? '60px' : ''
            this.$refs.singer.style.bottom = bottom
            this.$refs.list.refresh()
          },
            // 获取歌手列表数据
            _getSingerList(){
                getSingerList().then(res => {
                    console.log(res)
                    if(res.code === ERR_OK){
                        this.singers = this._normalizeSingrt(res.data.list)
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
            _normalizeSingrt(list){
                let map = {
                    hot:{
                        title:HOT_NAME,
                        items:[]
                    }
                }
                list.forEach((item,index) => {
                    if(index < HOT_SINGER_LENGTH){
                        map.hot.items.push(new Singer({
                            id:item.Fsinger_mid,
                            name:item.Fsinger_name
                        }))
                    }
                    const key = item.Findex
                    if(!map[key]){
                        map[key] = {
                            title:key,
                            items:[]
                        }
                    }
                    map[key].items.push(new Singer({
                        id:item.Fsinger_mid,
                        name:item.Fsinger_name
                    }))
                });
                // 得到有序列表,需要处理map
                let hot = []
                let ret = []
                for(let key in map){
                    let val = map[key]
                    if(val.title.match(/[a-zA-Z]/)){
                        ret.push(val)
                    }else if(val.title === HOT_NAME){
                        hot.push(val)
                    }
                }
                ret.sort((a,b) => {
                    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
                })
                return hot.concat(ret)
            },
            selectSinger(singer){
                this.$router.push({
                    path:`/singer/${singer.id}`
                })
                this.setSinger(singer)
            },
            ...mapMutations({
                setSinger:'SET_SINGER'
            })
        }
    }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.signer
    position:fixed
    top:88px
    bottom:0
    width:100%
</style>