<template>
    <transition name="slide">
        <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
    </transition>
    
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '../../api/singer'
import {ERR_OK} from '../../api/config'
import Song from '../../common/js/song'
import {createSong} from '../../common/js/song'
import MusicList from '../music-list/music-list'
    export default {
        components:{
            MusicList
        },
        computed:{
            title(){
                return this.singer.name
            },
            bgImage(){
                return this.singer.avatar
            },
            ...mapGetters([
                'singer'
            ])
        },
        data(){
            return{
                songs:[]
            }
        },
        created(){
           this._getSingerDetail();
        },
        methods:{
            _getSingerDetail(){
                if(!this.singer.id){
                  return this.$router.push('/singer')
                }
                getSingerDetail(this.singer.id).then(res =>{
                    if(res.code == ERR_OK){
                        console.log(res.data.list)
                        this.songs = this._normalizeSongs(res.data.list)
                        console.log(this.songs)
                    }
                })
            },
            _normalizeSongs(list){
                let ret = []
                list.forEach((item) => {
                    let {musicData} = item
                    if(musicData.songid && musicData.albummid){
                        ret.push(createSong(musicData))
                    }
                });
                return ret
                // 000MKKJW0TJaQf.webp
            }
            
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable'
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>