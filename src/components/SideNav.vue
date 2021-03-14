<template>
  <aside
    class="fixed top-0 left-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white shadow-lg"
    :class="show ? 'translate-x-0' : '-translate-x-full'"
  ></aside>
  <div
    v-if="show"
    @click="updateShow"
    class="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-10"
  ></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const updateShow = () => ctx.emit("update:show", !props.show);
    return { updateShow };
  },
});
</script>

