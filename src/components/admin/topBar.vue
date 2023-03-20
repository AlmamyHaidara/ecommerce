<template>
  <div class="topBar">
    <MegaMenu orientation="horizontal" class="mega shadow-sm p-3 mb-5 bg-white">
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </MegaMenu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.topBar {
    width: 100%;
}
.mega{
    border: 0 !important;
}
</style>
