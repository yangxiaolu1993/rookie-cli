import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home.vue'

Vue.use(Router)


let routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: '首页'
    }
}, ]


const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    document.title = to.meta.title
    next()

})

export default router