<template>
  <div class="login-container">
    <h1>User Login</h1>

    <form class="login-form" @submit.prevent="handlelogin">
      <label>Email</label>
      <input v-model="email" type="email" placeholder="Enter your mail id here..." />

      <label>Password</label>
      <input v-model="password" type="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
    </form>

    <p class="signup-text">
      Not Registered Yet? 
      <span class="signup-link" @click="router.push('/signup')">SignUp</span> here
    </p>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/Users'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useUsersStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const handlelogin = () => {
  const success = store.login(email.value, password.value)
  if (success) {
    router.push('/')
  } else {
    error.value = "Invalid credentials! Redirecting to SignUp page..."
    setTimeout(() => {
      router.push('/signup')
    }, 2000)
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 20px;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  font-family: Arial, sans-serif;
  color : black;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  text-align: left;
  font-size: 14px;
  color: #444;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #0056b3;
}

.signup-text {
  margin-top: 15px;
  font-size: 14px;
}

.signup-link {
  color: #007bff;
  font-weight: bold;
  cursor: pointer;
}

.signup-link:hover {
  text-decoration: underline;
}

.error {
  margin-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
