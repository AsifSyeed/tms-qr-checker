import Home from './views/Home.vue'
import EventVerify from './views/EventVerify.vue'
import ScanOptions from './views/ScanOptions.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: EventVerify, meta: { title: '' } },
  { path: '/home', component: Home, meta: { title: '' } },  // Changed to /home
  { path: '/options', component: ScanOptions, meta: { title: '' } },
]
