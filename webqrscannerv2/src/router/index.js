import { createRouter, createWebHashHistory } from 'vue-router'
import pageScanner from '../components/pageScanner.vue'
import test from '../components/test.vue'
import dashBoard from '../components/dashBoard.vue'
import adminCode from '../components/adminCode.vue'

const routes = [
  {
    path: '/pageScanner',
    name: 'pageScanner',
    component: pageScanner
  },
  {
    path: '/',
    name: 'dashBoard',
    component: dashBoard
    
  },
  {
    path: '/adminCode',
    name: 'adminCode',
    component: adminCode
    
  },
  {
    path: '/test',
    name: 'test',
    component: test  
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
