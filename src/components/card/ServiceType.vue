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
  icon: {
    type: String,
    default: "",
  },
});
const directionStore = useDirection();
</script>
<template>
  <div class="card" :class="directionStore.direct == 'rtl' ? 'rtl' : ''">
    <div class="icon__wrapp">
      <i :class="icon"></i>
    </div>
    <div class="card__info">
      <h4>{{ $t(title) }}</h4>
      <p>{{ $t(desc) }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  width: 100%;
  padding: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: all linear 0.5s;
  background: #fff;
  .icon__wrapp {
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background: #1b2430;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    transition: all linear 0.5s;
  }
  &__info {
    h4 {
      color: #1b2430;
      font-size: 24px;
      font-weight: 600;
      margin: 20px 0 10px;
      transition: all linear 0.5s;
    }
    p {
      font-size: 16px;
      color: #6d6d6d;
      margin-bottom: 14px;
      transition: all linear 0.5s;
    }
  }
  &:hover {
    background: #1b2430;
    .icon__wrapp {
      background: #00b9ff;
    }
    .card__info {
      h4,
      p {
        color: #fff;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 20px;
  }
  @media (max-width: 768px) {
    .icon__wrapp {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
    &__info {
      h4 {
        font-size: 22px;
        margin: 10px 0;
      }
    }
  }
}

.active_card {
  background: #1b2430;
  .icon__wrapp {
    background: #00b9ff;
  }
  .card__info {
    h4,
    p {
      color: #fff;
    }
  }
}

.rtl {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .card__info {
    h4,
    p {
      text-align: right;
    }
  }
}
</style>
