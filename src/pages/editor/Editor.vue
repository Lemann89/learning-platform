<template>
<div class="create-modules">
    <EditorSidebar />
    <router-view />
</div>
</template>

<script>
import EditorSidebar from "./EditorSidebar";
export default {
    name: "Editor",
    components: { EditorSidebar },
};
</script>

<style scoped lang="scss">
.create-modules {
  display: flex;
  height: 100%;
}
</style>
