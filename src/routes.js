import Home from './views/Home.vue'
import EventVerify from './views/EventVerify.vue'
import ScanOptions from './views/ScanOptions.vue'
import OnlineTicketVerify from './views/OnlineTicketVerify.vue'
import PhysicalTicketTag from './views/PhysicalTicketTag.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: EventVerify, meta: { title: '' } },
  { path: '/home', component: Home, meta: { title: '' } },  // Changed to /home
  { path: '/options', component: ScanOptions, meta: { title: '' } },
  { path: '/scan-online-ticket', component: OnlineTicketVerify, meta: { title: '' } },
  { path: '/tag-physical-ticket', component: PhysicalTicketTag, meta: { title: '' } },
]
