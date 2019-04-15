<template>
    <div class="login">
      <div class="big">
        <i class="iconfont icon-xuexi-"></i>
      </div>
      <div class="bottom">
        <i class="iconfont icon-contactperson" slot="top"></i>
        <lu v-model="from.phone" placeholder="请输入你的用户名"></lu>
      </div>
      <div class="bottom-2">
        <i class="iconfont icon-yincang" slot="top" @click="bian" :class="{'icon-yincang1':type=='text'}"></i>
        <lu v-model="from.password" placeholder="请输入你的密码" :type="type"></lu>
      </div>
      <div class="zhuce">
        <router-link to='/register'>没有账号?立即注册</router-link:>
      </div>
      <div class="bts">
        <Button type="primary" size="large" @click="denglu">立即登录</Button>
      </div>
    </div>
</template>

<script>
  import lu from '@/views/component/lu-input.vue'
  import {Button,Toast} from 'mint-ui'
  import validator from 'validator'
    export default {
        name: "index",
      components:{
          lu,
        Button
      },
      data(){
          return{
            from:{
              phone:'',
              password:''
            },
            type: 'password'
          }
      },
      methods:{
        bian(){
          this.type = this.type == 'password'?'text':'password'
        },
        denglu(){
          let phonestatus= validator.isMobilePhone(this.from.phone,'zh-CN')
          let passstatus = validator.isLength(this.from.password,{min:6, max: 12})
          if(phonestatus&&passstatus){
            this.$axios.post(this.$api.login, this.from).then(res=>{
              if(res.code==200){
                let token = res.token;
                localStorage.setItem('token',token);
                Toast({
                  message:'登陆成功',
                  duration:1000
                });
                setTimeout(()=>{
                  this.$router.push('/person')
                },1000)
              }
            })
          }else{
            Toast({
              message:'用户或者密码错误',
              duration:1000
            })
          }
        }
      }
    }
</script>

<style scoped lang="scss">
 .login{
   .big{
     text-align: center;
     margin-top: 40px;

     .iconfont{
       font-size: 80px;
       color: #0099ff;
     }
   }
   .bottom{
     display: flex;
     align-items: center;
     margin-top: 40px;
     border-bottom: 1px solid #555555;
     .iconfont{
       font-size: 30px;
     }
   }
   .bottom-2{
     display: flex;
     align-items: center;
     margin-top: 40px;
     border-bottom: 1px solid #555555;
     .iconfont{
       font-size: 30px;
     }
   }
   .zhuce{
     margin-top: 20px;
     text-align: right;

     a{
       font-size: 18px;
       color: #0099ff;
     }
  }
   .bts{
     margin-top: 30px;
   }
 }
</style>
