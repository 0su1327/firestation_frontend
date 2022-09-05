import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7777'
const app = createApp(App)
app.config.globalProperties.axios = axios

console.log(axios.defaults)
app.use(store).use(router).mount('#app')

// createApp(App).use(store).use(router).mount('#app')
