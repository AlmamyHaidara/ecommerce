<template>
  <div class="layout-admin d-flex">
    <!-- <h1>Layout admin page</h1> -->
    <SideBar/>
    <router-view />
  </div>
</template>

<script>
import SideBar from '@/components/admin/SideBar.vue';
export default {
    name:'LayoutAdmin',
    components:{SideBar}
}
</script>

<style>
.layout-admin{}
</style>