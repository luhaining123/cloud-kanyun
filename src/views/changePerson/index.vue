<template>
    <div class="change com">
      <div class="bottom">
        <ningput @success="changesuccess">
          <div class="row-1">
            <div class="b-left">
              头像
            </div>
            <div class="b-right">
              <img :src="userData.user.avatar||tupian" alt="默认图片">
              <i class="iconfont icon-xiayejiantou"></i>
            </div>
          </div>
        </ningput>
        <router-link to="/changeName">
          <div class="row-1">
            <div class="b-left">
              昵称
            </div>
            <div class="b-right">
              {{userData.user.username}}
              <i class="iconfont icon-xiayejiantou"></i>
            </div>
          </div>
        </router-link>
        <router-link to="/changedesc">
          <div class="row-1 gexing">
            <div class="b-left">
              个性签名
            </div>
            <div class="b-right">
              {{userData.user.desc||'这家伙很懒'}}
              <i class="iconfont icon-xiayejiantou"></i>
            </div>
          </div>
        </router-link>

        <div class="row-1">
          <div class="b-left">
            修改密码
          </div>
          <div class="b-right">
            <i class="iconfont icon-xiayejiantou"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ningput from '@/views/component/changeavatar/index'
  import tupian from '@/views/person/img/1.jpg'
  import {Toast} from 'mint-ui'
  export default {
        name: "index",
    data(){
      return{
        // userData:{},
        tupian
      }
    },
    components:{
      ningput
    },
    methods:{
      getuser(){
        this.$axios.get(this.$api.user).then(res=>{
          // this.userData = res.data
          console.log(this.userData,'qqq');
          console.log(res.data,'ddd');
        })
      },
      changesuccess(url){
        this.$axios.put(this.$api.changeAvatar,{avatar:url}).then(res=>{
          if(res.code==200){
            Toast({
              message:'头像修改成功',
              duration: 500
            })
            this.$store.dispatch('getuser')
          }
        })
      }
    },
    created() {
      // this.getuser()
        let token = localStorage.getItem('token');
      if(token){
        this.$store.dispatch('getuser')
      }
    },
    computed:{
      userData(){
        return this.$store.state.usermsg
      }
    }
    }
</script>

<style scoped lang="scss">
   .change{
     .top{
       display: flex;
       background: #0099ff;
       height: 40px;
       .top-left{
         color: #e0e0e0;
         width: 60px;
         display: flex;
         align-items: center;
         .iconfont{
           font-size: 20px;
         }
         span{
           font-size: 16px;
         }
       }
       .top-right{
         flex: 1;
         font-size: 20px;
         padding-top: 8px;
         padding-left: 60px;
         color: #e0e0e0;
       }
     }
     .bottom{
       padding: 0 4px;
       .row-1,.gexing{
         height: 80px;
         /*border: 1px solid #000;*/
         border-bottom: 1px solid #bfbfbf;
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-size: 18px;
         .b-right {
           display: flex;
           justify-content: space-between;
           align-items: center;
           font-size: 14px;
           img{
             height: 60px;
             width: 60px;
             border-radius: 50%;
           }
           i{
             font-size: 30px;
           }
        }
       }
     }
   }
</style>
