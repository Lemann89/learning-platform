<template>
  <aside class="aside">
    <div class="user">
      <ProfileLink
        avatar="https://thispersondoesnotexist.com/image"
        name="Robert"
      />
    </div>
    <div class="menu">
      <router-link
        v-for="navigationItem in navigationItems"
        :to="navigationItem.route"
        :key="navigationItem.iconName"
      >
        <AppMenuItem :item="navigationItem" />
      </router-link>
      <AppMenuItem :item="hideMenuItem" />
    </div>
  </aside>
</template>

<script>
import IconSearch from "../icons/IconSearch";
import IconSidebar from "../icons/IconSidebar";
import IconChart from "../icons/IconChart";
import IconEdit from "../icons/IconEdit";
import AppMenuItem from "../shared/AppMenuItem";
import ProfileLink from "../profile/ProfileLink";
import IconHide from "../icons/IconHide";
export default {
  name: "Sidebar",
  components: {
    ProfileLink,
    AppMenuItem,
  },
  computed: {
    navigationItems() {
      return [
        {
          text: "Explore",
          iconName: "search",
          iconComponent: IconSearch,
          iconHeight: 24,
          iconWidth: 24,
          route: "/explore",
        },
        {
          text: "Courses",
          iconName: "sidebar",
          iconComponent: IconSidebar,
          iconHeight: 24,
          iconWidth: 24,
          route: "/courses",
        },
        {
          text: "Progress",
          iconName: "chart",
          iconComponent: IconChart,
          iconHeight: 24,
          iconWidth: 24,
          route: "/progress",
        },
        {
          text: "Create",
          iconName: "edit",
          iconComponent: IconEdit,
          iconHeight: 24,
          iconWidth: 24,
          route: "/create",
        },
      ];
    },
    hideMenuItem() {
      return {
        text: "Hide",
        iconName: "hide",
        iconComponent: IconHide,
        iconHeight: 24,
        iconWidth: 24,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.aside {
  width: 255px;
  padding: 25px 32px 42px 42px;
  height: 100%;
  background-color: #ffffff;
}

.menu {
  margin-top: 170px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 180px);

  a {
    text-decoration: none;
    margin-bottom: 36px;
  }

  & > .menuItem {
    &:last-child {
      margin-bottom: 36px;
      margin-top: auto;
    }
  }
}
</style>
