<script setup>
import { useDirection } from "@/stores/direction";
import Role from "@/components/card/Role.vue";

const directionStore = useDirection();
</script>
<template>
  <section
    class="privace__page"
    :class="directionStore.direct == 'rtl' ? 'rtl' : ''"
  >
    <div class="container">
      <h2>{{ $t("contract") }}</h2>
      <Role title="contractTime" />
      <Role title="contractTitle" desc="contractDesc" />
      <Role title="contractTitleTwo" desc="contractDescTwo" />
      <Role desc="contractDescThree" />
      <Role title="contractTitleFour" desc="contractDescFour" />
      <Role title="contractTitleFive" desc="contractDescFive" />
      <Role title="contractTitleSix" desc="contractDescSix" />
      <Role title="contractTitleSeven" desc="contractDescSeven" />
    </div>
  </section>
</template>
