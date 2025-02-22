<script setup>
import { watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useMenuStore } from "@/stores/counter";
import { navList } from "@/data/main";
const route = useRoute();
const menuStore = useMenuStore();

watch(
  () => route.path,
  () => {
    menuStore.closeFunc();
  }
);

const handleClick = () => {
  menuStore.toggleFunc();
};
</script>
<template>
  <div class="res__nav" :class="menuStore.show ? 'active__menu' : ''">
    <header>
      <RouterLink to="/">
        <img src="@/assets/images/2023/12/footer_logo.png" alt="logo" />
      </RouterLink>
      <button @click="handleClick"><i class="bi bi-x-lg"></i></button>
    </header>
    <ul>
      <li v-for="(link, index) in navList" :key="index">
        <RouterLink
          :to="link.path"
          :class="{ active: route.path === link.path }"
        >
          {{ $t(link.name) }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.res__nav {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 350px;
  height: 100%;
  z-index: 9999;
  transition: all linear 0.4s;
  display: none;
  opacity: 0;
  transform: translateX(-100%);

  header {
    padding: 40px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: 150px;
      height: 30px;
      display: block;
      img {
        width: 100%;
        height: 100%;
      }
    }
    button {
      background: none;
      font-size: 20px;
      font-weight: 900;
      color: #1b2430;
    }
  }
  ul {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    li {
      a {
        font-size: 18px;
        color: #1b2430;
        font-weight: 500;
        letter-spacing: 2.5px;
        // word-spacing: 2px;
      }
      .active {
        color: #00b9ff;
      }
    }
  }

  //   media
  @media (max-width: 991px) {
    display: block;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
}
.active__menu {
  transform: translateX(0%);
  opacity: 1;
  header {
    button {
      font-size: 17px;
    }
  }
  ul {
    padding: 10px 20px 20px;
    gap: 6px;
    li {
      a {
        font-size: 16px;
      }
    }
  }
}
</style>
