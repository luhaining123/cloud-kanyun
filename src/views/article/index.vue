<template>
    <div>
      <div class="content markdown" :style="{fontSize:fontSize+'px'}"
      v-html="html">
      </div>
      <div class="btn">
        <i class="iconfont icon-shangye" @click="pre"></i>
        <i class="iconfont icon-mulu" @click='bbb'></i>
        <i class="iconfont icon-yueduye_zitizengda" @click="addA"></i>
        <i class="iconfont icon-yueduye_zitijianxiao" @click="addB"></i>
        <i class="iconfont icon-xiayejiantou" @click="next"></i>
      </div>
      <div class="tit" v-show="beijing" @click='ccc'>
       <transition name="slide">
         <ul class="titl" @click.stop v-show="liebiao">
           <li class="li-1" v-for="(item,index) in titles" :key="index">{{item.title}}</li>
         </ul>
       </transition>
      </div>
    </div>
</template>

<script>
    import Showdown from 'showdown';
    import { Toast } from 'mint-ui'
    export default {
        name: "my-article",
        data(){
          return{
            articleData:{},
            html:{},
            fontSize:48,
            titles:{},
            beijing:false,
            liebiao:false,
            index:{}
          }
        },
      methods:{
          getarticle(id){
        return new Promise(resolve => {
          var $id = id?id:this.$route.params.id;
          this.$axios.get(this.$api.getArticle+$id).then(res=>{
            console.log(res.data);
            const converter = new Showdown.Converter();
            this.html= converter.makeHtml(res.data.article.content);
            this.articleData = res.data.article;
            this.index = res.data.article.index;
            // console.log(res.data.article.index);
            resolve();
          })
        })
          },
        gettitles () {
          const $id = this.articleData.bookId;
          this.$axios.get(this.$api.getTitle + $id).then(res => {
            console.log(res.data);
            this.titles = res.data
          })
        },
        pre(){
          if(this.index ==0){
            Toast({
              message: '已经是第一章了',
              duration: 2000
            })
          }else{
            this.index--;
            var item = this.titles.find(item=> item.index == this.index)
            var id = item._id;
            console.log(item._id);
            this.getarticle(id);
            this.$router.push({
              name: 'article',
              params: {
                id
              }
            })
          }
        },next(){
          if(this.index ==this.titles.length){
            Toast({
              message: '已经是最后一张了',
              duration: 2000
            })
          }else{
            this.index++;
            var item = this.titles.find(item=> item.index == this.index)
            var id = item._id;
            console.log(item._id);
            this.getarticle(id);
            this.$router.push({
              name: 'article',
              params: {
                id
              }
            })
          }
        },
        addA(){
          // console.log(11);
          if(this.fontSize>=80){
            Toast({
              message: '字体太大会费时间哦',
              duration: 2000
            })
          } else{
            this.fontSize += 2;
            console.log(this.fontSize);
          }
        },
        addB(){
          if(this.fontSize<=20){
            Toast({
              message: '字体太小会费眼睛哦',
              duration: 2000
            })
          } else{
            this.fontSize -= 2;
            console.log(this.fontSize);
          }
        },
        bbb(){
            this.beijing= true;
              this.liebiao = true
        },
        ccc(){
          this.liebiao = false;
          setTimeout(()=>{
            this.beijing= false;

          },500)
        }
      },
      created(){
          this.getarticle().then(()=>{
            this.gettitles()
          })
      }
    }
</script>

<style scoped lang="scss">
   .btn{
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     display: flex;
     justify-content: space-around;
     border-top: 1px solid red;
     background: #e0e0e0;
     .iconfont{
       font-size: 24px;
     }
   }
   .tit{
     position: fixed;
     bottom: 0;
     left: 0;
     top: 0;
     right: 0;
     width: 100%;
     height: 100%;
     background: rgba(0,0,0,.5);

     .titl{
       width: 50%;
       background: white;
       .li-1{
         margin-top: 14px;
         font-size:16px;
         font-weight: 500;
         overflow:hidden;

       }
       .li-1:first-child{
         margin: 0;
         font-size:16px;
         font-weight: 500;
       }
     }
     .slide-enter,.slide-leave-to{
       transform: translate3d(-100%,0,0);
     }
     .slide-enter-active,.slide-leave-active{
       transition: transform 1s ease
     }
   }

</style>
<style lang="scss">
  @import "makedown.scss";
</style>
