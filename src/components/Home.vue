<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {cart } from '../store';
import cartIcon from '@/assets/cart-icon.png'
import homeIcon from '@/assets/home.png'
import profileIcon from '@/assets/profile.png'
import{ product} from '../products'

function addItemToCart(productId) {
  const selectedItem = product.value.find(p => p.productId === productId)
  const cartItem = cart.value.find( i => i.productId === productId)
  if(cartItem === selectedItem ) selectedItem.quantity++; 
  else cart.value.push(selectedItem)
  // console.log("cart : ", cart)
}

const router = useRouter()

function goToCart() {
  router.push('/cart')
}

function goToDetailPage(productId){
  router.push(`/productDetail/${productId}`)
}
</script>

<template>
  <div class="page">
    <nav>
      <p class="logo">Ecommerce</p>
      <ul>
        <li><router-link to="/">
          <img :src="homeIcon" width="34px" height="34px"/>
        </router-link></li>
        <li><router-link to="/register">
          <img :src="profileIcon" width="30px" height="30px"/>
        </router-link></li>
        <li @click="goToCart"><router-link to="/cart">
          <img :src="cartIcon" width="30px" height="30px"/>
        </router-link></li>
      </ul>
    </nav>

    <div class="mainDiv">
      <div class="card" v-for="(item, index) in product" :key="index" @click="goToDetailPage(item.productId)">
        <img :src="item.image" class="product-image" alt="image here"/>
        <h3>{{ item.name }}</h3>
        <p>Rating : {{ item.rating }}</p>
        <p class="price">${{ item.price }}</p>
        <button id="cartBtn" @click.stop="addItemToCart(item.productId)" @click="goToCart()">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}
.card:hover .product-image {
  transform: scale(1.03);
}

.page {
  background-color: #0f0f0f;
  color: #e0e0e0;
  min-height: 100vh;
  width: 100vw;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-image: 
    linear-gradient(rgba(18, 18, 18, 0.97), rgba(18, 18, 18, 0.97)),
    radial-gradient(circle at 10% 20%, rgba(30, 30, 40, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(40, 30, 50, 0.2) 0%, transparent 50%);
}

/* Navigation Bar */
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #d59d9d, #b9b5b5);
  padding: 0 24px;
  height: 64px;
  border-bottom: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

nav .logo {
  font-weight: bold;
  font-size: 22px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

nav ul {
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  cursor: pointer;
  color: #ccc;
  transition: all 0.2s ease;
  text-decoration: none;
  padding: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

nav ul li:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

nav ul li a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav ul li img {
  filter: brightness(0.9);
  transition: filter 0.2s ease;
}

nav ul li:hover img {
  filter: brightness(1.2);
}

/* Product Grid */
.mainDiv {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* Product Card */
.card {
  background: linear-gradient(145deg, #1e1e1e, #252525);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 18px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #4caf50, #8bc34a);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  border-color: #444;
}

.card h3 {
  margin: 0 0 12px;
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
  line-height: 1.3;
  height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.card p {
  margin: 6px 0;
  color: #bbb;
  font-size: 14px;
}

.card .price {
  font-weight: bold;
  color: #4caf50;
  margin-top: 12px;
  font-size: 18px;
}

#cartBtn {
  background: linear-gradient(135deg, #4caf50, #8bc34a);
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.2s ease;
  width: 100%;
  margin-top: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 14px;
  box-shadow: 0 2px 5px rgba(76, 175, 80, 0.3);
}

#cartBtn:hover {
  background: linear-gradient(135deg, #5cbf60, #9cd35a);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(76, 175, 80, 0.4);
}

#cartBtn:active {
  animation: cartClickAnimation 0.3s ease;
  background: linear-gradient(135deg, #3d8b40, #7a9e38);
}

/* Button click animation */
@keyframes cartClickAnimation {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  50% {
    transform: scale(0.95);
    box-shadow: 0 0 12px rgba(76, 175, 80, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
