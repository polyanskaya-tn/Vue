import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Detail from './components/Detail.vue'
import Main1 from './components/Main1.vue'

const routes = [
    { path: '/', component: Main1 },
    { path: '/product/:id', component: Detail },
  ]
//http://localhost:8081/#/about
//http://localhost:8081/#/product/1

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


createApp(App)
.use(router)
.mount('#app');
