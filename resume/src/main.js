'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import FastClick from 'fastclick'

import routerMap from './routers'
import filters from './filters'
import App from './views/App.vue'


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)

let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: false,
  transitionOnLoad: true
})

router.beforeEach(function () {
  window.scrollTo(0,0)
})

routerMap(router)

router.start(App, 'body')
