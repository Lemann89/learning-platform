<template>
  <div class="layout">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Header from "./Header";
export default {
  name: "Layout",
  components: { Header, Sidebar },
};
</script>

<style scoped lang="scss">
.layout {
  background-color: #f9f9fb;
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
}

.sidebar {
  box-shadow: 0 0 8px rgb(191 191 224 / 25%);
  z-index: 1;
}
</style>
