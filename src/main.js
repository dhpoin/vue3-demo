import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from 'element-plus/lib/locale/lang/zh-cn';
import dayjs from 'dayjs';
import base from "@/plugins/base";

const app = createApp(App);

app.config.globalProperties.dayjs = dayjs;

app.use(store);
app.use(router);
app.use(ElementPlus, {locale});
app.use(base);
app.mount("#app");
