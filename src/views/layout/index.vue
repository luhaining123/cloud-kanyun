<template>
  <div>
    <router-view></router-view>
    <Mytab></Mytab>
  </div>
</template>

<script>
   import Mytab from '@/views/component/tabbar'
  export default {
    name: "layout",
    components:{
      Mytab
    }
  }
</script>

<style scoped>

</style>
