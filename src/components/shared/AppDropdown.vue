<template>
<div
    class="dropdown"
    :class="{
        expanded: isExpanded,
    }"
>
    <div class="dropdown__head">
        <span @click="onTitleClick()">{{ title }}</span>
        <div
            class="dropdown__chevron"
            @click="toggle()"
            @click.prevent="redirect"
        >
            <AppIconContainer
                width="20"
                height="20"
            >
                <IconChevron />
            </AppIconContainer>
        </div>
    </div>
    <div
        v-if="isExpanded"
        class="dropdown__body"
        @click.prevent="redirect"
    >
        <slot />
    </div>
</div>
</template>

<script>
import AppIconContainer from "./AppIconContainer";
import IconChevron from "../icons/IconChevron";

export default {
  name: "AppDropdown",
  components: { IconChevron, AppIconContainer },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  emits: {
    titleClick: null
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
    },
    onTitleClick(evt) {
      this.$emit('titleClick', { evt })
    }
  },
};
</script>

<style scoped lang="scss">
.dropdown {
  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    span {
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: $textColor;
    }
  }

  &__chevron {
    height: 35px;
    display: flex;
    width: 35px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    right: 0;
    cursor: pointer;

    &:hover {
      background-color: rgba(193, 193, 198, 0.2);
    }
  }

  svg {
    transition: all 0.2s ease;
    position: relative;
    top: 2px;
  }

  &.expanded {
    svg {
      transform: rotate(180deg);
      top: 0;
    }
  }
}
</style>
