<script setup>
defineProps({
  url: {
    type: String,
    default: "/",
  },
  name: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="bread__crumb">
    <ul>
      <li><RouterLink to="/">{{ $t('home') }}</RouterLink></li>
      <li>
        <i class="bi bi-chevron-right"></i>
      </li>
      <li>
        <RouterLink :to="url">{{ $t(name) }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.bread__crumb {
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    li {
      a {
        font-size: 18px;
        color: #fff;
        font-weight: 500;
      }
      i {
        font-size: 15px;
        color: #00b9ff;
        margin-top: 4px;
        display: inline-block;
      }
    }
  }
  @media (max-width: 568px) {
    ul {
      li {
        a {
          font-size: 16px;
        }
        i {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
