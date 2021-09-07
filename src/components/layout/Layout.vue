<template>
<div class="layout">
    <div class="sidebar">
        <Sidebar />
    </div>
    <div class="main">
        <Header />
        <div class="content">
            <router-view />
        </div>
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

.main {
  flex: 1;
}

.sidebar {
  box-shadow: 0 0 8px rgb(191 191 224 / 25%);
  z-index: 1;
}

.content {
  overflow: auto;
  height: calc(100% - 80px);
}
</style>
