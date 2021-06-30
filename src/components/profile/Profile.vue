<template>
  <p>Profile</p>

  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error.message }}</div>

  <pre>{{ courses }}</pre>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { coursesQuery } from "../../gql/courses";

export default {
  name: "Profile",
  setup() {
    const { result, loading, error } = useQuery(coursesQuery);

    const courses = useResult(result, []);

    return {
      loading,
      error,
      courses,
    };
  },
};
</script>

<style scoped></style>
