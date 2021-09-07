<template>
<div v-if="loading">
    <AppLoader />
</div>

<div
    v-if="module"
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
            label="Module name"
            :value="module.name"
            :error="errors.name ?? ''"
        />
        <AppFormField
            name="description"
            label="Description"
            :value="module.description"
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
import * as yup from "yup";
import AppFormField from "../../../components/shared/AppFormField";
import AppButton from "../../../components/shared/Button/AppButton";
import { AppButtonStyleTypes } from "../../../components/shared/Button/AppButtonStyleTypes";
import { Form } from "vee-validate";
import { useRoute } from "vue-router";
import { useGetModuleQuery, useUpdateModuleMutation } from "../../../gql/modules/composables";
import { useApolloClient, useResult } from "@vue/apollo-composable";
import AppLoader from "../../../components/shared/AppLoader";

export default {
  name: "ModuleEditor",
  components: { AppLoader, AppButton, AppFormField, Form },
  setup() {
    const schema = yup.object().shape({
      name: yup.string().required("Name is a required"),
      description: yup.string().required("Description is a required"),
    })

    const { params } = useRoute()
    const moduleId = +params.moduleId

    const { result, loading } = useGetModuleQuery({ id: moduleId })
    const module = useResult(result, null)

    const { mutate: updateModule } = useUpdateModuleMutation();

    const onSubmit = (values) => {
      updateModule({ module: { id: moduleId, ...values } })
    }

    return {
      loading,
      module,
      schema,
      onSubmit,
      AppButtonStyleTypes,
    };
  },
};
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

.input {
}
</style>
