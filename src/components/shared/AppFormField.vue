<template>
<div class="form__field">
    <div class="input__group">
        <Field
            :name="name"
            :type="type"
            :placeholder="label"
            :value="value"
            as="input"
        />
        <label>{{ label }}</label>
    </div>
    <span class="form__error">
        {{ error }}
    </span>
</div>
</template>

<script>

import { Field } from "vee-validate";

export default {
  name: "AppFormField",
  components: {
    Field,
  },
  props: {
    error: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    }
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
