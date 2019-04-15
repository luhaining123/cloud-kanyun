<template>
  <div class="register">
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
    <div class="bottom-3">
      <i class="iconfont icon-yanzhengma" slot="top"></i>
      <lu v-model="from.code" placeholder="请输入你的验证码"
      :max="6"></lu>
      <Button slot="right" size="small" @click="messa">{{huoqu}}</Button>
    </div>
    <div class="zhuce">
      <router-link to="/login">已有账号?立即登录</router-link>
    </div>
    <div class="bts">
      <Button type="primary" size="large" @click="zhuce">立即注册</Button>
    </div>
  </div>
</template>

<script>
  import lu from '@/views/component/lu-input.vue'
  import {Button} from 'mint-ui'
  import validator from 'validator'
  import {Toast}  from 'mint-ui'
  export default {
    name: "register",
    components: {
      lu,
      Button
    },
    data() {
      return {
        from: {
          phone: '',
          password: '',
          code:''
        },
        type: 'password',
        huoqu:"获取验证码",
        issend:false
      }
    },
    methods:{
      bian(){
        this.type = this.type == 'password'?'text':'password'
      },
      messa(){
        if(validator.isMobilePhone(this.from.phone,'zh-CN'))
          {
          this.issend=true;
          var secc= 10;
          var timer = setInterval(()=>{
            secc--;
            this.huoqu = `再次获取${secc}s`;
            this.$axios.post(this.$api.sendCode,{
              phone: this.from.phone
            }).then()
            if(secc==0){
              clearInterval(timer)
              this.huoqu = '获取验证码'
            }
          },1000)
          }else{
          Toast({
            message:'不是合法的手机号',
            duration:'1000'
          })
        }

      },
      zhuce(){
        let phonestatus= validator.isMobilePhone(this.from.phone,'zh-CN')
        let passstatus = validator.isLength(this.from.password,{min:6, max: 12})
        if(phonestatus&&passstatus&&this.issend){
          this.$axios.post(this.$api.register,this.from).then((res)=>{
            if(res.code==200){
              Toast({
                message: res.msg,
                duration: 2000
              })
              setTimeout(()=>{
                this.$router.push('/login')
              },2000)
            }else{
              Toast({
                message: res.msg,
                duration: 2000
              })
            }
          })
        }else{
          Toast({
            message: '用户或者密码错误',
            duration: 2000
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .login,.register{
    .big{
      text-align: center;
      margin-top: 40px;

      .iconfont{
        font-size: 80px;
        color: #0099ff;
      }
    }
    .bottom,.bottom-2{
      display: flex;
      align-items: center;
      margin-top: 40px;
      border-bottom: 1px solid #555555;
      .iconfont{
        font-size: 30px;
      }
    }
    .bottom-3 {
      display: flex;
      align-items: center;
      margin-top: 40px;
      border-bottom: 1px solid #555555;

      Button {
        margin-left: 60px;
      }
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
