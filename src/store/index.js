// import Vue from 'vue'
// import Vuex from 'vuex'
// import {fetch} from '@/utils/index'
// import api from '@/utils/api'
// Vue.use('Vuex');
// const store  = new Vuex.Store({
//   state:{
//     usermsg:{}
//   },
//   mutations:{
//     "CHANGE_USER_MSG"(state,usermsg){
//       state.usermsg = usermsg
//     }
//   },
//   actions: {
//     getuser(context) {
//       fetch.get(api.user).then(res => {
//         context.commit('CHANGE_USER_MSG',res.data)
//       })
//     }
//   }
// });
// export default store
import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '../utils/index'
import api from '../utils/api'
import vuexPerisisted from 'vuex-persistedstate'

Vue.use(Vuex) // 安装vuex

const store = new Vuex.Store({
  state: {
    usermsg: {}
  },
  mutations: {
    'CHANGE_USER_MSG' (state, usermsg) {
      state.usermsg = usermsg
      console.log(state.usermsg,'66666');
    }
  },
  actions: {
    getuser (context) {
      return new Promise((resolve) => {
        fetch.get(api.user).then(res => {
          context.commit('CHANGE_USER_MSG', res.data)
          resolve(res)
        })
    })
  }
},
  plugins: [vuexPerisisted({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
        sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
    },})]
})

export default store
