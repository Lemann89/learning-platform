<template>
  <div class="lesson-editor">
    <AppFormField label="Lesson name" type="password" name="name" />
  </div>
</template>

<script>
import AppFormField from "../../shared/AppFormField";
export default {
  name: "LessonEditor",
  components: { AppFormField },
};
</script>

<style scoped lang="scss">
.lesson-editor {
  padding: 48px 56px;
  width: calc(100% - 280px);
}
</style>
