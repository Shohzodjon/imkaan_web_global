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
    <div class="left">
      <slot name="icon"></slot>
    </div>
    <div class="right">
      <h3>{{ $t(title) }}</h3>
      <p>{{ $t(desc) }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  display: flex;
  gap: 15px;
  width: 100%;
  .left {
    width: 60px !important;
    max-width: 60px;
    height: 60px !important;
    background: #00b9ff !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 25px;
    color: #fff;
  }
  .right {
    width: 100% !important;
    max-width: 100% !important;
    h3 {
      color: #1b2430;
      font-size: 22px;
      margin-bottom: 5px;
      font-weight: 600;
    }
    p {
      font-size: 16px;
      color: #6d6d6d;
    }
  }

  @media (max-width: 768px) {
    .right {
      h3 {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 576px) {
    .right {
      h3 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
.rtl {
  flex-direction: row-reverse;
  .right {
    h3,
    p {
      text-align: right;
    }
  }
}
</style>
