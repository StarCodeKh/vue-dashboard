<template>
    <div class="login-wrapper">
        <form class="login-card" @submit.prevent="login">
        <h2 class="title">🔐 Sign In</h2>

        <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input v-model="password" type="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" class="btn-login">Login</button>

        <p class="footer-text">
            Don’t have an account?
            <RouterLink to="/auth/register">Register</RouterLink>
        </p>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = () => {
  console.log('Login with', email.value, password.value)
  router.push('/')
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
    .login-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f1f5f9;
        min-height: 100vh;
        padding: 1rem;
        overflow: hidden;
    }

    .login-card {
        background: #fff;
        padding: 2.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        width: 100%;
        max-width: 400px;
    }

    .title {
        font-size: 1.8rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 2rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    label {
        font-weight: 500;
        display: block;
        margin-bottom: 0.5rem;
        color: #334155;
    }

    input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #dbeafe;
        border-radius: 6px;
        background-color: #f9fafb;
        font-size: 1rem;
        transition: border 0.2s ease;
        height: 48px;
        box-sizing: border-box;
        }

    input:focus {
    border-color: #2563eb;
    outline: none;
    background-color: #fff;
    }

    .btn-login {
        width: 100%;
        padding: 0.8rem;
        background-color: #2563eb;
        color: white;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s;
    }

    .btn-login:hover {
        background-color: #1d4ed8;
    }

    .footer-text {
        margin-top: 1.25rem;
        text-align: center;
        font-size: 0.95rem;
        color: #475569;
    }

    .footer-text a {
        color: #2563eb;
        text-decoration: none;
        margin-left: 0.25rem;
    }
</style>
