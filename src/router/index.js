import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      meta:{
        title:"首页"

      },
      component: () => import('@/views/layout'),
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        meta:{
          title:"首页"
        },
        component: () => import('@/views/index')
      },
        {
          path:'/person',
          name:'person',
          meta:{
            title:"个人中心"
          },
          component:()=>import('@/views/person')
        }]
    },
    {
      path: '/details/:id',
      name: 'details',
      meta:{
        title:"详情页"
      },
      component: () => import('@/views/details')
    },
    {
      path:'/titles/:id',
      name:'list',
      meta:{
        title:"目录页"
      },
      component:()=>import('@/views/list')
    },{
      path:'/articles/:id',
      name:'article',
      meta:{
        title:'书籍详情'
      },
      component:()=>import('@/views/article')
    },
]
})
router.beforeEach(function (to,from,next) {
  document.title = to.meta.title||from.meta.title;
  next()
});
export default router
