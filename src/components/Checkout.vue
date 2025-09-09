<script setup>
import { cart } from '@/store';
import { useRouter } from 'vue-router'
import { computed } from 'vue';
const router = useRouter();
const totalPrice = computed(() => {
  let sum = 0;
  cart.value.forEach(item => {
    sum += item.price*item.quantity;
  });
  return sum;
});

function goToOrderSuccessPage() {
  router.push('./orderSuccess');
}
</script>

<template>
  <h1 class="page-title">Checkout</h1>
  <div class="checkout-container">
    <div class="checkout-header">
      <h3 class="summary-title">Order Summary</h3>
      <div class="item-count">{{ cart.length }} {{ cart.length === 1 ? 'item' : 'items' }}</div>
    </div>
    
    <div class="order-items">
      <div v-for="item in cart" :key="item.productId" class="order-item">
        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <!-- <span class="item-id">ID: {{ item.productId }}</span> -->
        </div>
        <div class="item-details">
          <span class="item-price">${{ item.price.toFixed(2) }}</span>
          <div class="quantity-control">
            <span class="item-multiplier">x</span>
            <span class="item-quantity">{{ item.quantity }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="total-row">
      <span class="total-label">Total</span>
      <span class="total-price">${{ totalPrice.toFixed(2) }}</span>
    </div>
    
    <div class="checkout-actions">
      <button class="confirm-btn" @click="goToOrderSuccessPage">
        <span>Confirm order</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
      <!-- <button class="continue-btn" @click="router.push('/shop')">
        Continue Shopping
      </button> -->
    </div>
  </div>
</template>

<style scoped>
body {
  background: #0d0d0d;
  color: #e0e0e0;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

.page-title {
  text-align: center;
  margin-top: 36px;
  font-size: 2.5rem;
  color: #ffffff;
  letter-spacing: -0.5px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 16px;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 3px;
}

.checkout-container {
  background: linear-gradient(145deg, #1a1a1a, #161616);
  max-width: 600px;
  margin: 40px auto 60px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 
              0 1px 8px rgba(255, 255, 255, 0.05);
  padding: 30px;
  border: 1px solid #2a2a2a;
  overflow: hidden;
}

.checkout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.summary-title {
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.item-count {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.order-items {
  margin-bottom: 24px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #2a2a2a;
  transition: background 0.2s;
}

.order-item:hover {
  background: rgba(99, 102, 241, 0.05);
  margin: 0 -16px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.item-id {
  color: #6b7280;
  font-size: 0.85rem;
  font-family: 'Courier New', monospace;
}

.item-details {
  display: flex;
  align-items: center;
  gap: 16px;
}

.item-price {
  color: #4ade80;
  font-weight: 700;
  font-size: 1.2rem;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 8px;
}

.item-multiplier {
  color: #9ca3af;
  font-size: 1rem;
}

.item-quantity {
  color: #fbbf24;
  font-weight: 700;
  font-size: 1.1rem;
  min-width: 24px;
  text-align: center;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: 10px;
  border-top: 2px solid #2a2a2a;
}

.total-label {
  font-size: 1.3rem;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.total-price {
  font-size: 1.8rem;
  font-weight: 800;
  color: #4ade80;
  letter-spacing: -0.5px;
}

.checkout-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;
}

.confirm-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.confirm-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.4);
}

.confirm-btn:active {
  transform: translateY(0);
}

.continue-btn {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  color: #94a3b8;
  background: transparent;
  border: 1px solid #334155;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.continue-btn:hover {
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.05);
  border-color: #475569;
}

@media (max-width: 640px) {
  .checkout-container {
    margin: 20px 16px 40px;
    padding: 20px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .order-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .item-details {
    width: 100%;
    justify-content: space-between;
  }
}
</style>