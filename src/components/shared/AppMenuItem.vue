<template>
<div class="menu-item">
    <div class="menu-item__icon">
        <AppIconContainer
            :icon-name="item.icon.name"
            :height="item.icon.height"
            :width="item.icon.width"
        >
            <component :is="item.icon.component" />
        </AppIconContainer>
    </div>
    <span class="menu-item__text">{{ item.text }}</span>
</div>
</template>

<script lang="ts">
import AppIconContainer from "./AppIconContainer.vue";

export default {
    name: "AppMenuItem",
    components: {
        AppIconContainer,
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.menu-item {
  display: flex;
  align-items: center;
  cursor: pointer;

  &__text {
    margin-left: 16px;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.2px;
    margin-bottom: 2px;
    color: #25282b;
  }
}
</style>
