<template>
<div class="sidebar">
    <div v-if="loading">
        <AppLoader />
    </div>


    <template v-if="course">
        <router-link
            :to="`/course/${course.id}`"
            class="course-name"
        >
            {{ course.name }}
        </router-link>
        <div
            v-for="module in course.modules"
            :key="module.id"
        >
            <ModuleDropdown
                :title="module.name"
                :module-id="module.id"
            >
                <div class="lessons">
                    <div
                        v-for="lesson in module.lessons"
                        :key="lesson.id"
                        class="lesson-item"
                    >
                        <a>
                            {{ lesson.name }}
                        </a>
                    </div>
                </div>
                <AppAddMenuItem
                    text="Add Lesson"
                    :style-type="AddMenuItemStyleTypes.lesson"
                />
            </ModuleDropdown>
        </div>
        <AppAddMenuItem
            text="Add Module"
            :style-type="AddMenuItemStyleTypes.module"
            @click="onAddModuleClick"
        />
    </template>
</div>
</template>

<script>
import ModuleDropdown from "./module/ModuleDropdown";
import AppAddMenuItem from "../../components/shared/AddMenuItem/AppAddMenuItem";
import { AddMenuItemStyleTypes } from "../../components/shared/AddMenuItem/AddMenuItemStyleTypes";
import { useResult } from "@vue/apollo-composable";
import { useGetCourseSidebarQuery } from "../../gql/courses/composables";
import { useRoute } from "vue-router";
import AppLoader from "../../components/shared/AppLoader";

export default {
    name: "EditorSidebar",
    components: { AppLoader, AppAddMenuItem, ModuleDropdown },
    setup() {

      const $route = useRoute()
      const courseId = +$route.params.courseId

      const { result, loading, error } = useGetCourseSidebarQuery({ id: courseId })
      const course = useResult(result, null);

      const onAddModuleClick = () => {
        console.log('a')
      }

      return {
            loading,
            error,
            course,
            AddMenuItemStyleTypes,
            onAddModuleClick
      };
    },
};
</script>

<style scoped lang="scss">
.sidebar {
  overflow: auto;
  padding: 24px 24px 24px 0;
  height: 100%;
  width: 280px;
  background: $white;
  box-shadow: 0 0 8px rgb(191 191 224 / 25%);
}

.course-name {
  cursor: pointer;
  color: $textColor;
  padding-left: 31px;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 20px;
  display: block;
}

.lessons {
  margin-top: 15px;
}

.lesson-item {
  margin-bottom: 8px;

  a {
    cursor: pointer;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: #797f85;
  }
}
</style>
