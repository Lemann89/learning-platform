<template>
  <div class="module-dropdown" draggable="true">
    <div class="move-icon">
      <AppIconContainer height="15" width="9" name="move" color="#25282B">
        <IconMove />
      </AppIconContainer>
    </div>
    <AppDropdown :title="title">
      <slot />
    </AppDropdown>
  </div>
</template>

<script>
import IconMove from "../../icons/IconMove";
import AppIconContainer from "../../shared/AppIconContainer";
import AppDropdown from "../../shared/AppDropdown";

export default {
  name: "ModuleDropdown",
  components: { IconMove, AppIconContainer, AppDropdown },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.module-dropdown {
  position: relative;
  margin-bottom: 32px;

  &:hover {
    .move-icon {
      visibility: visible;
    }
  }

  .dropdown {
    padding-left: 30px;
  }

  .dropdown__head {
    cursor: pointer;
  }
}

.move-icon {
  visibility: hidden;
  cursor: grab;
  position: absolute;
  left: 13px;
  top: 3px;
}
</style>
