import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import router from './routes'

import App from './App.vue'

window.eventHub = new Vue();


Vue.use(VueRouter, axios) //Using this as is the same as the MovieApp use

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
