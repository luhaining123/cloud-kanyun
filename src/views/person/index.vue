<template>
    <div class="person">
      <div class="top">
        <router-link :to="{name:'index'}">
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
              24
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
              22
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
              10
              <span> 本</span>
            </div>
            <div class="liked">
              喜欢
            </div>
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
        <!--<ul>-->
          <!--<li>-->
            <!--<i class="iconfont icon-xiugai"></i>-->
            <!--<div class="xiugai">修改个人信息</div>-->
            <!--<i class="iconfont icon-xiayejiantou"></i>-->
          <!--</li>-->
          <!--<li>-->
            <!--<i class="iconfont icon-shou-cang"></i>-->
            <!--<div class="shoucang">收藏书单</div>-->
            <!--<i class="iconfont icon-xiayejiantou"></i>-->
          <!--</li>-->
          <!--<li>-->
            <!--<i class="iconfont icon-xihuan"></i>-->
             <!--<div class="xihuan">喜欢的书</div>-->
            <!--<i class="iconfont icon-xiayejiantou"></i>-->
          <!--</li>-->
        <!--</ul>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "person"
    }
</script>

<style scoped lang="scss" src="./index.scss">

</style>
<!--<style>-->
  <!--.person {-->
    <!--position: fixed;-->
    <!--top: 0;-->
    <!--left: 0;-->
  <!--}-->
  <!--.top{-->
    <!--width: 100%;-->
    <!--height: 200px;-->
    <!--background: slateblue;-->
  <!--}-->
<!--</style>-->
