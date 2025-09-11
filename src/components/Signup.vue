<template>
  <div class="signup-container">
    <h2>Sign Up</h2>

    <form @submit.prevent="handleSignup" class="signup-form">
      <label>Name</label>
      <input v-model="name" type="text" placeholder="Enter your name" required />

      <label>Email</label>
      <input v-model="email" type="email" placeholder="Enter your email" required />

      <label>Address</label>
      <input v-model="address" type="text" placeholder="Enter your address" required />

      <label>Phone Number</label>
      <input v-model="phoneNumber" type="number" placeholder="Enter your phone number" required />

      <label>Password</label>
      <input v-model="password" type="password" placeholder="Enter a password" required />

      <button type="submit">Sign Up</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/Users'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useUsersStore()
const name = ref('')
const email = ref('')
const password = ref('')
const address = ref('')
const phoneNumber = ref('')
const router = useRouter()
const error = ref('')

const handleSignup = () => {
  const result = store.signup(
    name.value,
    email.value,
    password.value,
    address.value,
    phoneNumber.value
  )

  if (result.success) {
    console.log("store after signup success:", store)
    setTimeout(() => {
    router.push('/register')     
    }, 2000);
    
  } else {
    error.value = result.message
  }
}
</script>

<style scoped>
.signup-container {
  max-width: 420px;
  margin: 60px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

label {
  font-size: 14px;
  color: #555;
  font-weight: 500;
  text-align: left;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  transition: border 0.2s;
}

input:focus {
  border-color: #007bff;
}

button {
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}

.error {
  color: red;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
}
</style>
