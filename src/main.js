import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createHead } from "@vueuse/head"

const head = createHead();

const app = createApp(App);

app.use(head).use(router);

app.mount('#app');
