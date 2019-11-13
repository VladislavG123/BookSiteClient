import MainPage from '../components/MainPage.vue'
import Login from '../components/Login.vue'
import Registration from '../components/Registration.vue'

const routes = [{
        path: '/MainPage',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    }
]

export default routes;