<template>
  <div class="container">
    <ul>
      <li class="list-item" v-for="(it,index) in listData" :key="index">
        <router-link :to="{name:'article',params:{id:it._id}}">{{it.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        listData:[],
        getBookdata:[]
      }
    },
    methods: {
      getlist(){
        let $id = this.$route.params.id;
        this.$axios.get(this.$api.getTitle+$id).then(res=>{
          console.log(res.data);
          this.listData = res.data
        })
      },
      getBookData(){
        let $id = this.$route.params.id;
        this.$axios.get(this.$api.getBooks+$id).then(res=>{
          let resData = res.data;
          this.getBookdata = resData;
          document.title = this.getBookdata.title + ' '+'目录'
        })
      }
    },
    created() {
      this.getlist();
      this.getBookData()
    }
  }
</script>

<style scoped>
  .list-item{
    margin-right: 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }
</style>
