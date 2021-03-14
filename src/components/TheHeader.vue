<template>
  <nav class="flex w-full px-2 py-4 bg-gray-100">
    <button @click="clickMenu" type="menu" class="mr-2">
      <menu-icon class="w-6" />
    </button>
    <span> Meal Planner </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuIcon from "./MenuIcon.vue";

export default defineComponent({
  components: { MenuIcon },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const clickMenu = () => ctx.emit("update:show", !props.show);
    return {
      clickMenu,
    };
  },
});
</script>

<style scoped>
</style>