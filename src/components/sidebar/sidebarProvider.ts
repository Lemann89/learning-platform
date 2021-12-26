import { markRaw, reactive } from "@vue/reactivity";
import { AsyncComponentLoader, defineAsyncComponent } from "@vue/runtime-core";
import { Component } from "vue";
import { clearObject } from "../../helpers/clearObject";

type Sidebar = {
    component?: Component
} 

export const sidebar = reactive<Sidebar>({})

export const showSidebar = (component: Component): void => {
  const asyncComponent: AsyncComponentLoader = () => new Promise((resolve) => {
    resolve(component)
  })

  sidebar.component = markRaw(defineAsyncComponent(asyncComponent))
}

export const hideSidebar = (): void => {
  clearObject(sidebar)
}