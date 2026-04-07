import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import UsersView from '@/views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true } // 🔒 Etiqueta de seguridad
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
      meta: { requiresAuth: true } // 🔒 Etiqueta de seguridad
    },
    {
      path: '/',
      name: 'login',
      component: LoginView,
    }
  ],
})


router.beforeEach((to, from, next) => {
  // 1. Instanciamos el store aquí adentro, cuando Pinia ya está listo
  const authStore = useAuthStore()
  
  // 2. Revisamos si la ruta a la que va tiene nuestra etiqueta
  const requiereAutenticacion = to.meta.requiresAuth

  // ---------------------------------------------------------
  // 🚦 TU TURNO:
  // Sabemos que en auth.js declaraste 'const session = ref(null)'
  // ¿Cómo escribirías esta variable para saber si la sesión existe?
  const tieneSesionActiva = authStore.session !== null 
  // ---------------------------------------------------------

  // 3. Lógica de control de tráfico
  if (requiereAutenticacion && !tieneSesionActiva) {
    // Es área restringida y NO tiene sesión -> Lo mandamos al login
    next({ name: 'login' }) 
  } else if (!requiereAutenticacion && tieneSesionActiva && to.name === 'login') {
    // Extra: Si YA tiene sesión e intenta ir al Login, lo regresamos al dashboard
    next({ name: 'dashboard' })
  } else {
    // En cualquier otro caso, lo dejamos pasar a donde iba
    next() 
  }
})

export default router
