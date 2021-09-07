<template>
<div v-if="loading">
    Loading...
</div>

<div v-else-if="error">
    Error: {{ error.message }}
</div>

<template v-if="courses">
    <div
        v-for="{id, name} in courses"
        :key="id"
    >
        {{ name }}
        <router-link :to="'/course/' + id">
            go >
        </router-link>
    </div>
</template>
</template>

<script>
import { useGetAllCoursesQuery } from "../../gql/courses/composables";
import { useResult } from "@vue/apollo-composable";

export default {
    name: "Courses",
    setup() {
      const { result, loading, error } = useGetAllCoursesQuery()
      const courses = useResult(result, null)

      return {
        courses,
        loading,
        error
      }
    }
};
</script>

<style scoped></style>
