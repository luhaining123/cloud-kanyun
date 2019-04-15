<template>
    <div class="content">
      <div class="content-row1">
        <div class="content-title">
           {{options.title}}
        </div>
        <router-link to="#">
          <div class="more">
            更多...
          </div>
        </router-link>
      </div>
      <div class="content-row2" v-for="(it,index) in options.books" :key="index">
        <div class="row2-left">
          <img :src="it.img" alt="it.img">
        </div>
        <div class="row2-right">
          <div class="article-title">
            {{it.title}}
          </div>
          <div class="article-content">
            <!--{{it.desc}}-->
            13454667877998
          </div>
          <div class="article-msg">
            <div class="author">
              {{it.author}}
            </div>
            <div class="data">
              {{it.updateTime}}
            </div>
            <div class="look">
              {{it.looknums}}人在看
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "content-item",
      props:{
          options:Object
      },
      created() {
        // console.log(this.options);
      }
    }
</script>

<style scoped lang="scss">
  @import "../../globalCss/px-rem";
  .content {
    .content-row1 {
      display: flex;
      justify-content: space-between;
      margin: 10px 9px;
      align-items: flex-end;

      .content-title {
        font-size: 20px;
        font-weight: 600;
        border-left: 4px solid black;
        padding-left: 6px;
      }
    }

    .content-row2 {
      position: relative;
      display: flex;
      margin: 10px 9px;
      .row2-left {
        width: px2-rem(200);
        height: px2-rem(266);
      }
      .row2-right {
        flex: 1;
        align-items: flex-end;
        margin-left: 10px;
        .article-title{
          font-size: 18px;
          font-weight: 500;
        }
        .article-content{
          line-height: 1.5;
          margin-top: 10px;
          display:-webkit-box;
          -webkit-line-clamp:3;
          line-clamp:3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size:12px;
          color: #555;
        }
        .article-msg{
          margin-top: 38px;
          display: flex;
          justify-content: space-between;
          font-size:12px;
        }
      }

    }
  }
</style>
