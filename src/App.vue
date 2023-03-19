<template>
  <div>
    <!-- <NavBarVue class="nav" /> -->
    <router-view />
  </div>
</template>
<script>
import NavBarVue from "@/components/public/NavBar.vue";
export default {
  components: { NavBarVue },
};
</script>
<style>
:root {
  --color1: #22c55e;
  --color2: #f59e0b;
  --color3: #f8f9fa;
}
.nav .navbar {
  z-index: 100;
}
li {
  list-style: none;
}
</style>
