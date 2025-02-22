<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BreadCrumb from "@/components/BreadCrumb.vue";
import CallCenter from "@/components/card/CallCenter.vue";
import InvateCard from "@/components/card/InvateCard.vue";
import OrderSection from "@/components/OrderSection.vue";
import Travel from "@/components/Travel.vue";
import { convinentList, partnerList } from "@/data/main";
import { useDirection } from "@/stores/direction";

const directionStore = useDirection();
</script>
<template>
  <section class="about">
    <header>
      <div class="container">
        <h2>{{ $t("about") }}</h2>
        <BreadCrumb url="about" name="about" />
      </div>
    </header>
    <div
      class="service__type"
      :class="directionStore.direct == 'rtl' ? 'service__rtl' : ''"
    >
      <div class="container">
        <div class="flex">
          <div class="left__item">
            <h4>{{ $t("aboutImkaan") }}</h4>
            <h2>{{ $t("aboutImkaanTitle") }}</h2>
            <p class="desc">
              {{ $t("aboutImkaanDesc") }}
            </p>
            <div class="grid__box">
              <div
                class="grid__item"
                v-for="item in convinentList"
                :key="item.id"
              >
                <span><i class="bi bi-check"></i></span>
                <span>{{ $t(item.title) }}</span>
              </div>
            </div>
            <CallCenter />
          </div>
          <div class="right__item">
            <div class="img__box">
              <div class="item__one">
                <img src="@/assets/images/2023/12/trip-1.webp" alt="trip one" />
              </div>
              <div class="item__two">
                <img src="@/assets/images/2023/12/trip-2.webp" alt="trip two" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex__box">
          <InvateCard title="allPayment" desc="paymentDesc" class="item__one">
            <template #icon>
              <i class="bi bi-cash-coin"></i>
            </template>
            <template #footer>
              <ul class="payment__list">
                <li><i class="bi bi-credit-card"></i> <span> Stripe</span></li>
              </ul>
            </template>
          </InvateCard>
          <InvateCard title="security" desc="securityDesc" class="item__two">
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
          <InvateCard title="onlineService" desc="onlineServiceDesc">
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
    <!--end of second section -->
    <Travel />
    <!-- end of travel -->
    <div class="order__section">
      <div class="container">
        <h4>{{ $t("howWork") }}</h4>
        <h2>{{ $t("order") }}</h2>
        <p class="desc">
          {{ $t("orderDesc") }}
        </p>
        <OrderSection />
      </div>
    </div>
    <div class="team">
      <div class="container">
        <h2>{{ $t("leader") }}</h2>
        <p class="desc">
          {{ $t("leaderDesc") }}
        </p>
        <div class="logo">
          <img src="@/assets/images/2023/12/leader.png" alt="leader" />
        </div>
        <p class="desc">
          {{ $t("leaderDescTwo") }}
        </p>
        <h5 class="leader__name">Ibrohim Qayumov</h5>
        <p class="desc">{{ $t("leaderName") }}</p>
      </div>
    </div>
    <div class="partner">
      <div class="container" style="position: relative">
        <h2>{{ $t("partner") }}</h2>
        <swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="20"
          :loop="true"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          :autoplay="{ delay: 3000 }"
          class="mySwiper"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            700: { slidesPerView: 1, spaceBetween: 20 },
            1024: { slidesPerView: 1, spaceBetween: 20 },
          }"
        >
          <swiper-slide v-for="(item, i) in partnerList" :key="i">
            <div class="partner__img">
              <div class="header">
                <img :src="item.img" alt="partner one" />
              </div>
              <div class="info">
                <p v-if="item.desc">{{ item.desc }}</p>
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <button class="swiper-button-prev">
          <i class="bi bi-chevron-left"></i>
        </button>
        <button class="swiper-button-next">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
