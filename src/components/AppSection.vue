<script setup>
import { useDirection } from "@/stores/direction";
const directionStore = useDirection();
</script>
<template>
  <section
    class="app__section"
    :class="directionStore.direct == 'rtl' ? 'rtl' : ''"
  >
    <div class="container">
      <div class="flex">
        <div class="left">
          <div class="img__wrapper">
            <img src="@/assets/images/imkaan.ae.png" alt="mobile" />
          </div>
        </div>
        <div class="right">
          <h4>{{ $t("downloadApp") }}</h4>
          <h2>{{ $t("downloadAppTitle") }}</h2>
          <p>
            {{ $t("downloadAppDesc") }}
          </p>

          <div class="store__group">
            <a
              href="https://apps.apple.com/uz/app/imkaan-driver/id6475028299"
              target="_blank"
            >
              <img
                src="@/assets/images/2023/12/app-store1.png"
                alt="app store"
              />
            </a>
            <a
              href="https://play.google.com/store/search?q=imkaan+taxi&c=apps"
              target="_blank"
            >
              <img
                src="@/assets/images/2023/12/google-play.png"
                alt="app store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
