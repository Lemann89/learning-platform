<template>
  <router-link to="/profile">
    <div class="userAvatar">
      <div class="userImage">
        <img :src="avatar" alt="person" />
      </div>
      <span class="userName">{{ name }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProfileLink",
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #25282b;
}

.userAvatar {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.userImage {
  img {
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
}

.userName {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-left: 12px;
}
</style>
