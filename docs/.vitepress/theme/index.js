import DefaultTheme from "vitepress/theme";
import "./custom.css";
import { useData } from "vitepress";
import { watchEffect } from "vue";

// export default DefaultTheme;

export default {
  ...DefaultTheme,
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      document.cookie = `nf_lang=${lang.value}; path=/`;
    });
  },
};
