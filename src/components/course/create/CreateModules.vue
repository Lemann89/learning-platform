<template>
  <div class="create-modules">
    <CreateModulesSidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import CreateModulesSidebar from "./CreateModulesSidebar";
export default {
  name: "CreateModules",
  components: { CreateModulesSidebar },
};
</script>

<style scoped lang="scss">
.create-modules {
  display: flex;
  height: calc(100% - 80px);
}
</style>
