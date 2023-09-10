import "./global.css";
import "carbon-components-svelte/css/white.css";
import "@carbon/styles/css/styles.css";
import "@carbon/charts/styles.css";
import HMR from "@roxi/routify/hmr";
import App from "./App.svelte";

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
dayjs.locale('ru')

const app = HMR(App, { target: document.body }, "app");

export default app;
