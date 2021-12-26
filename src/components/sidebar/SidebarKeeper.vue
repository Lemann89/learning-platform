<template>
<div v-if="sidebar?.component">
    <AppSidebar>
        <component :is="sidebar.component" />
    </AppSidebar>
</div>
</template>

<script>
import AppSidebar from "../shared/AppSidebar";
import { sidebar } from "./sidebarProvider";

export default {
  name: "SidebarKeeper",
  components: { AppSidebar },
  data() {
    return {
      sidebar
    }
  }
}
</script>

<style scoped>

</style>