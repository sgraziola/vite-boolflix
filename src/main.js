import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import regular from "./icon/regular.js";
import solid from "./icon/solid.js";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add.apply(library, regular.concat(solid));
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
