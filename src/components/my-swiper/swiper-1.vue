<template>
  <div class="container">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- slides -->
      <swiperSlide class="swiper-top" v-for="(item,index) in swiperData" :key="index">
        <router-link :to="{name:'details',params:{id:item.book._id}}" class="swiper-b">
          <img :src="item.img" class="swiper-img">
        </router-link>
        <div class="desc">
          {{item.title}}
        </div>
      </swiperSlide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "swiper-1",
      data(){
          return{
            swiperOption:{
              pagination: {
                el: '.swiper-pagination',
              }
            },
            swiperData:[]
          }
      },
      components:{
          swiper,
          swiperSlide
      },
      methods:{
          getLun(){
            this.$axios.get(this.$api.getSwiper).then(res=>{
              this.swiperData = res.data;
              // console.log(res.data);
            })
          }
      },
      created() {
        this.getLun()
      }
    }
</script>

<style scoped lang="scss">
  @import '../../globalCss/px-rem';
  .swiper-top{
    position: relative;
    .swiper-img{
      height:px2-rem(400)
    }
    .desc{
      height: px2-rem(60);
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      background: #555;
      font-size: 18px;
      font-weight: 500;
      color: white;
      padding-top: 10px;
    }
  }
  
</style>
