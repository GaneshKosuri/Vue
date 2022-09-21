import { createRouter, createWebHistory } from "vue-router"

import TeamsList from "./pages/TeamsList.vue"
import TeamMembers from "./components/teams/TeamMembers.vue"
import UsersList from "./pages/UsersList.vue"
import NotFound from "./pages/NotFound.vue"
import TeamsFooter from "./pages/TeamsFooter.vue"
import UsersFooter from "./pages/UsersFooter.vue"



const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: "/teams" },
        // { path: '/teams', component: TeamsList, alias: "/" },
        // { path: "/teams/:teamId", component: TeamMembers, props: true },
        {
            name: 'teams', path: '/teams', meta: { needsAuth: true }, components: { default: TeamsList, footer: TeamsFooter }, alias: "/",
            children: [
                {
                    name: 'team-members', path: ":teamId", component: TeamMembers, props: true
                }
            ]
        },
        {
            path: '/users', components: { default: UsersList, footer: UsersFooter }, beforeEnter(to, from, next) {
                console.log("before enter in user list route")
                console.log(to, from)
                console.log(next())

            }
        },
        { path: "/:notFOund(.*)", component: NotFound }
    ],
    linkActiveClass: 'vue-route-active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to)
        // console.log(from)
        if (savedPosition) {
            return savedPosition
        }
        return { left: 0, top: 350 }
    }
})

router.beforeEach((to, from, next) => {
    console.log("Global before each")
    console.log(to, from)
    console.log(next())
})

router.afterEach((to, from) => {
    console.log("Global after Each")
    console.log(to, from)
})

export default router