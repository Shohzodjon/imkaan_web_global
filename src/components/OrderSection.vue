<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { steps } from "@/data/main";
const activeIndex = ref(0);
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % steps.length;
  }, 2000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
<template>
  <div class="steps">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      :class="{ active: activeIndex === index }"
    >
      <div class="icon">
        <i :class="step.icon"></i>
      </div>
      <h3>{{ $t(step.title) }}</h3>
      <p>{{ $t(step.description) }}</p>
      <div
        v-if="index < steps.length - 1"
        class="line"
        :class="index == 1 ? 'second__line' : ''"
      >
        <span class="progress"></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  position: relative;

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    text-align: center;
    position: relative;
    padding: 10px 40px 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease-in-out;
    border-radius: 10px;

    .icon {
      width: 80px;
      height: 80px;
      background: #2c3e50;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      border-radius: 10px;
      position: relative;
      z-index: 10;
      transition: background 0.5s ease-in-out;
    }

    &.active {
      .icon {
        background: #0099ff;
      }

      .line {
        .progress {
          width: 100%;
        }
      }
    }
  }

  h3 {
    font-size: 24px;
    margin: 5px;
    color: #000;
    font-weight: 600;
    text-align: center;
  }

  p {
    font-size: 14px;
    color: #6d6d6d;
    margin-bottom: 14px;
    text-align: center;
  }

  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background: #ccc;
    top: 50px;
    left: 65%;

    .progress {
      height: 100%;
      display: block;
      background: #0099ff;
      width: 0%;
      transition: width 0.5s ease-in-out;
    }
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .step {
      min-height: 200px;
    }
    .line {
      left: 50%;
    }
    .second__line {
      display: none;
    }
  }

  @media (max-width: 768px) {
    gap: 25px;
    .step {
      padding: 10px 30px 0;

      .icon {
        width: 65px;
        height: 65px;
        font-size: 22px;
      }
    }
    h3 {
      font-size: 20px;
    }
    .line {
      left: 55%;
      top: 45px;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    .step {
      .icon {
        width: 55px;
        height: 55px;
        font-size: 20px;
      }
      &.active {
        box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
          rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
          rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
          rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
          rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
          rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
          rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
      }
    }
    .line {
      display: none;
    }
  }
}
</style>
