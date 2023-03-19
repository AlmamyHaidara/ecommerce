<template>
  <div class="layout-public">
    <Header class="mt-3" />
    <NavBarVue  />
    <FistProduct class="firstProdct  mx-auto " />
    <ContactVue />

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Header from "@/components/public/Header.vue";
import NavBarVue from "@/components/public/NavBar.vue";
import FistProduct from "@/components/public/FistProduct.vue";
import ContactVue from './Contact.vue';


export default {
  name: "Layout-Public",
  components: { NavBarVue, Header, FistProduct,ContactVue },
};
</script>

<style scoped>
.firstProdct{
  margin-top: 48rem ;

}
</style>
