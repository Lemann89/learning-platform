<template>
  <div class="create">
    <h2 class="title">Create a new course</h2>
    <form @submit="onSubmit" class="form">
      <AppFormField
        name="name"
        v-model="name"
        label="Name"
        :error="nameError"
      />
      <AppFormField
        name="description"
        label="Description"
        v-model="description"
        :error="descriptionError"
      />
      <AppFormField
        name="category"
        label="Choose a category"
        v-model="category"
        :error="categoryError"
      />
      <AppButton
        :style-type="AppButtonStyleTypes.PrimaryOutline"
        :click="toModules"
      >
        Create
      </AppButton>
    </form>
  </div>
</template>

<script>
import AppInput from "../../shared/AppInput";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import AppButton from "../../shared/Button/AppButton";
import { AppButtonStyleTypes } from "../../shared/Button/AppButtonStyleTypes";
import router from "../../../router/routes";
import AppFormField from "../../shared/AppFormField";
export default {
  name: "CreateCourse",
  components: {
    AppFormField,
    AppButton,
    AppInput,
  },
  setup() {
    const schema = yup.object({
      name: yup.string().required("Name is a required"),
      description: yup.string().required("Description is a required"),
      category: yup.string().required("Category is a required"),
    });

    const { handleSubmit, isSubmitting } = useForm({
      validationSchema: schema,
    });

    const { value: name, errorMessage: nameError } = useField("name");
    const { value: description, errorMessage: descriptionError } =
      useField("description");
    const { value: category, errorMessage: categoryError } =
      useField("category");

    const onSubmit = handleSubmit((values) => {
      console.log(values);
    });

    const toModules = () => {
      router.push({ path: "/course/1/module/1" });
    };

    return {
      name,
      nameError,
      description,
      descriptionError,
      category,
      categoryError,
      onSubmit,
      isSubmitting,
      AppButtonStyleTypes,
      toModules,
    };
  },
};
</script>

<style scoped lang="scss">
.create {
  padding: 48px 56px;

  .form__field {
    margin-bottom: 36px;
  }
}

.title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  color: $textColor;
  margin-bottom: 36px;
}
</style>
