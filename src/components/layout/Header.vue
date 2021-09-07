<template>
<header class="header">
    <nav class="nav">
        <AppMenuItem
            v-for="menuItem in menuItems"
            :key="menuItem.iconName"
            :item="menuItem"
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
                    text: "Coursera",
                    icon: {
                        name: "logo",
                        component: IconLogo,
                        height: 30,
                        width: 38,
                    },
            },
            {
                    text: "Log out",
                    icon: {
                        name: "logout",
                        component: IconLogout,
                    },
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
  position: relative;
  z-index: 0;
}

.nav {
  height: 80px;
  display: flex;
  align-items: center;

  .menu-item:last-child {
    margin-left: auto;
  }
}
</style>
