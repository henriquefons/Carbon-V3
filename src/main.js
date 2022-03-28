import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "carbon-components/css/carbon-components.css";

createApp(App).use(store).use(router).mount("#app");
