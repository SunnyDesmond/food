import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import tab1 from '@/page/home/tabs/tab1'
import tab2 from '@/page/home/tabs/tab2'
import tab3 from '@/page/home/tabs/tab3'
import tab4 from '@/page/home/tabs/tab4'
import foodinfo from '@/page/foodinfo/foodinfo'

Vue.use(Router)

export default new Router({

  routes: [{
      path: "/tab1",
      name: 'home',
      component: home,
      children: [
        { path: "/tab1", name: 'tab1', component: tab1 },
        { path: "/tab2", name: 'tab2', component: tab2 },
        { path: "/tab3", name: 'tab3', component: tab3 },
        { path: "/tab4", name: 'tab4', component: tab4 }
      ]
    },
    {
      path: "/foodinfo",
      name: 'foodinfo',
      component: foodinfo
    },
  ]
})