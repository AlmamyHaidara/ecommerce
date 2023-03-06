<template>
  <div>
    <NavBarVue class="nav" />
    <router-view />
  </div>
</template>
<script>
import NavBarVue from "@/components/public/NavBar.vue";
export default {
  components: { NavBarVue },
};
</script>
<style scoped>
.nav .navbar{
  z-index: 100;
}
</style>
