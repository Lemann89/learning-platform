<template>
<div
    class="overlay"
    @click="hideSidebar"
>
    <div class="sidebar">
        <slot />
    </div>
</div>
</template>
 
<script>
import { hideSidebar } from '../sidebar/sidebarProvider';

export default {
  name: "AppSidebar",
  setup() {
    return {
      hideSidebar
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 400px;
  height: 100%;
  background: $white;
  display: flex;
  margin-left: auto;
}

.overlay {
  width: 100%;
  height: 100%;
  background: #0009;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>