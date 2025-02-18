<script setup>
import ServiceType from "./card/ServiceType.vue";
import { services } from "@/data/main";

</script>
<template>
  <section class="service__section">
    <div class="container">
      <h2>{{ $t("service") }}</h2>
      <p class="desc">{{ $t("serviceTitle") }}</p>
      <div class="flex">
        <ServiceType
          v-for="item in services"
          :key="item.id"
          :title="item.title"
          :desc="item.desc"
          :icon="item.icon"
          :class="[item.active ? 'active_card' : '']"
        />
      </div>
    </div>
  </section>
</template>
