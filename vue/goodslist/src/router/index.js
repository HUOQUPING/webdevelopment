import Vue from 'vue'
import VueRouter from 'vue-router'
import DiscoverView from '@/views/DiscoverView/DiscoverView'
import LiveAudioView from '@/views/LiveAudioView/LiveAudioView'

Vue.use(VueRouter)

const routes = [
  // 自动重定向
  {
    path: '',
    redirect: "/discover"
  },
  {
    path: '/',
    redirect: "/discover"
  },
  {
    path: '/discover',
    name: 'discover',
    component: DiscoverView
  },
  {
    // push 如果要携带params 必须使用 push({name: '', params:{}})
    // push({path: }) 无法携带params
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView/UserView.vue')
  },
  {

    path: '/live',
    name: 'live',
    component: LiveAudioView

  },
  {
    // push 如果要携带params 必须使用 push({name: '', params:{}})
    // push({path: }) 无法携带params
    path: '/follows',
    name: 'follws',
    component: () => import('@/views/FollowsView/FollowsView.vue')
  },
  {
    // push 如果要携带params 必须使用 push({name: '', params:{}})
    // push({path: }) 无法携带params
    path: '/community',
    name: 'community',
    component: () => import('@/views/CommunityView/CommunityView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router