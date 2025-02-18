<script setup>
import { useDirection } from "@/stores/direction";
defineProps({
  title: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
});

const directionStore = useDirection();
</script>
<template>
  <div class="card" :class="directionStore.direct == 'rtl' ? 'rtl' : ''">
    <h4>{{ $t(title) }}</h4>
    <p v-if="desc" v-html="$t(desc)"></p>
  </div>
</template>
<style scoped lang="scss">
.card {
  padding: 5px 0;
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: #6d6d6d;
    margin-bottom: 4px;
  }
  p {
    font-size: 16px;
    color: #6d6d6d;
    margin-bottom: 14px;
  }
}
.rtl {
  h4,
  p {
    text-align: right;
  }
}
</style>
