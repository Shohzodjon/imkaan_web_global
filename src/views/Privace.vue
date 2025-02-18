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
      <h2>{{ $t("privacy") }}</h2>
      <Role title="privacyTime" />
      <Role title="privacyTitle" desc="privacyDesc" />
      <Role desc="privacyDescTwo" />
      <Role title="privacyTitleThree" desc="privacyDescThree" />
      <Role title="privacyTitleFour" desc="privacyDescFour" />
      <Role title="privacyTitleFive" desc="privacyDescFive" />
      <Role title="privacyTitleSix" desc="privacyDescSix" />
      <Role title="privacyTitleSeven" desc="privacyDescSeven" />
      <Role title="privacyTitleEight" desc="privacyDescEight" />
      <Role title="privacyTitleNine" desc="privacyDescNine" />
      <Role title="security" desc="privacyDescTen" />
      <Role title="privacyTitleEleven" desc="privacyDescEleven" />
      <Role title="privacyTitleTwel" desc="privacyDescTwel" />
      <Role desc="privacyDescThirth" />
      <Role desc="privacyDescFourth" />
    </div>
  </section>
</template>
