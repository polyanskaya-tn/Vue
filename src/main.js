import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Catalog from './components/Catalog.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
    { path: '/', component: Catalog },
    { path: '/about', component: HelloWorld },
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })


createApp(App)
.use(router)
.mount('#app');
