<script setup>
import { product } from "../products";
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { cart } from "@/store";

const route = useRoute();
const router = useRouter();
const previousProduct = ref();
let id = 0;
const newTodo = ref('')
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
  reviews.value.push({id:id++, user:"new user", rating:4.1,text: newTodo.value})
  newTodo.value=''
}

function removeTodo(review){
  reviews.value = reviews.value.filter( (r) => r!= review)
}

onMounted(() => {
  const id = parseInt(route.params.id);
  const foundProduct = product.value.find((p) => p.productId === id);
  previousProduct.value = foundProduct;
});

function addItemToCart(productId) {
  const item = product.value.find(p => p.productId === productId);
  if (item) cart.value.push(item);
  console.log("cart : ", cart);
}

function goToHome() {
  router.push('/');
}

function goToCart() {
  router.push('/cart')
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
        <button class="cart-btn" @click="addItemToCart(previousProduct.productId), goToCart()">Add to cart</button>
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

