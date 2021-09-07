<template>
<div class="course-card">
    <img
        src="https://248006.selcdn.ru/LandGen/desktop_2_bb816ae9306d05d8a35f0bf956129c4138c0a2b1.webp"
        alt="course image"
        class="course-card__img"
    >
    <div class="course-card__body">
        <div class="course-card__author">
            <img
                src="https://thispersondoesnotexist.com/image"
                alt="author"
                class="course-card__author-img"
            >
            <span class="course-card__author-name">
                fox1ck
            </span>
        </div>
        <h3 class="course-card__title">
            Java для таких как Akira
        </h3>
        <p class="course-card__description">
            Lorem ipsum dor amet anhhs huita njhka bfsq qvsdg
        </p>
        <div class="course-card__footer">
            <div class="course-card__footer-info">
                <span>3 модуля</span>
                <span>20 уроков</span>
            </div>
            <AppButton :style-type="AppButtonStyleTypes.PrimaryOutline">
                Preview
            </AppButton>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import AppButton from "../shared/Button/AppButton.vue";
import { AppButtonStyleTypes } from '../shared/Button/AppButtonStyleTypes';

export default {
  name: "CourseCard",
  components: { AppButton },
  setup() {
    return { AppButtonStyleTypes }
  }
}
</script>

<style scoped lang="scss">
.course-card {
  margin: 0 18px;
  width: 325px;
  height: 350px;
  background: #FFFFFF;
  box-shadow: 0 2px 12px rgba(191, 191, 224, 0.25);
  border-radius: 12px;

  &__body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 120px);
  }

  &__img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
    height: 120px;
    object-fit: cover;
  }

  &__author {
    display: flex;
    align-items: center;

    &-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    &-name {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 500;
      line-height: 14px;
      color: $textColor;
    }
  }

  &__title {
    margin-top: 12px;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0.2px;
    color: $textColor;
  }

  &__description {
    margin-top: 12px;
    font-size: 16px;
    line-height: 22px;
    color: #6C7074;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    &-info {
      display: flex;
      flex-direction: column;

      span {
        font-size: 14px;
        line-height: 20px;
        color: #6C7074;
      }
    }
  }
}
</style>
