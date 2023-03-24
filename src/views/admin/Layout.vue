<template>
  <div class="layout-admin d-flex">
    <!-- <h1>Layout admin page</h1> -->
    <SideBar class="side"/>
    <!-- <topBar/> -->
    <router-view />
  </div>
</template>

<script>
import topBar from '@/components/admin/topBar.vue';
import SideBar from '@/components/admin/SideBar.vue';
export default {
    name:'LayoutAdmin',
    components:{SideBar,topBar}
}
</script>

<style>
.side{
  margin-left: 1.5rem;
  margin-top: -2rem;
}
</style>