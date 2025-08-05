<template>
    <div class="logout-page">
        <div class="logout-box">
            <h2>🔒 Logging out...</h2>
            <p>Please wait while we sign you out.</p>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()

    onMounted(async () => {
    // Clear storage
    localStorage.clear()
    sessionStorage.clear()

    // Redirect to login after short delay
    setTimeout(() => {
        router.replace('/auth/login')
    }, 1200)
    })
</script>

<style scoped>
    .logout-page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f8fafc;
    }

    .logout-box {
        text-align: center;
        background: white;
        padding: 2rem 2.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
        max-width: 420px;
    }

    .logout-box h2 {
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
        color: #1f2937;
    }

    .logout-box p {
        color: #64748b;
        font-size: 1rem;
    }
</style>
