<template>
  <div class="container">
    <Loadmore :top-method="loadTop"
              ref="loadmore"
              :bottom-method="loadBottom">
      <Myswiper></Myswiper>
      <div class="content111">
        <Contentitem v-for="(item,index) in content"
                     :key="index" :options="item">

        </Contentitem>
      </div>
    </Loadmore>

  </div>
</template>

<script>
    import Myswiper from '@/components/my-swiper/swiper-1.vue'
    import Contentitem from '@/views/component/content-item'
    import moment from 'moment'
    import {Loadmore } from 'mint-ui';
    export default {
        name: "index",
      components:{
          Myswiper,
        Contentitem,
        Loadmore
      },
      data(){
          return{
            content:[],
            queryDate:{
              pn:1,
              booksSize:2,
              size:2
            }
          }
      },
      methods:{
          getContentitem() {
            return new Promise(resolve => {
              this.$axios.get(this.$api.getContent, {
                params: this.queryDate
              }).then(res => {
                console.log(res.data);
                var getdate = res.data;
                getdate = getdate.map(item => {
                  item.books = item.books.map(it => {
                    it.updateTime = moment(it.updateTime).format('YYYY年MM月DD日')
                    return it
                  })
                  return item
                })
                this.content = getdate
                // console.log(getdate);
                resolve()
              })
            })
          },
        loadTop(){
          this.queryDate={
            pn:1,
            booksSize:4,
            size:4
          };
          this.getContentitem().then(()=>{
            this.$refs.loadmore.onTopLoaded();
          })
        },
        loadBottom(){
        },
      },
      created() {
        this.getContentitem()
      }
    }
</script>

<style scoped lang="scss">
  @import '../../globalCss/px-rem';
 .container{
   margin: px2-rem(18);
 }
  .content111{
    padding-bottom: 54px;

  }
</style>
