<template>
    <div class="main-page">
        <!-- Header -->
        <div class="page-header">
            <h2 class="title">⚙️ Settings</h2>
            <p class="subtitle">Manage your account preferences</p>
        </div>

        <!-- Tabs -->
        <div class="tabs">
            <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab-button', { active: currentTab === tab }]"
                @click="currentTab = tab"
            >
                {{ tab }}
            </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content card">
            <!-- Profile Tab -->
            <div v-if="currentTab === 'Profile'">
                <h3>👤 Profile Settings</h3>
                <form @submit.prevent="saveProfile">
                <input v-model="form.name" type="text" placeholder="Your Name" />
                <input v-model="form.email" type="email" placeholder="Your Email" />
                <button type="submit">Save Profile</button>
                </form>
            </div>

            <!-- Security Tab -->
            <div v-else-if="currentTab === 'Security'">
                <h3>🔒 Security</h3>
                <form @submit.prevent="saveSecurity">
                <input v-model="form.password" type="password" placeholder="New Password" />
                <input v-model="form.confirmPassword" type="password" placeholder="Confirm Password" />
                <button type="submit">Update Password</button>
                </form>
            </div>

            <!-- Notifications Tab -->
            <div v-else-if="currentTab === 'Notifications'">
                <h3>🔔 Notification Preferences</h3>
                <label class="checkbox">
                <input type="checkbox" v-model="form.notifications" />
                Enable Email Notifications
                </label>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const tabs = ['Profile', 'Security', 'Notifications']
    const currentTab = ref('Profile')

    const form = ref({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    notifications: true
    })

    const saveProfile = () => {
        alert(`Saved profile for ${form.value.name}`)
    }

    const saveSecurity = () => {
        if (form.value.password !== form.value.confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        alert('Password updated successfully!')
    }
</script>

<style scoped>

    .tab-button {
        background: #e5e7eb;
        border: none;
        padding: 0.5rem 1.25rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s ease;
        color: #111827;
    }

    .tab-button.active {
        background: #3b82f6;
        color: #fff;
    }

    /* Forms */
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    button {
        align-self: flex-start;
        padding: 0.5rem 1.5rem;
        background: #3b82f6;
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    button:hover {
        background: #2563eb;
    }

    /* Checkbox */
    .checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 500;
        color: #333;
    }
</style>
