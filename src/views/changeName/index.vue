<template>
    <div class="xiugainicheng com">
      <hai :value="userMsg.username|| userMsg.phone" @change="changenick"></hai>
      <div class="desc">
        更好地昵称更容易被别人认识你
      </div>
      <div class="bts">
        <Button type="primary" size="large" @click="gaigaigai">保存修改</Button>
      </div>
    </div>
</template>

<script>
  import hai from '@/views/component/nicheng-input'
  import {Button, Toast} from 'mint-ui'
    export default {
        name: "index",
      components:{
        hai,
        Button,
        Toast
      },
      data(){
        return{
          usemm:{}
        }
      },
      computed: {
        userMsg () {
          return this.$store.state.usermsg.user
        }
      },
      methods:{
        changenick(val){
          this.usemm = val
        },
        gaigaigai(){
          this.$axios.put(this.$api.changeUser, {
            username: this.usemm
          }).then(res => {
            if(res.code == 200){
              Toast({
                message: '昵称修改成功',
                duration: 1000
              })
              this.$store.dispatch('getuser')
              setTimeout(() => {
                this.$router.push('/changePerson')
              }, 1000)
            } else {
              Toast({
                message: res.msg
              })
            }
          })
        }
      },

    }
</script>

<style scoped lang="scss">
  .xiugainicheng {
    .desc {
      font-size: 14px;
      color: #555;
      margin-top: 10px;
    }
    .bts{
      margin-top: 20px;
    }
  }
</style>
