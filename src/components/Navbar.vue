<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useMenuStore } from "@/stores/counter";
import { useDirection } from "@/stores/direction";
import ru from "@/assets/images/flag__ru.png";
import en from "@/assets/images/flag__en.png";
import uz from "@/assets/images/flag__uz.png";
import ar from "@/assets/images/flag__ar.png";
import $i18n from "@/plugins/i18n";
import { navList } from "@/data/main";

const route = useRoute();
const menuStore = useMenuStore();
const directionStore = useDirection();
const lang = sessionStorage.getItem("locale");
const currentLang = ref(lang || "en");
const languageMap = { uz, ru, en, ar };
const imgSrc = computed(() => languageMap[currentLang.value]);
const handleClick = () => menuStore.toggleFunc();

const changeLanguage = () => {
  $i18n.global.locale.value = currentLang.value;
  sessionStorage.setItem("locale", currentLang.value);

  if (currentLang.value == "ar") {
    directionStore.changeDirect();
  } else {
    directionStore.direct = "ltr";
  }
};

onMounted(changeLanguage);
</script>
<template>
  <nav class="nav">
    {{ lang }}
    <div class="nav__top" :class="directionStore.direct == 'rtl' ? 'rtl' : ''">
      <div class="container">
        <div class="flex">
          <div class="left">
            <a href="mailto:info@imkaan.uz">
              <i class="bi bi-envelope-fill"></i>
              <span>info@imkaan.uz</span>
            </a>
            <a href="tel:+998557021122" target="_blank">
              <i class="bi bi-telephone-fill"></i>
              <span>+998 55 702 11 22 </span>
            </a>
          </div>
          <p v-html="$t('nav_top')"></p>
        </div>
      </div>
    </div>
    <div class="nav__bottom" :class="directionStore.direct == 'rtl' ? 'rtl' : ''">
      <div class="container">
        <div class="flex">
          <RouterLink to="/" class="logo">
            <img src="@/assets/images/2023/12/footer_logo.png" alt="logo" />
          </RouterLink>
          <div class="right">
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
            <div class="lang">
              <span>
                <img :src="imgSrc" alt="flag" />
              </span>
              <select v-model="currentLang" @change="changeLanguage">
                <option value="uz">O'zbekcha</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            <button class="menu__btn" style="color: #000" @click="handleClick">
              <i class="bi bi-list"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
