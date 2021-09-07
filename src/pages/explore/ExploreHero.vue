<template>
<div class="explore-hero">
    <div class="explore__container">
        <h2 class="explore-hero__title">
            Learn something new!
        </h2>
    </div>
</div>
</template>

<script>
export default {
  name: "ExploreHero"
}
</script>

<style scoped lang="scss">
.explore-hero {
  background: $white;
  width: 100%;
  height: 170px;
  box-shadow: 0 0 8px rgba(191, 191, 224, 0.25);
  padding-top: 36px;

  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 42px;
    color: $textColor;
  }
}
</style>
