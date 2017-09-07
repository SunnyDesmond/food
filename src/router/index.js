import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import foodinfo from '@/page/foodinfo/foodinfo'

Vue.use(Router)

export default new Router({

  routes: [{
      path: "/",
      name: 'home',
      component: home
    },
    {
      path: "/foodinfo",
      name: 'foodinfo',
      component: foodinfo
    }
  ]
})