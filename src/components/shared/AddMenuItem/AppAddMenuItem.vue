<template>
<button
    class="add"
    :class="styleType"
>
    <span class="add__icon">
        <AppIconContainer
            width="19"
            height="19"
        >
            <IconAdd />
        </AppIconContainer>
    </span>
    <span class="add__text"> {{ text }} </span>
</button>
</template>

<script>
import IconAdd from "../../icons/IconAdd";
import AppIconContainer from "../AppIconContainer";

export default {
    name: "AppAddMenuItem",
    components: { IconAdd, AppIconContainer },
    props: {
        styleType: String,
        text: String,
    },
};
</script>

<style lang="scss">
.add {
  cursor: pointer;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: $primary;
  }

  &__icon {
    left: -7px;
    position: relative;
  }

  &--module {
    padding-left: 37px;

    .add__text {
      font-weight: 500;
    }
  }

  &--lesson {
    margin-top: 12px;
    padding-left: 7px;

    .add__text {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.1px;
    }
  }
}
</style>
