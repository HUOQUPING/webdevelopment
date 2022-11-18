import Router from 'vue-router'
import MessagePage from '../components/MessagePage'
import ContactsPage from '../components/ContactsPage'
import DiscoverPage from '../components/DiscoverPage'
import UserPage from '../components/UserPage'

const routes = [
    { path: '/message', component: MessagePage },
    { path: '/contacts', component: ContactsPage },
    { path: '/discover', component: DiscoverPage },
    { path: '/user', component: UserPage },
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router