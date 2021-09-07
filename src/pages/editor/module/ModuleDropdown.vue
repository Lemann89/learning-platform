<template>
<div
    class="module-dropdown"
    draggable="true"
>
    <div class="move-icon">
        <AppIconContainer
            height="15"
            width="9"
            name="move"
            color="#25282B"
        >
            <IconMove />
        </AppIconContainer>
    </div>
    <AppDropdown
        :title="title"
        @titleClick="onTitleClick()"
    >
        <slot />
    </AppDropdown>
</div>
</template>

<script>
import IconMove from "../../../components/icons/IconMove";
import AppIconContainer from "../../../components/shared/AppIconContainer";
import AppDropdown from "../../../components/shared/AppDropdown";

export default {
  name: "ModuleDropdown",
  components: { IconMove, AppIconContainer, AppDropdown },
  props: {
    title: {
      type: String,
      required: true,
    },
    moduleId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onTitleClick() {
      this.$router.push(`/course/${this.$route.params.courseId}/module/${this.moduleId}`)
    }
  }
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
  top: 9px;
}
</style>
