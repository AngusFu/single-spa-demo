// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import './single-spa-config'

Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: { App },
  template: '<App/>'
})
