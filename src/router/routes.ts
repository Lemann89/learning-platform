import { createRouter, createWebHistory } from "vue-router";
import Profile from "../components/profile/Profile.vue";
import Explore from "../components/Explore.vue";
import Courses from "../components/Courses.vue";
import Progress from "../components/Progress.vue";
import Create from "../components/Create.vue";

const routes = [
    {
        path: '/profile',
        component: Profile,
        name: 'Profile'
    },
    {
        path: '/explore',
        component: Explore,
        name: 'Explore'
    },
    {
        path: '/courses',
        component: Courses,
        name: 'Courses'
    },
    {
        path: '/progress',
        component: Progress,
        name: 'Progress'
    },
    {
        path: '/create',
        component: Create,
        name: 'Create'
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
