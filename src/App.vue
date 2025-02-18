<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import ResponsiveNavbar from "./components/ResponsiveNavbar.vue";
</script>

<template>
  <Navbar />
  <ResponsiveNavbar/>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>
<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-out;
}
</style>
