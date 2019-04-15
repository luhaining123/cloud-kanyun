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
        },
        {
          path:'/learn',
          name:'learn',
          meta:{
            title:"我的学习"
          },
          component:()=>import('@/views/learn')
        }]
    },
    {
      path: 'layout2',
      name: 'header-layout',
      component: () => import('@/views/header-layout'),
      children:[{
        path:'/changePerson',
        name:'changePerson',
        meta:{
          title:'修改个人信息'
        },
        component:()=>import('@/views/changePerson')
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
        },
        {
          path:'/articles/:id',
          name:'article',
          meta:{
            title:'书籍详情'
          },
          component:()=>import('@/views/article')
        },
        {
          path:'/changeName',
          name:'changeName',
          meta:{
            title:'修改昵称'
          },
          component:()=>import('@/views/changeName')
        },
        {
          path:'/changeDesc',
          name:'changeDesc',
          meta:{
            title:'修改个性签名'
          },
          component:()=>import('@/views/changeDesc')
        },
    ]
    },

    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录页'
      },
      component:()=>import('@/views/login')
    },
    {
    path:'/register',
      name:'register',
      meta:{
      title:'注册页'
      },
      component:()=>import('@/views/register')
    },
    {
      path:'/text',
      name:'text',
      meta:{
        title:'测试页面'
      },
      component:()=>import('@/views/text')
    },


]
})
router.beforeEach(function (to,from,next) {
  document.title = to.meta.title||from.meta.title;
  next()
});
export default router
