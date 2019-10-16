import Vue from "vue"
import Router from "vue-router"
import Assignments from "./views/AssignmentList.vue"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "assignments",
            component: Assignments
        },
        {
            path: "/edit/:id",
            name: "editor",
            component: () => import(/* webpackChunkName: "editor" */ "./views/AssignmentEditor.vue")
        },
        {
            path: "/sign-in",
            name: "signIn",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "signIn" */ "./views/SignIn.vue")
        },
        {
            path: "/account",
            name: "account",
            component: () => import(/* webpackChunkName: "account" */ './views/Account.vue')
        }
    ],
    mode: "history"
})
