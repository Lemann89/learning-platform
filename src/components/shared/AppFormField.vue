<template>
  <div class="form__field">
    <AppInput
      :label="label"
      :name="name"
      :type="type"
      :model-value="modelValue"
      @input="onInput"
    />
    <span class="form__error">
      {{ error }}
    </span>
  </div>
</template>

<script>
import AppInput from "./AppInput";

export default {
  name: "AppFormField",
  components: { AppInput },
  props: {
    error: String,
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: String,
    type: String,
  },
  methods: {
    onInput(evt) {
      this.$emit("update:modelValue", evt.target.value);
      console.log(this.modelValue);
    },
  },
};
</script>

<style scoped></style>
