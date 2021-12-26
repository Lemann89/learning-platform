<template>
<Layout />
<SidebarKeeper />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./components/layout/Layout.vue";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { provide } from "vue";
import SidebarKeeper from "./components/sidebar/SidebarKeeper.vue";

const apolloClient = new ApolloClient({
  uri: `http://localhost:2002/graphql`,
  cache: new InMemoryCache(),
});

export default defineComponent({
  name: "App",
  components: {
    SidebarKeeper,
    Layout,
  },
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
});
</script>

<style lang="scss">
@import "styles/reset";

.form {
  &__field {
    position: relative;
  }

  &__error {
    color: $danger;
    font-size: 12px;
    position: absolute;
    bottom: -18px;
    left: 2px;
  }
}

.explore__container {
  margin: 0 auto;
  max-width: 1085px;
}
</style>
