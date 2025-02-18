<script setup>
import { ref, onMounted } from "vue";
import { useDeviceType } from "@/composables/useDeviceType";
import { useDirection } from "@/stores/direction";
import CallCenter from "@/components/card/CallCenter.vue";
import InvateCard from "@/components/card/InvateCard.vue";
import ServiceCard from "@/components/card/ServiceCard.vue";
import PriceCard from "@/components/card/PriceCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppSection from "@/components/AppSection.vue";
import ServiceSection from "@/components/ServiceSection.vue";
import TestimonialCard from "@/components/card/TestimonialCard.vue";
import {
  testimonialList,
  progressData,
  common,
  exclusive,
  vipe,
} from "@/data/main";

const device = useDeviceType();

const progressSection = ref(null);
const isVisible = ref(false);
const imageRef = ref(null);
const directionStore = useDirection();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (!progressSection.value) return;
  const rect = progressSection.value.getBoundingClientRect();
  isVisible.value = rect.top < window.innerHeight && rect.bottom >= 0;
};
const handleMouseMove = (e) => {
  const container = e.currentTarget.getBoundingClientRect();
  const centerX = container.left + container.width / 2;
  const centerY = container.top + container.height / 2;

  const x = ((e.clientX - centerX) / container.width) * 80;
  const y = -((e.clientY - centerY) / container.height) * 80;

  if (imageRef.value) {
    imageRef.value.style.transition = "transform 0.1s ease";
    imageRef.value.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  }
};
const resetPosition = () => {
  if (imageRef.value) {
    imageRef.value.style.transition = "transform 0.5s ease";
    imageRef.value.style.transform = "rotateX(0deg) rotateY(0deg)";
  }
};
</script>
<template>
  <section class="home">
    <header :class="directionStore.direct == 'rtl' ? 'head__rtl' : ''">
      <div class="container">
        <div class="flex">
          <div class="info" data-aos="fade-down">
            <h4>{{ $t("headerSubtitle") }}</h4>
            <h2>{{ $t("headerTitle") }}</h2>
            <div class="btn_group">
              <a
                class="download__btn"
                :href="device.deviceType.value"
                target="_blank"
                >{{ $t("download") }}</a
              >
              <a
                href="https://www.instagram.com/imkaan.uz/"
                target="_blank"
                class="play__btn"
                ><i class="bi bi-play-fill"></i
              ></a>
            </div>
          </div>
          <div
            class="img__box"
            @mousemove="handleMouseMove"
            @mouseleave="resetPosition"
            data-aos="fade-down"
          >
            <img
              src="@/assets/images/2024/09/phone1-1.png"
              alt="phone"
              ref="imageRef"
            />
          </div>
        </div>
      </div>
    </header>
    <div class="invitation">
      <div class="container">
        <h4>{{ $t("homeOffers") }}</h4>
        <h2>{{ $t("bestOffer") }}</h2>
        <p class="desc">
          {{ $t("offerDesc") }}
        </p>
        <div class="flex">
          <InvateCard
            title="allPayment"
            desc="paymentDesc"
            class="item__one"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <template #icon>
              <i class="bi bi-cash-coin"></i>
            </template>
            <template #footer>
              <ul class="payment__list">
                <li><i class="bi bi-credit-card"></i> <span> UzCard</span></li>
                <li><i class="bi bi-credit-card"></i> <span>Payme</span></li>
                <li><i class="bi bi-credit-card"></i> <span>Humo</span></li>
              </ul>
            </template>
          </InvateCard>
          <InvateCard
            title="security"
            desc="securityDesc"
            class="item__two"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <template #icon>
              <i class="bi bi-shield-shaded"></i>
            </template>
            <template #footer>
              <ul class="securety__list">
                <li>
                  <i class="bi bi-credit-card-2-back"></i>
                  <span>{{ $t("guarantee") }}</span>
                </li>
                <li>
                  <i class="bi bi-alarm"></i>
                  <span>{{ $t("fastService") }}</span>
                </li>
              </ul>
            </template>
          </InvateCard>
          <InvateCard
            title="onlineService"
            desc="onlineServiceDesc"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <template #icon>
              <i class="bi bi-phone-flip"></i>
            </template>
            <template #footer>
              <ul class="mobile__group">
                <li>
                  <i class="bi bi-apple"></i>
                  <span>Iphone</span>
                </li>
                <li>
                  <i class="bi bi-android"></i>
                  <span>Android</span>
                </li>
              </ul>
            </template>
          </InvateCard>
        </div>
      </div>
    </div>

    <div class="service" :class="directionStore.direct == 'rtl' ? 'service__rtl' : ''">
      <div class="container">
        <div class="flex">
          <div class="left">
            <div class="img">
              <img src="@/assets/images/order.jpg" alt="order" />
            </div>
            <div class="box">
              <p>
                {{ $t("clientOpinion") }}
              </p>
              <h5>Ahmed Al-Farsi</h5>
            </div>
          </div>
          <div class="right">
            <h4 class="sub__title">{{ $t("withUs") }}</h4>
            <h2>{{ $t("reliableService") }}</h2>
            <p class="desc">
              {{ $t("withUsDesc") }}
            </p>
            <div class="flex">
              <ServiceCard title="longJourney" desc="longJourneyDesc">
                <template #icon>
                  <i class="bi bi-luggage-fill"></i>
                </template>
              </ServiceCard>
              <ServiceCard title="taxiService" desc="taxiServiceDesc">
                <template #icon>
                  <i class="bi bi-taxi-front-fill"></i>
                </template>
              </ServiceCard>
            </div>
            <div class="line"></div>
            <CallCenter />
          </div>
        </div>
      </div>
    </div>
    <!-- service -->
    <div class="progress" :class="directionStore.direct=='rtl'?'rtl__progress':''">
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
          <a :href="device.deviceType.value" target="_blank">{{
            $t("orderNow")
          }}</a>
        </div>
      </div>
    </div>
    <!-- end of progress -->
    <div class="price">
      <div class="container">
        <h4>{{ $t("ourTaxiService") }}</h4>
        <h2>{{ $t("ourTaxiServiceTitle") }}</h2>
        <p class="desc">
          {{ $t("ourTaxiServiceDesc") }}
        </p>

        <div class="flex">
          <PriceCard
            type_tarif="common"
            desc="commonDesc"
            :prices="common"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
          <PriceCard
            type_tarif="exclusive"
            desc="exclusiveDesc"
            :prices="exclusive"
            class="main__card"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
          <PriceCard
            type_tarif="vipe"
            desc="vipeDesc"
            :prices="vipe"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-delay="700"
          />
        </div>
      </div>
    </div>
    <!-- end of price -->

    <div class="mobile">
      <AppSection />
    </div>
    <!-- end of mobile -->
    <div class="service__type">
      <ServiceSection />
    </div>
    <!-- end of service type -->
    <div class="testimonial">
      <div class="container">
        <h4>{{ $t("testimonialSubtitle") }}</h4>
        <h2>{{ $t("testimonialTitle") }}</h2>
        <p class="desc">{{ $t("testimonialDesc") }}</p>
        <swiper
          :modules="[Autoplay]"
          :slides-per-view="3"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 3000 }"
          class="mySwiper"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }"
        >
          <swiper-slide v-for="item in testimonialList" :key="item.id">
            <TestimonialCard
              :img="item.img"
              :position="item.position"
              :name="item.name"
              :desc="item.desc"
            />
          </swiper-slide>
        </swiper>
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

@media (max-width: 768px) {
  .progress-container {
    gap: 15px;
  }
  .item-header span {
    font-size: 16px;
  }
}
</style>
