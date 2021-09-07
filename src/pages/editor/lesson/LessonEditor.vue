<template>
<div class="lesson-editor">
    <form @submit="onSubmit">
        <AppFormField
            v-model="name"
            label="Lesson name"
            name="name"
            :error="nameError"
        />
        <AppButton
            :style-type="AppButtonStyleTypes.PrimaryOutline"
            type="submit"
        >
            Update
        </AppButton>
    </form>
</div>
</template>

<script>
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import AppButton from "../../../components/shared/Button/AppButton";
import { AppButtonStyleTypes } from "../../../components/shared/Button/AppButtonStyleTypes";
import AppFormField from "../../../components/shared/AppFormField";

export default {
    name: "LessonEditor",
    components: { AppButton, AppFormField },
    setup() {
      const schema = {
            name: yup.string().required("Name is a required"),
      };

      const { handleSubmit, isSubmitting } = useForm({
            validationSchema: schema,
      });

      const { value: name, errorMessage: nameError } = useField("name");

      const onSubmit = handleSubmit((values) => {
        console.log(values);
      });

      return {
            name,
            nameError,
            onSubmit,
            isSubmitting,
            AppButtonStyleTypes,
      };
    },
};
</script>

<style scoped lang="scss">
.lesson-editor {
  padding: 48px 56px;
  width: calc(100% - 280px);
}
</style>
