<template>
<button
    :type="type"
    :class="styleType"
    @click="click"
>
    <span>
        <slot />
    </span>
</button>
</template>

<script>
import { AppButtonStyleTypes } from "./AppButtonStyleTypes";

export default {
    name: "AppButton",
    props: {
        type: {
            type: String,
            default: "button",
        },
        styleType: {
            type: String,
            default: AppButtonStyleTypes.Primary,
        },
        click: {
            type: Function,
        },
    },
};
</script>

<style scoped lang="scss">
.btn {
  text-align: center;
  padding: 12px 30px;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: $white;
    transition: all 0.2s ease;
  }

  &--primary {
    background: $primary;
    box-shadow: 0 8px 16px rgba(0, 126, 255, 0.16);

    &.btn--outline {
      border: 1px solid $primary;
      box-shadow: none;
      &:hover {
        background: $primary;
        box-shadow: 0 8px 16px rgba(0, 126, 255, 0.16);
        span {
          color: $white;
        }
      }

      span {
        color: $primary;
      }
    }
  }

  &--danger {
    background: $danger;
    box-shadow: 0 8px 16px rgba(251, 78, 78, 0.16);

    &.btn--outline {
      border: 1px solid $danger;
      box-shadow: none;
      &:hover {
        background: $danger;
        box-shadow: 0 8px 16px rgba(251, 78, 78, 0.16);
        span {
          color: $white;
        }
      }

      span {
        color: $danger;
      }
    }
  }

  &--warning {
    background: $warning;
    box-shadow: 0 8px 16px rgba(246, 166, 9, 0.16);

    &.btn--outline {
      border: 1px solid $warning;
      box-shadow: none;
      &:hover {
        background: $warning;
        box-shadow: 0 8px 16px rgba(246, 166, 9, 0.16);
        span {
          color: $white;
        }
      }

      span {
        color: $warning;
      }
    }
  }

  &--outline {
    background-color: transparent;
  }
}
</style>
