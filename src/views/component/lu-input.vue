<template>
    <div class="inputs">
      <slot name="top"></slot>
      <label class="lab">
        <input type="text" v-model="currentValue" :placeholder="placeholder" v-if="type=='text'">
        <input type="password" v-model="currentValue" :placeholder="placeholder" v-else>
        <slot name="right"></slot>
      </label>
    </div>
</template>

<script>
    export default {
        name: "lu-input",
      props: {
        value: [String, Number],
        type: {
          default: 'text'
        },
        placeholder: String,
        max:Number
      },
      data(){
          return  {
            currentValue:this.value
          }
      },
      watch:{
        currentValue(newValue,oldValue){
          if(this.max){
            if(newValue.length>this.max){
              this.currentValue = oldValue
            }
          }
          this.$emit('input',newValue)
        },
        value:{
          immediate:true,
          handler(val){
            this.currentValue = val;
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .lab{
    flex:1 ;
    box-sizing: border-box;

    input{
      background-color: #fff;
      display: block;
      width: 100%;
      margin-left: 10px;
      padding: 4px;
      border: none;
      outline: none;
    }
  }

</style>
