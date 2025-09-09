<script setup>
    import { useRouter } from 'vue-router';
    import { cart } from '@/store';
    let router = useRouter()
    function goToHome(){
        router.push("/")
    }
    cart.value = [];
</script>

<template>
  <div class="page">
    <h1>Thank you for purchasing</h1>
    <p>Our team will get in touch with you soon...</p>
    <button @click="goToHome">Continue Shopping</button>
  </div>
</template>


<style scoped>
   .page {
  background-color: #121212;
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 32px;
  color: #4caf50;
  margin-bottom: 16px;
}

p {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 30px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffeb3b;
  color: #000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #fdd835;
}

</style>