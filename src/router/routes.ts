import { createRouter, createWebHistory } from "vue-router";
import Profile from "../components/profile/Profile.vue";
import Explore from "../components/Explore.vue";
import Courses from "../components/explore/Courses.vue";
import Progress from "../components/Progress.vue";
import CreateCourse from "../components/course/create/CreateCourse.vue";
import CreateModules from "../components/course/create/CreateModules.vue";
import ModuleEditor from "../components/course/create/ModuleEditor.vue";
import LessonEditor from "../components/course/create/LessonEditor.vue";

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
        path: '/course',
        component: CreateCourse,
        name: 'CreateCourse'
    },
    {
        path: '/course/:id',
        component: CreateModules,
        name: 'CreateModules',
        children: [
            {
                path: 'module/:id',
                component: ModuleEditor,
                name: 'ModuleEditor'
            },
            {
                path: 'lesson/:id',
                component: LessonEditor,
                name: 'LessonEditor'
            }
        ]
    },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
