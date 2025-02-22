<script setup>
import { useDirection } from "@/stores/direction";

const directionStore = useDirection();
</script>
<template>
  <div class="call" :class="directionStore.direct == 'rtl' ? 'rtl' : ''">
    <div class="call__img">
      <img src="@/assets/images/call_center.jpg" alt="call center" />
    </div>
    <div class="call__info">
      <p>{{ $t("callTime") }}</p>
      <div>
        <span>
          {{ $t("callCenter") }}
        </span>
        <a href="tel:+971503768496"> +971 50 376 8496</a>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.call {
  display: flex;
  align-items: center;
  gap: 20px;

  &__img {
    width: 100%;
    max-width: 83px !important;
    height: 83px !important;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__info {
    width: 100% !important;
    p {
      font-size: 16px;
      color: #6d6d6d;
      margin-bottom: 5px;
    }
    div {
      font-size: 23px;
      margin: 8px 0 16px;
      color: #1b2430 !important;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 5px;
      a {
        color: #00b9ff;
      }
    }
  }
  @media (max-width: 768px) {
    &__img {
      max-width: 70px !important;
      height: 70px !important;
    }
    &__info {
      width: calc(100% - 70px);
      p {
        font-size: 16px;
      }
      div {
        font-size: 22px;
        margin: 8px 0 8px;
      }
    }
  }
  @media (max-width: 576px) {
    gap: 10px;
    &__img {
      max-width: 60px !important;
      height: 60px !important;
    }
    &__info {
      width: calc(100% - 60px);
      p {
        font-size: 14px;
      }
      div {
        font-size: 20px;
      }
    }
  }
}
.rtl {
  flex-direction: row-reverse;
  .call__info {
    p {
      text-align: right;
    }
    div {
      justify-content: flex-end;
    }
  }
}
</style>
