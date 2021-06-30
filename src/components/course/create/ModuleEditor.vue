<template>
  <div class="module-editor">
    <div class="input">
      <AppInput label="Module name" name="name" v-model="name" />
    </div>
  </div>
</template>

<script>
import AppInput from "../../shared/AppInput";

export default {
  name: "ModuleEditor",
  components: { AppInput },
};
</script>

<style scoped lang="scss">
.module-editor {
  padding: 48px 56px;
  width: calc(100% - 280px);
}

.input {
}
</style>
