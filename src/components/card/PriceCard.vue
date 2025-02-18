<script setup>
import { useDeviceType } from "@/composables/useDeviceType";
import { useDirection } from "@/stores/direction";
defineProps({
  type_tarif: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  prices: {
    type: Array,
    default: [
      {
        type: "",
        price: "",
      },
    ],
  },
});

const device = useDeviceType();
const directionStore = useDirection();
</script>
<template>
  <div class="card" :class="directionStore.direct == 'rtl' ? 'rtl' : ''">
    <div class="card__header">
      <div class="header__btn">{{ $t(type_tarif) }}</div>
      <p>{{ $t(desc) }}</p>
    </div>

    <div class="line"></div>
    <ul class="list">
      <li v-for="(item, i) in prices" :key="i">
        <h5>{{ $t(item.type) }}</h5>
        <div>
          <span>{{ item.price }}</span>
          <span v-if="item.show">{{ $t("currency") }}</span>
          <span v-else="item.show">{{ $t("time") }}</span>
        </div>
      </li>
    </ul>
    <a :href="device.deviceType.value" target="_blank" class="card__btn">{{
      $t("justOrder")
    }}</a>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 100%;
  padding: 25px 35px;
  border-radius: 15px;
  position: relative;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  &__header {
    min-height: 80px;
    padding-top: 25px;
    .header__btn {
      padding: 12px 20px 10px;
      width: max-content;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 500;
      position: absolute;
      left: 35px;
      top: -15px;
      background: #1b2430;
      color: #fff;
    }
    p {
      font-size: 14px;
      color: #6d6d6d;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: #eaeaea;
    margin: 15px 0;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 25px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h5 {
        font-size: 16px;
        color: #000;
        max-width: 50%;
        font-weight: 500;
      }
      span {
        color: #000;
        font-weight: 400;
        font-size: 15px;
      }
    }
  }
  &__btn {
    position: absolute;
    left: 35px;
    bottom: -30px;
    padding: 18px 40px;
    right: 35px;
    border-radius: 10px;
    background: #1b2430;
    color: #fff;
    font-size: 16px;
    text-decoration: underline;
    transition: all linear 0.3s;
    text-align: center;

    &:hover {
      background: #00b9ff;
    }
  }

  @media (max-width: 1024px) {
    max-width: 40%;
    padding: 15px 25px;
    .header__btn {
      padding: 10px 15px 10px;
      font-size: 16px;
    }
    &__btn {
      padding: 15px 30px;
    }
  }
  @media (max-width: 991px) {
    &__btn {
      padding: 15px 10px;
      left: 30px;
      right: 30px;
    }
  }
  @media (max-width: 768px) {
    max-width: 40%;
    padding: 10px 20px;
    &__btn {
      padding: 13px;
      left: 20px;
      right: 20px;
    }
  }

  @media (max-width: 725px) {
    max-width: 45%;
    padding: 10px 20px;
  }
  @media (max-width: 640px) {
    max-width: 48%;
  }
  @media (max-width: 576px) {
    max-width: 65%;
    &__btn {
      padding: 15px 20px;
    }
  }
  @media (max-width: 480px) {
    max-width: 85%;
    &__btn {
      left: 15px;
      right: 15px;
    }
  }
}
.main__card {
  background: #1b2430;
  .card__header {
    .header__btn {
      background: #00b9ff !important;
    }
    p {
      color: #fff;
    }
  }
  .list {
    li {
      h5 {
        color: #fff;
      }
      span {
        color: #fff;
      }
    }
  }
  .card__btn {
    background: #00b9ff;
  }
}
.rtl {
  .card__header {
    p {
      text-align: right;
    }
  }
}
</style>
