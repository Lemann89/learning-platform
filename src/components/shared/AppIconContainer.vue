<template>
<svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
    :fill="color"
>
    <slot />
</svg>
</template>

<script>
export default {
    name: "AppIconContainer",
    props: {
        name: {
            type: String,
            default: "box",
        },
        width: {
            type: [Number, String],
            default: 24,
        },
        height: {
            type: [Number, String],
            default: 24,
        },
        color: {
            type: String,
            default: "none",
        },
    },
    computed: {
        viewBox() {
          return `0 0 ${this.width} ${this.height}`;
        },
    },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>
