<script setup>
import { useDirection } from "@/stores/direction";

const directionStore = useDirection();
</script>
<template>
  <footer class="footer">
    <section
      class="footer__top"
      :class="directionStore.direct == 'rtl' ? 'rtl' : ''"
    >
      <div class="container">
        <h4>{{ $t("footerTopSubtitle") }}</h4>
        <h2>
          {{ $t("footerTopTitle") }}
        </h2>
        <a href="tel:+971503768496">
          <span>
            <i class="bi bi-telephone-fill"></i>
          </span>
          <span>+971 50 376 8496</span>
        </a>
      </div>
    </section>
    <!-- end of top -->
    <section
      class="footer__bottom"
      :class="directionStore.direct == 'rtl' ? 'rtl' : ''"
    >
      <div class="container">
        <ul class="list">
          <li>
            <h5>{{ $t("addressLabel") }}</h5>
            <a
              href="https://www.google.com/maps?q=24.49150833568747, 54.35695452883563"
              target="_blank"
              >{{ $t("addressVal") }}</a
            >
          </li>
          <li>
            <h5>{{ $t("communication") }}</h5>
            <a href="mailto:info@imkaan.ae">info@imkaan.ae</a>
            <a href="tel:+971503768496">+971 50 376 8496</a>
          </li>
          <li>
            <h5>{{ $t("center") }}</h5>
            <a href="#">{{ $t("helpCenter") }}</a>
            <a href="tel:+971503768496">+971 50 376 8496</a>
          </li>
          <li>
            <h5>{{ $t("openTime") }}</h5>
            <p>{{ $t("openTimeVal") }}</p>
          </li>
        </ul>
        <div class="line"></div>
        <div class="flex">
          <p>{{ $t("reserved") }}</p>
          <RouterLink to="/" class="link">
            <img src="@/assets/images/2023/12/footer_bottom.png" alt="logo" />
          </RouterLink>
          <div class="link__group">
            <RouterLink to="/privace">{{ $t("privacy") }}</RouterLink>
            <RouterLink to="/contract">{{ $t("contract") }}</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
