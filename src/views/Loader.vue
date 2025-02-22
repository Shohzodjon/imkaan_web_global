<script setup>
import RiseLoader from "vue-spinner/src/RiseLoader.vue";
</script>
<template>
  <section class="loader">
    <div class="loader__content">
      <RiseLoader color="#00b9ff" size="22px" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.loader {
  background: #fff;
  height: 100vh;
  position: fixed;
  z-index: 999999999999999 !important;
  top: 0;
  left: 0;
  width: 100%;
  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
<style>
@media (max-width: 500px) {
  .v-rise {
    width: 18px !important;
    height: 18px !important;
  }
}
</style>
