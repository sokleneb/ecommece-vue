<script setup>
import { product } from "../products";
import { onMounted, ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { cart } from "@/store";

const route = useRoute();
const router = useRouter();
const previousProduct = ref();
let id = 0;
const newTodo = ref('');
const reviews = ref([
  {
    id: id++,
    user: "Alice",
    text: "Great product! Really loved the quality and build.",
    rating: 5
  },
  {
    id: id++,
    user: "Bob",
    text: "Good value for money. Packaging could be better.",
    rating: 4
  },
  {
    id: id++,
    user: "Charlie",
    text: "Average experience. Product arrived late.",
    rating: 3
  }
]);

function addTodo(){
  reviews.value.push({id:id++, user:"new user", rating:4.1, text: newTodo.value});
  newTodo.value='';
}

function removeTodo(review){
  reviews.value = reviews.value.filter( (r) => r!= review );
}

onMounted(() => {
  const id = parseInt(route.params.id);
  const foundProduct = product.value.find((p) => p.productId === id);
  previousProduct.value = foundProduct;
});

function getProductQuantity(productId) {
  const cartItem = cart.value.find(i => i.productId === productId);
  return cartItem ? cartItem.quantity : 0;
}
function increaseProductQuantity(productId) {
  const selectedItem = product.value.find(p => p.productId === productId);
  const cartItem = cart.value.find(i => i.productId === productId);
  if (cartItem) {
    cartItem.quantity++;
  } else if (selectedItem) {
    cart.value.push({ ...selectedItem, quantity: 1 });
  }
}
function decreaseProductQuantity(productId) {
  const cartItem = cart.value.find(i => i.productId === productId);
  if (cartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      cart.value = cart.value.filter(i => i.productId !== productId);
    }
  }
}

function goToHome() {
  router.push('/');
}

function goToCart() {
  router.push('/cart');
}
</script>

<template>
  <h1>Product Detail Page</h1>
  <div v-if="previousProduct != null" class="detail-layout">
    <div class="detail-img-section">
      <img :src="previousProduct.image" alt="Product Image" class="product-image" />
    </div>
    <div class="detail-info-section">
      <h2 class="product-name">{{ previousProduct.name }}</h2>
      <p class="description">{{ previousProduct.description }}</p>
      <p class="price">Price: ${{ previousProduct.price }}</p>
      <div class="button-row">
        
        <div class="quantity-control" style="margin-bottom:16px;">
          <button
  class="quantity-btn"
  :class="{ 'is-disabled': !getProductQuantity(previousProduct.productId) }"
  @click.stop="decreaseProductQuantity(previousProduct.productId)"
  :disabled="!getProductQuantity(previousProduct.productId)"
  :title="!getProductQuantity(previousProduct.productId) ? 'Add to cart first' : 'Decrease quantity'"
>
  -
</button>

          <input class="quantity-field" type="number" :value="getProductQuantity(previousProduct.productId)" readonly />
          <button class="quantity-btn" @click="increaseProductQuantity(previousProduct.productId)">+</button>
        </div>
        
        <button class="cart-btn" @click="goToCart">Go to Cart</button>
        <button class="cart-btn" @click="goToHome">Go Back</button>
      </div>
      <hr class="section-divider"/>
      <h3 class="reviews-title">Customer Reviews</h3>
      <div class="reviews-list">
        <div v-for="review in reviews" :key="review.id" class="review-row">
          <span class="review-user">{{ review.user }}</span>
          <span class="review-rating">⭐ {{ review.rating }}/5</span>
          <p class="review-text">{{ review.text }}</p>
          <button @click="removeTodo(review)">Remove</button>
        </div>
        <form @submit.prevent="addTodo">
          <input type="text" placeholder="enter yourreview here" v-model="newTodo">
          <button>Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div v-else>
    <p class="not-found">Product not found.</p>
  </div>
</template>

<style scoped>
/* Reviews section styling */
.reviews-list {
  margin-left: 8px;
  margin-top: 20px;
  background-color: #1a1a1a;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #333;
}

