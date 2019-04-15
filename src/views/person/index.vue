<template>
    <div class="person">
      <div class="top">
       <div class="mmmm" v-if="!userrData.user">
         <router-link :to="{name:'login'}">
           <div class="login">
             <div class="top-left">
               <h1>
                 立即登陆
               </h1>
               <div class="wenzi">
                 时光回头,当下最重要
               </div>
             </div>
             <div class="top-right">
               <img src="./img/1.jpg" alt="">
               <i class="iconfont icon-xiayejiantou"></i>
             </div>
           </div>
         </router-link>
         <div class="des">
           <div class="des-left">
             <div class="read">
              0
             <span> 本</span>
             </div>
             <div class="readed">
               已读书籍
             </div>
           </div>
           <div class="shuxian">
             <i class="iconfont icon-shuxian"></i>
           </div>
           <div class="des-center">
             <div class="coll">
               0
               <span> 本</span>
             </div>
             <div class="colled">
               已收藏书籍
             </div>
           </div>
           <div class="shuxian">
             <i class="iconfont icon-shuxian"></i>
           </div>
           <div class="des-right">
             <div class="like">
               0
               <span> 本</span>
             </div>
             <div class="liked">
               喜欢
             </div>
           </div>
         </div>
         <div class="bottom">
             <div class="xiugai">
               <div class="aaa">
                 <i class="iconfont icon-xiugai"></i>
                 <span>修改个人信息</span>
               </div>
               <div class="bbb">
                 <i class="iconfont icon-xiayejiantou"></i>
               </div>
             </div>
           <div class="shoucang">
             <div class="aaa">
               <i class="iconfont icon-shoucang"></i>
               <span>收藏的书单</span>
             </div>
             <div class="bbb">
               <i class="iconfont icon-xiayejiantou"></i>
             </div>
           </div>
           <div class="xihuan">
             <div class="aaa">
               <i class="iconfont icon-weibiaoti-"></i>
               <span>喜欢的书</span>
             </div>
             <div class="bbb">
               <i class="iconfont icon-xiayejiantou"></i>
             </div>
           </div>
       </div>
       </div>
        <!--描述-->
        <div class="ddd" v-else>
          <div class="login usermsg">
            <div class="top-left">
              <h1>
                {{userrData.user.username||userrData.user.phone}}
              </h1>
              <div class="wenzi">
                {{userrData.user.desc||'这家伙很懒,什么都没留下'}}
              </div>
            </div>
            <div class="top-right">
              <img :src="userrData.user.avatar||tupian" alt="">
            </div>
          </div>
          <div class="des">
            <div class="des-left">
              <div class="read">
                {{userrData.read}}
                <span> 本</span>
              </div>
              <div class="readed">
                已读书籍
              </div>
            </div>
            <div class="shuxian">
              <i class="iconfont icon-shuxian"></i>
            </div>
            <div class="des-center">
              <div class="coll">
                {{userrData.collection}}
                <span> 本</span>
              </div>
              <div class="colled">
                已收藏书籍
              </div>
            </div>
            <div class="shuxian">
              <i class="iconfont icon-shuxian"></i>
            </div>
            <div class="des-right">
              <div class="like">
                {{userrData.like}}
                <span> 本</span>
              </div>
              <div class="liked">
                喜欢
              </div>
            </div>
          </div>
          <div class="bottom">
            <router-link to="/changePerson">
              <div class="xiugai">
                <div class="aaa">
                  <i class="iconfont icon-xiugai"></i>
                  <span>修改个人信息</span>
                </div>
                <div class="bbb">
                  <i class="iconfont icon-xiayejiantou"></i>
                </div>
              </div>
            </router-link>
            <div class="shoucang">
              <div class="aaa">
                <i class="iconfont icon-shoucang"></i>
                <span>收藏的书单</span>
              </div>
              <div class="bbb">
                <i class="iconfont icon-xiayejiantou"></i>
              </div>
            </div>
            <div class="xihuan">
              <div class="aaa">
                <i class="iconfont icon-weibiaoti-"></i>
                <span>喜欢的书</span>
              </div>
              <div class="bbb">
                <i class="iconfont icon-xiayejiantou"></i>
              </div>
            </div>
            <Button type="primary" size="large" @click="logOut">退出登录</Button>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
  import tupian from '@/views/person/img/1.jpg'
  import {Button} from 'mint-ui'
    export default {
        name: "person",
        data(){
          return{
            // userrData:{},
            tupian
          }
        },
      components:{
        Button
      },
      methods:{
          // getuser(){
          //   this.$axios.get(this.$api.user).then(res=>{
          //     this.userrData = res.data
          //     console.log(res.data);
          //   })
          // }
        logOut () {
          localStorage.removeItem('token')
          this.$store.commit('CHANGE_USER_MSG', {})
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
        userrData(){
            return this.$store.state.usermsg
          }
      }
    }
</script>

<style scoped lang="scss" src="./index.scss">

</style>

