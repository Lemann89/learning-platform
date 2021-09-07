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
            :key="navigationItem.menuItem.text"
            :to="navigationItem.route"
        >
            <AppMenuItem :item="navigationItem.menuItem" />
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
                    menuItem: {
                        text: "Explore",
                        icon: {
                            name: "search",
                            component: IconSearch,
                        },
                    },
                    route: "/explore",
            },
            {
                    menuItem: {
                        text: "Courses",
                        icon: {
                            name: "sidebar",
                            component: IconSidebar,
                        },
                    },
                    route: "/courses",
            },
            {
                    menuItem: {
                        text: "Progress",
                        icon: {
                            name: "chart",
                            component: IconChart,
                        },
                    },
                    route: "/progress",
            },
            {
                    menuItem: {
                        text: "Create",
                        icon: {
                            name: "edit",
                            component: IconEdit,
                        },
                    },
                    route: "/course",
            },
          ];
        },
        hideMenuItem() {
          return {
                text: "Hide",
                icon: {
                    name: "hide",
                    component: IconHide,
                },
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

  & > .menu-item {
    &:last-child {
      margin-bottom: 36px;
      margin-top: auto;
    }
  }
}
</style>
