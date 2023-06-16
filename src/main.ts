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
  chain: 'devnet',
}, {
  walletConnectV2ProjectId: import.meta.env.VITE_VUE_APP_WC_PROJECT_ID || ''
}, {
  shouldUseWebViewProvider: true,
  extensionLogin: {
    nativeAuth: true
  },
  ledgerLogin: {
    nativeAuth: true
  }
});
app.use(erdjs);

app.mount('#app')
