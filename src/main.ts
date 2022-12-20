import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './assets/main.scss'

// Import erdjs vue.
import { erdjsVue } from 'erdjs-vue';
import "erdjs-vue/dist/style.css";

const app = createApp(App)
app.use(router);

// erdjs
const erdjs = erdjsVue({
  loadCss: false,
  chain: 'devnet'
});
app.use(erdjs)

app.mount('#app')
