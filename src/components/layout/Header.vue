<template>
  <header class="header">
    <nav class="nav">
      <AppMenuItem
        v-for="menuItem in menuItems"
        :item="menuItem"
        :key="menuItem.iconName"
      />
    </nav>
  </header>
</template>

<script>
import AppMenuItem from "../shared/AppMenuItem";
import IconLogo from "../icons/IconLogo";
import IconLogout from "../icons/IconLogout";
export default {
  name: "Header",
  components: { AppMenuItem },
  computed: {
    menuItems() {
      return [
        {
          text: "Logo",
          iconName: "logo",
          iconComponent: IconLogo,
          iconHeight: 30,
          iconWidth: 38,
        },
        {
          text: "Log out",
          iconName: "logout",
          iconComponent: IconLogout,
          iconHeight: 24,
          iconWidth: 24,
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  padding: 0 32px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 8px 0 8px rgba(191, 191, 224, 0.25);
}

.nav {
  height: 80px;
  display: flex;
  align-items: center;

  .menuItem:last-child {
    margin-left: auto;
  }
}
</style>
