<template>
  <div class="menuItem">
    <div class="menuItemIcon">
      <AppIcon
        :icon-name="item.iconName"
        :height="item.iconHeight"
        :width="item.iconWidth"
      >
        <component :is="item.iconComponent" />
      </AppIcon>
    </div>
    <span class="menuItemText">{{ item.text }}</span>
  </div>
</template>

<script>
import AppIcon from "./AppIcon";
export default {
  name: "AppMenuItem",
  components: {
    AppIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.menuItem {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.menuItemText {
  margin-left: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2px;
  margin-bottom: 2px;
  color: #25282b;
}
</style>
