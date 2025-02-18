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
  <div class="card">
    <div
      class="card__header"
      :class="directionStore.direct == 'rtl' ? 'rtl' : ''"
    >
      <div class="icon__wrapper">
        <slot name="icon" />
      </div>
      <div class="card__info">
        <h3>{{ $t(title) }}</h3>
        <p>{{ $t(desc) }}</p>
      </div>
    </div>
    <div class="line"></div>
    <slot name="footer"></slot>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 100%;
  height: 100% !important;
  min-height: 275px;
  padding: 30px 25px;
  border-radius: 20px;
  transition: all linear 0.3s;
  &__header {
    display: flex;
    align-items: center;
    gap: 25px;
    min-height: 135px;
    .icon__wrapper {
      max-width: 59px;
      height: 59px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 17px;
      border-radius: 10px;
      font-size: 25px;
      color: #fff;
      background: #00b9ff;
    }
    .card__info {
      flex: 1;
      h3 {
        font-size: 24px;
        font-weight: 600;
        text-wrap-style: balance;
        margin: 8px 0 4px;
        color: #1b2430;
      }
      p {
        font-size: 16px;
        text-wrap-style: balance;
        color: #6d6d6d;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  .rtl {
    flex-direction: row-reverse;
    .card__info {
      h3 {
        text-align: right;
      }
      p {
        text-align: right;
      }
    }
  }
  .line {
    height: 1px;
    background: #eaeaea;
    margin: 15px 0 20px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  }
  @media (max-width: 1200px) {
    max-width: 33%;
    &__header {
      .card__info {
        p {
          -webkit-line-clamp: 3;
        }
      }
    }
  }
  @media (max-width: 991px) {
    max-width: 40%;
  }
  @media (max-width: 768px) {
    max-width: 48%;
    padding: 25px 20px;
    min-height: max-content;
    &__header {
      gap: 25px;
      min-height: 135px;
      .icon__wrapper {
        max-width: 50px;
        height: 50px;
        padding: 16px;
        font-size: 22px;
      }
      .card__info {
        flex: 1;
        h3 {
          font-size: 22px;
          margin: 8px 0 4px;
        }
        p {
          font-size: 15px;
        }
      }
    }
    .line {
      margin: 10px 0 15px;
    }
  }

  @media (max-width: 568px) {
    max-width: 100%;
    &__header {
      gap: 20px;
      min-height: 135px;
      .icon__wrapper {
        max-width: 45px;
        height: 45px;
        padding: 14px;
        font-size: 20px;
      }
      .card__info {
        flex: 1;
        h3 {
          font-size: 20px;
          margin: 7px 0 4px;
        }
        p {
          font-size: 15px;
        }
      }
    }
    // .line {
    //   margin: 10px 0 10px;
    // }
  }
}
.item__one {
  background: #1b2430;
  .icon__wrapper {
    background: #00b9ff;
    color: #fff;
  }
  .card__info {
    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
}
.item__two {
  background: #00b9ff;
  color: #fff !important;
  .icon__wrapper {
    background: #fff;
    color: #00b9ff !important;
  }
  .card__info {
    h3 {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
  .line {
    background: #fff;
  }
}
</style>
