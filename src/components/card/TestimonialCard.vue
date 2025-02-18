<script setup>
defineProps({
  img: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="card">
    <div class="card__img">
      <img :src="img" alt="" />
    </div>
    <div class="card__info">
      <p>{{ $t(desc) }}</p>
      <h3>{{ name }}</h3>
      <h6>{{ position }}</h6>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card {
  background: #fff;
  padding: 50px 30px 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  &__img {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    margin: 0 auto 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__info {
    p {
      font-size: 16px;
      color: #6d6d6d;
      text-align: center;
      word-break: break-all;
      margin-bottom: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    h3 {
      text-align: center;
      color: #1b2430;
      font-size: 20px;
      font-weight: 600;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 14px;
      color: #00b9ff;
      font-weight: 500;
      text-align: center;
    }
  }
  @media (max-width: 640px) {
    padding: 20px 20px 10px;
  }
}
</style>
