import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// agregamos esta línea para inicializar la autenticación al cargar la aplicación, para ver si ya hay una sesion activa
await authStore.initAuth()
app.mount('#app')
