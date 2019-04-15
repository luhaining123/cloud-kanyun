<template>
  <div class="nickname">
      <input type="text" class="input" :value="value" :placeholder="placeholder" @change="changename">
  </div>
</template>

<script>
  export default {
        name: "nicheng-input",
       props:{
          value:String,
         placeholder: String,
       },
    methods:{
      changename($event){
        console.log($event.target.value);
        this.$emit('input',$event.target.value)
        this.$emit('change',$event.target.value)
      }
    }
    }
</script>

<style scoped lang="scss">
   .nickname{
     display: flex;
     align-items: center;
     border-bottom: 1px solid #0099ff;
     margin-bottom: 20px;
     margin-top: 20px;
     .input{
       flex: 1;
       outline: none;
       border: none;
       padding: 4px 10px;
       font-size: 16px;
       color: #333;
     }
   }
</style>
