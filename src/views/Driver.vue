<script setup>
import { useDeviceType } from "@/composables/useDeviceType";
import Role from "@/components/card/Role.vue";
import { useDirection } from "@/stores/direction";
const data = [
  {
    title: "reasonTitle",
    desc: "reasonDesc",
  },
  {
    title: "reasonTitleTwo",
    desc: "reasonDescTwo",
  },
  {
    title: "reasonTitleThree",
    desc: "reasonDescThree",
  },
  {
    title: "reasonTitleFour",
    desc: "reasonDescFour",
  },
];

const data2 = [
  {
    title: "reasonTitleFive",
    desc: "reasonDescFive",
  },
  {
    title: "reasonTitleSix",
    desc: "reasonDescSix",
  },
  {
    title: "reasonTitleSeven",
    desc: "reasonDescSeven",
  },
  {
    title: "reasonTitleEight",
    desc: "reasonDescEight",
  },
  {
    title: "reasonTitleNine",
    desc: "reasonDescNine",
  },
];

const device = useDeviceType();
const directionStore = useDirection();
</script>
<template>
  <section
    class="driver__page"
    :class="directionStore.direct == 'rtl' ? 'rtl' : ''"
  >
    <header>
      <div class="container">
        <h2>{{ $t("beDriver") }}</h2>
      </div>
    </header>
    <div class="driver__page-content">
      <div class="container">
        <h3>{{ $t("welcomeImkaan") }}</h3>
        <p class="desc">
          {{ $t("driverDesc") }}
        </p>

        <h3>{{ $t("whyOurTeam") }}</h3>
        <Role
          v-for="(item, i) in data"
          :key="i"
          :title="item.title"
          :desc="item.desc"
        />
        <Role title="stepByStep" />
        <Role
          v-for="(item, i) in data2"
          :key="i"
          :title="item.title"
          :desc="item.desc"
        />

        <h3>{{ $t("driverComunity") }}</h3>
        <p class="desc">
          {{ $t("driverComunityDesc") }}
        </p>
        <h3>{{ $t("joinUs") }}</h3>
        <p class="desc">
          {{ $t("joinUsDesc") }}
        </p>
        <p class="desc">
          {{ $t("joinDescTwo") }}
        </p>
        <h5>{{ $t("joinUsDescThree") }}</h5>

        <a :href="device.deviceType.value" target="_blank" class="join__btn">{{
          $t("joinLink")
        }}</a>
      </div>
    </div>
  </section>
</template>
