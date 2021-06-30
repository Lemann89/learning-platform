<template>
  <div class="sidebar">
    <router-link
      v-for="module in mockList"
      :to="module.route"
      :key="module.title"
    >
      <ModuleDropdown :title="module.title">
        <div class="lessons">
          <div
            v-for="lesson in module.lessons"
            :key="lesson.title"
            class="lesson-item"
          >
            <router-link :to="lesson.route">
              {{ lesson.title }}
            </router-link>
          </div>
        </div>
        <AppAddMenuItem
          text="Add Lesson"
          :style-type="AddMenuItemStyleTypes.lesson"
        />
      </ModuleDropdown>
    </router-link>
    <AppAddMenuItem
      text="Add Module"
      :style-type="AddMenuItemStyleTypes.module"
    />
  </div>
</template>

<script>
import ModuleDropdown from "./ModuleDropdown";
import AppIconContainer from "../../shared/AppIconContainer";
import IconAdd from "../../icons/IconAdd";
import AppAddMenuItem from "../../shared/AddMenuItem/AppAddMenuItem";
import { AddMenuItemStyleTypes } from "../../shared/AddMenuItem/AddMenuItemStyleTypes";
export default {
  name: "CreateModulesSidebar",
  components: { AppAddMenuItem, IconAdd, AppIconContainer, ModuleDropdown },
  computed: {
    AddMenuItemStyleTypes() {
      return AddMenuItemStyleTypes;
    },
    mockList() {
      return [
        {
          route: "/course/1/module/1",
          title: "Mastrubation",
          lessons: [
            {
              route: "/course/1/lesson/1",
              title: "Mastrubation Lesson 1",
            },
            {
              route: "/course/1/lesson/2",
              title: "Mastrubation Lesson 2",
            },
            {
              route: "/course/1/lesson/3",
              title: "Mastrubation Lesson 3",
            },
          ],
        },
        {
          route: "/course/1/module/2",
          title: "Math",
          lessons: [
            {
              route: "/course/1/lesson/4",
              title: "Math Lesson 1",
            },
            {
              route: "/course/1/lesson/5",
              title: "Math Lesson 2",
            },
            {
              route: "/course/1/lesson/6",
              title: "Math Lesson 3",
            },
          ],
        },
        {
          route: "/course/1/module/3",
          title: "Pizda",
          lessons: [
            {
              route: "/course/1/lesson/7",
              title: "Pizda Lesson 1",
            },
          ],
        },
      ];
    },
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
