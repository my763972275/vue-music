import {mapGetters} from 'vuex'
export const playlistMixin = {
    computed:{
        ...mapGetters([
            'playlist'
        ])
    },
    mounted(){
      this.hanlePlayList(this.playlist)
    },
    activated(){
      this.hanlePlayList(this.playlist)
    },
    watch:{
        playlist(newVal){
           this.hanlePlayList(newVal)
        }
    },
    methods:{
        hanlePlayList(){
            throw new Error('component must implement handlePlayList method')
        }
    }
}