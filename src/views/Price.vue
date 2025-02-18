<script setup>
import AppSection from "@/components/AppSection.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import PriceCard from "@/components/card/PriceCard.vue";
import OrderSection from "@/components/OrderSection.vue";
import Travel from "@/components/Travel.vue";
import { common, vipe, exclusive } from "@/data/main";
</script>
<template>
  <section class="price__page">
    <header>
      <div class="container">
        <div class="flex">
          <h2>{{ $t("price") }}</h2>
          <BreadCrumb name="price" url="/price" />
        </div>
      </div>
    </header>
    <!-- end of header -->
    <div class="price__flex">
      <div class="container">
        <h4 class="sub__title">{{ $t("ourPrice") }}</h4>
        <h2>{{ $t("priceTitle") }}</h2>
        <p class="desc">
          {{ $t("priceDesc") }}
        </p>
        <div class="flex">
          <PriceCard type_tarif="common" desc="commonDesc" :prices="common" />
          <PriceCard
            type_tarif="exclusive"
            desc="exclusiveDesc"
            :prices="exclusive"
            class="main__card"
          />
          <PriceCard type_tarif="vipe" desc="vipeDesc" :prices="vipe" />
        </div>
      </div>
    </div>
    <!-- end of price__flex -->
    <div class="download__section">
      <AppSection />
    </div>
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
    <!-- <Travel/> -->
  </section>
</template>
