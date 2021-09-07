<template>
<div v-if="loading">
    <AppLoader />
</div>

<div
    v-if="course"
    class="editor"
>
    <Form
        v-slot="{errors}"
        class="editor__form"
        :validation-schema="schema"
        @submit="onSubmit"
    >
        <AppFormField
            name="name"
            label="Course name"
            :value="course.name"
            :error="errors.name ?? ''"
        />
        <AppFormField
            name="description"
            label="Description"
            :value="course.description"
            :error="errors.description ?? ''"
        />
        <AppButton
            :style-type="AppButtonStyleTypes.PrimaryOutline"
            class="editor__button"
            type="submit"
        >
            Update
        </AppButton>
    </Form>
</div>
</template>

<script>

import * as yup from 'yup';
import { useResult } from "@vue/apollo-composable";
import { useGetCourseQuery, useUpdateCourseMutation } from "../../../gql/courses/composables";
import AppFormField from "../../../components/shared/AppFormField";
import AppButton from "../../../components/shared/Button/AppButton";
import { AppButtonStyleTypes } from '../../../components/shared/Button/AppButtonStyleTypes';
import { Form } from "vee-validate";
import { useRoute } from "vue-router";
import AppLoader from "../../../components/shared/AppLoader";

export default {
  name: "CourseEditor",
  components: {
    AppLoader,
    Form,
    AppFormField,
    AppButton,
  },
  setup() {
    const schema = yup.object().shape({
      name: yup.string().required("Name is a required"),
      description: yup.string().required("Description is a required"),
    })

    const { params } = useRoute()
    const courseId = +params.courseId

    const { result, loading } = useGetCourseQuery({ id: courseId })
    const course = useResult(result, null);

    const { mutate: updateCourse } = useUpdateCourseMutation();


    const onSubmit = (values) => {
      updateCourse({ course: { id: courseId, ...values } })
    }

    return {
      onSubmit,
      loading,
      course,
      AppButtonStyleTypes,
      schema
    }
  }
}
</script>

<style scoped lang="scss">
.editor {
  padding: 48px 56px;
  width: calc(100% - 280px);

  .form__field {
    margin-bottom: 36px;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__button {
    margin-left: auto;
  }
}
</style>
