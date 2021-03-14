<template>
  <the-header v-model:show="showSideNav" />
  <side-nav v-model:show="showSideNav"></side-nav>
  <main id="main" class="px-2">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import SideNav from "./components/SideNav.vue";
import { defineComponent, ref } from "vue";
import TheHeader from "./components/TheHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    SideNav,
    TheHeader,
  },
  setup() {
    const showSideNav = ref(false);

    return { showSideNav };
  },
});
</script>

<style></style>
