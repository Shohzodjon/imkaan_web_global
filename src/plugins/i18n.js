import { createI18n } from "vue-i18n";
import ru from "@/locale/ru";
import en from "@/locale/en";
import uz from "@/locale/uz";
import ar from '@/locale/ar';
const lang = sessionStorage.getItem("locale");
const i18n = createI18n({
  locale: lang || "en",
  legacy: false,
  globalInjection: true,
  silentFallbackWarn: true,
  compositionOnly: false,
  messages: {
    en,
    ru,
    uz,
    ar
  },
});
export default i18n;