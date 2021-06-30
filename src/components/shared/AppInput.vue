<template>
  <div class="input__group">
    <input
      name="name"
      autocomplete="off"
      :type="type"
      :value="modelValue"
      :placeholder="label"
      @input="onInput"
    />
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
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  methods: {
    onInput(evt) {
      this.$emit("update:modelValue", evt.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.input__group {
  position: relative;
}

input {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #e0e0e0;
  outline: 0;
  font-size: 16px;
  color: $textColor;
  padding: 5px 2px;
  background: transparent;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 16px;
    cursor: text;
    top: 5px;
    left: 2px;
    pointer-events: none;
  }
}

label,
input:focus ~ label {
  position: absolute;
  top: -12px;
  left: 2px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #a0a4a8;
}

input:focus ~ label {
  color: $primary;
}

input:focus {
  border-bottom: 2px solid $primary;
}
</style>
