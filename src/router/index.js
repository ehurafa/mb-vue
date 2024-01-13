import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/template/content/Content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    }
  ]
})
