<template>
<div class="create">
    <h2 class="title">
        Create a new course
    </h2>
    <Form
        v-slot="{errors}"
        class="form"
        :validation-schema="schema"
        @submit="onSubmit"
    >
        <AppFormField
            name="name"
            label="Name"
            :error="errors.name ?? ''"
        />
        <AppFormField
            name="description"
            label="Description"
            :error="errors.description ?? ''"
        />
        <AppFormField
            name="category"
            label="Choose a category"
            :error="errors.category ?? ''"
        />
        <AppButton
            :style-type="AppButtonStyleTypes.PrimaryOutline"
            type="submit"
        >
            Create
        </AppButton>
    </Form>
</div>
</template>

<script>
import * as yup from 'yup';
import AppButton from "../../components/shared/Button/AppButton.vue";
import AppFormField from "../../components/shared/AppFormField.vue";
import { AppButtonStyleTypes } from "../../components/shared/Button/AppButtonStyleTypes";
import { Form } from "vee-validate";
import { useCreateCourseMutation } from "../../gql/courses/composables";
import { useRouter } from "vue-router";

export default {
  name: "CreateCourse",
  components: {
    Form,
    AppFormField,
    AppButton,
  },
  setup() {
    const $router = useRouter()
    const { mutate: createCourse, onDone: onCourseCreated } = useCreateCourseMutation();

    const schema = yup.object().shape({
      name: yup.string().required("Name is a required"),
      description: yup.string().required("Description is a required"),
      category: yup.string(),
    })

    const onSubmit = (values) => {
      const newCourse = { ...values };

      if (!values.category) {
        delete newCourse.category;
      }

      createCourse({ course: newCourse });

      onCourseCreated((res) => {
        const courseId = res.data.createCourse.id;
        $router.push({ path: `/course/${courseId}` });
      });
    };

    return {
      onSubmit,
      AppButtonStyleTypes,
      schema
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
