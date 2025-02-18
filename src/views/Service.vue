<script setup>
import { ref, onMounted } from "vue";
import { useDeviceType } from "@/composables/useDeviceType";
import BreadCrumb from "@/components/BreadCrumb.vue";
import ServiceType from "@/components/card/ServiceType.vue";
import { VsAccordion, VsAccordionItem } from "@vuesimple/vs-accordion";
import { progressData, services, faqList } from "@/data/main";
import { useDirection } from "@/stores/direction";
const device = useDeviceType();
const progressSection = ref(null);
const isVisible = ref(false);
const directionStore = useDirection();
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (!progressSection.value) return;
  const rect = progressSection.value.getBoundingClientRect();
  isVisible.value = rect.top < window.innerHeight && rect.bottom >= 0;
};
</script>
<template>
  <section class="service__page">
    <header>
      <div class="container">
        <h2>{{ $t("ourService") }}</h2>
        <BreadCrumb name="ourService" url="/services" />
      </div>
    </header>
    <div class="service__grid">
      <div class="container">
        <h4 class="sub__title">{{ $t("ourTaxiService") }}</h4>
        <h2 class="title">{{ $t("ourTaxiServiceTitle") }}</h2>
        <p class="desc">
          {{ $t("ourTaxiServiceDesc") }}
        </p>
        <div class="grid">
          <ServiceType
            v-for="item in services"
            :key="item.id"
            :title="item.title"
            :desc="item.desc"
            :icon="item.icon"
            :class="[item.id == 1 ? 'active_card' : '']"
          />
        </div>
      </div>
    </div>
    <!-- end of grid -->
    <div
      class="progress"
      :class="directionStore.direct == 'rtl' ? 'rtl__progress' : ''"
    >
      <div class="container">
        <div class="flex">
          <div class="left">
            <h4>{{ $t("ourExperience") }}</h4>
            <h2>{{ $t("ourExperienceTitle") }}</h2>
            <p>
              {{ $t("ourExperienceDesc") }}
            </p>
            <div ref="progressSection" class="progress-container">
              <div
                v-for="(item, index) in progressData"
                :key="index"
                class="progress-item"
              >
                <div class="item-header">
                  <span>{{ $t(item.label) }}</span>
                  <span>{{ item.value }}%</span>
                </div>

                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: isVisible ? item.value + '%' : '0%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div class="modal">
          <h2>{{ $t("modalTitle") }}</h2>
          <p>
            {{ $t("modalDesc") }}
          </p>
          <a
            :href="device.deviceType.value"
            target="_blank"
            rel="noopener noreferrer"
            >{{ $t("orderNow") }}
          </a>
        </div>
      </div>
    </div>
    <!-- end of progress -->
    <div class="faq" :class="directionStore.direct == 'rtl' ? 'faq__rtl' : ''">
      <div class="container">
        <div class="faq__flex">
          <div class="item__one">
            <div class="img__wrapper">
              <img src="@/assets/images/2023/12/faq.jpg" alt="faq img" />
              <div class="modal">
                <p>{{ $t("contactUs") }}</p>
                <a href="tel:+998557021122" target="_blank">{{
                  $t("contactNumber")
                }}</a>
              </div>
            </div>
          </div>
          <div class="item__two">
            <h4 class="sub__title">{{ $t("customerRequest") }}</h4>
            <h2 class="title">{{ $t("faq") }}</h2>
            <p class="desc">
              {{ $t("faqDesc") }}
            </p>

            <vs-accordion :is-box="true" is-compact>
              <vs-accordion-item v-for="(item, index) in faqList" :key="index">
                <template #accordion-trigger>
                  <h4>{{ $t(item.title) }}</h4>
                </template>

                <div>
                  <p>{{ $t(item.desc) }}</p>
                </div>
              </vs-accordion-item>
            </vs-accordion>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.progress-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.progress-item {
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-header span {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}
.progress-bar {
  width: 100%;
  height: 8px;
  background: #ffffff29;
  border-radius: 3px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #2e93fa;
  transition: width 1s ease-in-out;
  border-radius: 3px;
}
</style>
