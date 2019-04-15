<template>
    <div class="container">
      <div class="con-top">
        <div class="book-img">
          <img :src="getBookdata.img" alt="getBookdata.img">
        </div>
        <div class="book-msg">
          <div class="book-title">
            {{getBookdata.title}}
          </div>
          <div class="hhh">
            <div class="author">
              {{getBookdata.author}}
            </div>
            <div class="book-num">
              {{getBookdata.looknums}}人在看
            </div>
            <div class="like">
              {{getBookdata.startsnums}}人喜欢
            </div>
          </div>
        </div>
      </div>
      <div class="bts">
        <Button size="small">加入收藏</Button>
        <Button size="small">分享好友</Button>
      </div>
      <div class="line">
      </div>
      <div class="book-center">
        <h2>简介</h2>
        <div class="book-information">
          {{getBookdata.desc}}
        </div>
        <div class="mulu">
          <div class="show-mulu">查看目录</div>
          <div>共{{totitle}}章</div>
          <div>{{getBookdata.updatetime}}</div>
        </div>
      </div>
      <div class="line">
      </div>
      <button id="btn" @click="skip">阅读该书籍</button>
    </div>
</template>

<script>
  import {Button} from 'mint-ui'
  import moment from 'moment'
    export default {
        name: "my-details",
      components:{
          Button
      },
      data(){
          return{
            getBookdata:[],
            totitle:0
          }
      },
       methods:{
          getBookData(){
            let $id = this.$route.params.id;
            this.$axios.get(this.$api.getBooks+$id).then(res=>{
              let resData = res.data;
              resData.updatetime = moment(res.updatetime).format('YYYY年MM月DD日')
              this.getBookdata = resData;
              this.totitle = res.length;
              console.log(res);
            })
          },
         skip(){
            this.$router.push({
              name:'list',
              params:{
                id:this.getBookdata._id
              }
            })
         }
       },
      created(){
        this.getBookData()
      }
    }
</script>

<style scoped lang="scss">
  @import "../../globalCss/px-rem";
  .container{
    padding: 10px;
    margin-top: 40px;
    .con-top{
      display: flex;
      .book-img{
        height: px2-rem(200);
        width: px2-rem(200);
      }
      .book-msg{
        position: relative;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .book-title{
          font-size: 16px;
          font-weight: 600;
        }
        .hhh{
          margin-top: 10px;
          font-size: 14px;
        }
        .hhh>div{
          padding: 6px;
        }
      }
    }
    .line{
      border-bottom: 6px solid skyblue;
      margin-top: 20px;
    }
    .mulu{
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .show-mulu{
        font-size:16px;
        font-weight: 600;
        color: black;
      }
    }
    #btn{
      width: 95%;
      height: 40px;
      background: skyblue;
      position: fixed;
      bottom: 20px;
    }
  }

</style>
<style>
  .bts{
    display: flex;
    height: 40px;
    justify-content: space-around;
    margin-top: 30px;
  }
   .mint-button-text{
     color:#555;
     /*margin-top: 18px;*/
   }
</style>
