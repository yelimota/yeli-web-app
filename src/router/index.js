import Vue from 'vue'
import Router from 'vue-router'

import RoutersData from './routes'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    ...RoutersData
  })
}
