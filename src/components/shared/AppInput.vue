<template>
  <div class="inputGroup">
    <input type="text" :value="value" required />
    <span class="bar"></span>
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.inputGroup {
  position: relative;
  margin-bottom: 30px;
}

input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #ccc;

  &:focus {
    outline: none;
  }
}

label {
  color: #999;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 15px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

input {
  &:focus ~ label,
  &:valid ~ label {
    top: -15px;
    font-size: 14px;
    color: #5264ae;
  }
}
</style>
