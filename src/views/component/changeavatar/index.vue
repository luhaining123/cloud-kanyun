<template>
  <label class="label">
    <input type="file" class="input-1" @change="change">
    <slot></slot>
  </label>
</template>
<script>
  import axios from 'axios/lib/axios'
  export default {
    name: "index",
    data(){
      return{
        token:''
      }
    },
    methods:{
      gettoken(){
        axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
          this.token= res.data.data
          console.log(this.token);
        })
      },
      change($event){
        var file = $event.target.files[0]
        var form = new FormData()
        form.append('file',file)
        form.append('token',this.token)
          axios.post('http://upload-z1.qiniup.com',form).then(res=>{
            console.log(res);
            this.$emit('success',res.data.url)
          })
      }
    },
    created() {
      this.gettoken()
    }
  }
</script>

<style lang="scss">
  .label{
    display:block;
    .input-1{
      display: none;
    }
  }
</style>
