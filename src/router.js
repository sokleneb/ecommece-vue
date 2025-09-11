import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Register from './components/Login.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
import OrderSuccess from './components/OrderSuccess.vue'
import ProductDetail from './components/ProductDetailPage.vue'
import Signup from './components/Signup.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/cart', component: Cart },
  { path: '/checkout', component: Checkout },
  { path: '/ordersuccess', component: OrderSuccess },
  { path: '/productDetail/:id',component: ProductDetail},
  { path: '/signup', component: Signup},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
