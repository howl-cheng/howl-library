import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import hnyui from '@hny/components'
const app = createApp(App)
app.use(hnyui)
app.mount('#app')
