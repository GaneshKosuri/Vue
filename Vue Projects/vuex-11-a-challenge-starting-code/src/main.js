import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import appStore from "./stores"
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app.use(router);

app.use(appStore)

app.component('base-badge', BaseBadge);

app.mount('#app');