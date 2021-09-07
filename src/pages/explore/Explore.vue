<template>
<ExploreHero />
<div class="explore__container">
    <div class="course-cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
    </div>
</div>
</template>

<script>

import CourseCard from "../../components/course/CourseCard";
import ExploreHero from "./ExploreHero";
export default {
  name: "Explore",
  components: { ExploreHero, CourseCard },
};
</script>

<style scoped lang="scss">
  .course-cards {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
