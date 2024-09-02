import './assets/main.css'

import { createApp, render } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false;

// new Vue({
//     render: (h) => h(App),
//     router,
// }).$mount('#app');

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
