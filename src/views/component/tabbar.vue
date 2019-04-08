<template>
  <div>
    <Tabbar v-model="selected" :fixed="true">
      <TabItem id="index">
        <i class="iconfont icon-shouye" slot="icon"></i>
        首页
      </TabItem>
      <TabItem id="history">
        <i class="iconfont icon-xuexi" slot="icon"></i>
        我的学习
      </TabItem>
      <TabItem id="person">
        <i class="iconfont icon-person-fill" slot="icon"></i>
        个人中心
      </TabItem>
    </Tabbar>
  </div>
</template>

<script>
  // import 'mint-ui/lib/tab-item/style.css'
  // import 'mint-ui/lib/tabbar/style.css'
  import {Tabbar, TabItem} from 'mint-ui';

  export default {
    name: "tabbar",
    data() {
      return {
        selected: 'index'
      }
    },
    watch: {
      selected (val) {
        this.$router.push({
          name: val
        })
      }
    },
    created () {
      this.selected = this.$route.name
    },
    components: {
      Tabbar, TabItem
    }
  }
</script>

<style scoped>
  .iconfont {
    font-size: 26px;
  }
</style>
