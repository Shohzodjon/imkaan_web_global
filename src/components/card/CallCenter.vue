<script setup>
import { useDirection } from '@/stores/direction';

const directionStore=useDirection();
</script>
<template>
  <div class="call" :class="directionStore.direct=='rtl'?'rtl':''">
    <div class="call__img">
      <img src="@/assets/images/call_center.jpg" alt="call center" />
    </div>
    <div class="call__info">
      <p>{{ $t("callTime") }}</p>
      <h4>
        {{ $t("callCenter") }}
        <a href="tel:+998557021122"> +998 55 702 11 22</a>
      </h4>
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
    h4 {
      font-size: 23px;
      margin: 8px 0 16px;
      color: #1b2430 !important;
      font-weight: 500;
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
      h4 {
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
      h4 {
        font-size: 20px;
      }
    }
  }
}
.rtl{
  flex-direction: row-reverse;
  .call__info {
    p ,h4{
      text-align: right;
    }
 
  }
}
</style>
