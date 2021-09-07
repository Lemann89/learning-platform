import { createRouter, createWebHistory } from "vue-router";
import Profile from "../components/profile/Profile.vue";
import Explore from "../pages/explore/Explore.vue";
import Courses from "../pages/courses/Courses.vue";
import Progress from "../pages/progress/Progress.vue";
import CreateCourse from "../pages/create/CreateCourse.vue";
import Editor from "../pages/editor/Editor.vue";
import ModuleEditor from "../pages/editor/module/ModuleEditor.vue";
import LessonEditor from "../pages/editor/lesson/LessonEditor.vue";
import CourseEditor from "../pages/editor/course/CourseEditor.vue";

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
        path: '/course/:courseId/',
        component: Editor,
        name: 'Editor',
        children: [
          {
            path: '',
            component: CourseEditor,
            name: 'CourseEditor'
          },
          {
                path: 'module/:moduleId',
                component: ModuleEditor,
                name: 'ModuleEditor'
          },
          {
                path: 'lesson/:lessonId',
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
