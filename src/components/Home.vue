<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { cart } from "../store";
import cartIcon from "@/assets/cart-icon.png";
import homeIcon from "@/assets/home.png";
import profileIcon from "@/assets/profile.png";
import { product } from "../products";

const router = useRouter();

function goToCart() {
  router.push("/cart");
}
function goToDetailPage(productId) {
  router.push(`/productDetail/${productId}`);
}

function getProductQuantity(productId) {
  const cartItem = cart.value.find((i) => i.productId === productId);
  return cartItem ? cartItem.quantity : 0;
}

function increaseProductQuantity(productId) {
  const selectedItem = product.value.find((p) => p.productId === productId);
  const cartItem = cart.value.find((i) => i.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.value.push({ ...selectedItem, quantity: 1 });
  }
}

// Decrease quantity
function decreaseProductQuantity(productId) {
  const cartItem = cart.value.find((i) => i.productId === productId);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      cart.value = cart.value.filter((i) => i.productId !== productId);
    }
  }
}

const totalCartItems = computed(() =>
  cart.value.reduce((sum, item) => sum + item.quantity, 0)
);
</script>

<template>
  <div class="page">
    <nav>
      <p class="logo">Ecommerce</p>
      <ul>
        <li>
          <router-link to="/">
            <img :src="homeIcon" width="34px" height="34px" />
          </router-link>
        </li>
        <li>
          <router-link to="/register">
            <img :src="profileIcon" width="30px" height="30px" />
          </router-link>
        </li>
        <li @click="goToCart" style="position: relative">
          <div class="cart-icon-wrapper">
            <img :src="cartIcon" width="30px" height="30px" />
            <span v-if="totalCartItems > 0" class="cart-count">{{
              totalCartItems
            }}</span>
          </div>
        </li>
      </ul>
    </nav>

    <div class="mainDiv">
      <div
        class="card"
        v-for="(item, index) in product"
        :key="index"
        @click="goToDetailPage(item.productId)"
      >
        <img :src="item.image" class="product-image" alt="image here" />
        <h3>{{ item.name }}</h3>
        <p>Rating : {{ item.rating }}</p>
        <p class="price">${{ item.price }}</p>
        <div class="quantity-control" @click.stop>
        <button
  class="quantity-btn"
  :class="{ 'is-disabled': !getProductQuantity(item.productId) }"
  @click.stop="decreaseProductQuantity(item.productId)"
  :disabled="!getProductQuantity(item.productId)"
>
  -
</button>

          <input
            class="quantity-field"
            type="number"
            :value="getProductQuantity(item.productId)"
            readonly
          />
          <button class="quantity-btn" @click.stop="increaseProductQuantity(item.productId)"> + </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quantity-btn.is-disabled {
  background: #2e2e2e;
  color: #888;
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: auto; /* allows hover effects even if button is disabled */
}

.quantity-btn.is-disabled:hover {
  background: #2e2e2e;
  color: #bbb;
  box-shadow: none;
  transform: none;
}

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
  background-image: linear-gradient(
      rgba(18, 18, 18, 0.97),
      rgba(18, 18, 18, 0.97)
    ),
    radial-gradient(
      circle at 10% 20%,
      rgba(30, 30, 40, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(40, 30, 50, 0.2) 0%,
      transparent 50%
    );
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
.cart-icon-wrapper {
  position: relative;
}
.cart-count {
  position: absolute;
  top: -7px;
  right: -10px;
  background: linear-gradient(135deg, #ffd600, #ffab00);
  color: #23232b;
  font-weight: 700;
  font-size: 15px;
  min-width: 26px;
  height: 24px;
  padding: 2px 8px;
  border-radius: 13px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(255, 214, 0, 0.2);
  pointer-events: none;
  z-index: 2;
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
  content: "";
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
/* Inline quantity picker (copied from cart) */
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: 16px;
}
.quantity-btn {
  width: 36px;
  height: 36px;
  background: linear-gradient(145deg, #37384b, #45465a);
  color: #ffd600;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quantity-btn:hover {
  background: linear-gradient(145deg, #ffd600, #ffab00);
  color: #23232b;
  transform: scale(1.05);
}
.quantity-btn:active {
  transform: scale(0.95);
}
.quantity-field {
  width: 50px;
  background: #1a1a1a;
  border: 2px solid #373737;
  border-radius: 8px;
  color: #fff;
  font-size: 1.1em;
  text-align: center;
  font-weight: bold;
  padding: 8px 0;
  pointer-events: none;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}
</style>
