<script setup>
import { cart } from '../store'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push('/')
}

function goToCheckOut() {
  router.push('/checkout') 
}

function removeItemFromCart(productId){
  const index = cart.value.findIndex( item => item.productId === productId)
  if(index !== -1) cart.value.splice(index, 1)
}

function increaseQuantity(productId){
  const item = cart.value.find( i => i.productId === productId)
  if( item ){
    item.quantity++;
    // console.log("increase funcn : ", item.quantity) 
  }
}

function decreaseQuantity(productId){
   const item = cart.value.find( i => i.productId === productId)
  if( item.quantity > 1 ) 
 { item.quantity--;
  // console.log("descrease funcn : ", item.quantity);
 }
}
</script>

<template>
  <h1 class="cart-title">🛒 Your Cart</h1>

  <div v-if="cart.length > 0">
    <div class="cart-container">
      <div class="cart-item" v-for="item in cart" :key="item.productId">
        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-unit-price">₹{{ item.price }}</span>
        </div>
        <div class="quantity-control">
          <button class="quantity-btn" @click="decreaseQuantity(item.productId)">-</button>
          <input class="quantity-field" type="number" :value="item.quantity" readonly />
          <button class="quantity-btn" @click="increaseQuantity(item.productId)">+</button>
        </div>
        <span class="item-total">₹{{ item.price * item.quantity }}</span>
        <button class="remove-btn" @click="removeItemFromCart(item.productId)">✕</button>
      </div>
    </div>
    <div class="cart-actions">
      <button class="action-btn home" @click="goToHome">Go Back</button>
      <button class="action-btn checkout" @click="goToCheckOut">Proceed to Checkout</button>
    </div>
  </div>
  <div v-else>
    <h2 class="empty-cart-message">Your cart is empty,<br/>add items to continue.</h2>
    <div class="cart-actions">
      <button class="action-btn home" @click="goToHome">Go Back</button>
    </div>
  </div>
</template>





<style scoped>
body {
  background: #0f0f0f;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-image: 
    linear-gradient(rgba(15, 15, 15, 0.97), rgba(15, 15, 15, 0.97)),
    radial-gradient(circle at 10% 20%, rgba(30, 30, 40, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(40, 30, 50, 0.2) 0%, transparent 50%);
}

.cart-title {
  text-align: center;
  margin: 38px 0 30px 0;
  font-size: 2.5rem;
  background: linear-gradient(135deg, #ffd600, #ffab00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  font-weight: 700;
  text-shadow: 0 2px 10px rgba(255, 214, 0, 0.2);
}

.cart-container {
  background: linear-gradient(145deg, #1a1a1a, #23232b);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  max-width: 680px;
  margin: 0 auto 40px auto;
  padding: 30px;
  border: 1px solid #333;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 20px;
  background: linear-gradient(145deg, #252525, #2d2d2d);
  border-radius: 12px;
  margin-bottom: 18px;
  padding: 22px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #333;
}

.cart-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-color: #444;
}

.cart-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #ffd600, #ffab00);
  border-radius: 12px 0 0 12px;
}

.item-info {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item-name {
  color: #ffd600;
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 4px;
  line-height: 1.3;
}

.item-unit-price {
  font-size: 1em;
  color: #bbb;
  font-weight: 500;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: center;
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

.item-total {
  font-size: 1.2em;
  font-weight: 700;
  color: #4caf50;
  min-width: 80px;
  text-align: right;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.remove-btn {
  background: linear-gradient(145deg, #3d3d3d, #2a2a2a);
  color: #f44336;
  font-size: 1.4em;
  border: none;
  cursor: pointer;
  margin-left: 15px;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 50%;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.remove-btn:hover {
  background: linear-gradient(145deg, #f44336, #d32f2f);
  color: #fff;
  transform: scale(1.1);
}

.cart-actions {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
}

.action-btn {
  min-width: 160px;
  padding: 15px 0;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.action-btn.home {
  background: linear-gradient(135deg, #ffd600, #ffab00);
  color: #232323;
}

.action-btn.home:hover {
  background: linear-gradient(135deg, #ffab00, #ff9100);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 171, 0, 0.3);
}

.action-btn.checkout {
  background: linear-gradient(135deg, #4caf50, #81c784);
  color: #fff;
}

.action-btn.checkout:hover {
  background: linear-gradient(135deg, #66bb6a, #a5d6a7);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(76, 175, 80, 0.3);
}

.empty-cart-message {
  text-align: center;
  color: #888;
  font-size: 1.8rem;
  font-weight: 500;
  margin: 100px 0 30px 0;
  letter-spacing: 0.5px;
  line-height: 1.5;
}

.empty-cart-message::before {
  content: "🛒";
  display: block;
  font-size: 4rem;
  margin-bottom: 20px;
  filter: grayscale(0.8);
  opacity: 0.7;
}
</style>
 