.review-row {
  border-left: 3px solid #4caf50;
  padding-left: 18px;
  margin-bottom: 20px;
  position: relative;
  padding-right: 80px;
}

.review-user {
  color: #bb86fc;
  font-weight: 600;
  margin-right: 10px;
  display: inline-block;
}

.review-rating {
  color: #ffd600;
  font-weight: 500;
  margin-right: 15px;
  display: inline-block;
}

.review-text {
  color: #ccc;
  margin: 6px 0 0 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.review-row button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4444;
  border: none;
  color: #fff;
  padding: 6px 12px;
  font-size: 0.85rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.review-row button:hover {
  background: #e53935;
}

/* Review form */
.reviews-list form {
  display: flex;
  margin-top: 20px;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.reviews-list input[type="text"] {
  flex: 1;
  min-width: 220px;
  padding: 10px;
  background-color: #222;
  border: 1px solid #555;
  border-radius: 6px;
  color: #fff;
  font-size: 0.95rem;
}

.reviews-list button[type="submit"] {
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.reviews-list button[type="submit"]:hover {
  background: #43a047;
}

.reviews-list button[type="submit"] {
  background: linear-gradient(145deg, #4caf50, #66bb6a);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.reviews-list button[type="submit"]:hover {
  background: linear-gradient(145deg, #66bb6a, #81c784);
  transform: translateY(-2px);
}

.reviews-list button[type="submit"]:active {
  transform: scale(0.97);
  background: #388e3c;
}

.quantity-btn.is-disabled {
  background: #2e2e2e;
  color: #888;
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: auto; /* Allow hover effects */
}

.quantity-btn.is-disabled:hover {
  background: #2e2e2e;
  color: #bbb;
  transform: none;
  box-shadow: none;
}

body {
  background-color: #121212;
}
h1 {
  text-align: center;
  color: #e0e0e0;
  margin-bottom: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.detail-layout {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  margin: 40px auto 0;
  background: none;
  box-shadow: none;
  border-radius: 0;
  border: 1px solid #222;
}
.detail-img-section {
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #181818;
  border-right: 1px solid #222;
  padding: 30px 0;
}
.product-image {
  max-width: 220px;
  height: auto;
  border-radius: 8px;
  border: 1px solid #333;
}
.detail-info-section {
  flex: 2;
  padding: 32px 32px 24px;
  background-color: #181818;
}
h2.product-name {
  color: #ffeb3b;
  font-size: 1.8rem;
  margin: 0 0 10px;
}
.description {
  color: #bbb;
  margin: 8px 0 15px 0;
}
.price {
  color: #4caf50;
  font-weight: bold;
  margin-bottom: 25px;
}
.button-row {
  margin-bottom: 28px;
}
/* Inline quantity picker styling (copied from your main page) */
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  margin-top: 8px;
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
.cart-btn {
  display: inline-block;
  background-color: #444;
  color: #fff;
  border: none;
  padding: 10px 22px;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}
.cart-btn:hover {
  background-color: #4caf50;
}
.section-divider {
  margin: 36px 0 18px 0;
  border: none;
  height: 1px;
  background: #222;
}
.reviews-title {
  color: #ffeb3b;
  font-size: 1.35rem;
  margin-bottom: 12px;
}
.reviews-list {
  margin-left: 8px;
}
.review-row {
  border-left: 3px solid #333;
  margin-bottom: 20px;
  padding-left: 18px;
  font-size: 1rem;
}
.review-user {
  color: #bb86fc;
  font-weight: 600;
  margin-right: 10px;
}
.review-rating {
  color: #ffd600;
  font-weight: 500;
  margin-right: 15px;
}
.review-text {
  color: #ccc;
  margin: 6px 0 0 0;
}
.not-found {
  color: red;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 60px;
}
@media (max-width: 700px) {
  .detail-layout {
    flex-direction: column;
    max-width: 98vw;
    border: none;
  }
  .detail-img-section {
    border-right: none;
    border-bottom: 1px solid #222;
    justify-content: center;
  }
  .detail-info-section {
    padding: 16px 10px 12px;
  }
}
</style>
