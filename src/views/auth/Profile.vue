<template>
    <div class="main-page">
        <!-- Header -->
        <div class="page-header">
            <h2 class="title">👤 Profile</h2>
            <p class="subtitle">Manage your personal information and activity</p>
        </div>

        <!-- Tabs -->
        <div class="tabs">
            <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]" @click="currentTab = tab">
                {{ tab }}
            </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content card">
            <!-- Overview -->
            <div v-if="currentTab === 'Overview'">
                <h3>📄 Overview</h3>
                <div class="info-group">
                    <label>Full Name</label>
                    <p>{{ user.name }}</p>
                </div>
                <div class="info-group">
                    <label>Email</label>
                    <p>{{ user.email }}</p>
                </div>
            </div>

            <!-- Edit Profile -->
            <div v-else-if="currentTab === 'Edit Profile'">
                <h3>✏️ Edit Profile</h3>
                <form @submit.prevent="updateProfile">
                    <input v-model="form.name" type="text" placeholder="Your Name" />
                    <input v-model="form.email" type="email" placeholder="Your Email" />
                    <button type="submit">Save Changes</button>
                </form>
            </div>

            <!-- Activity -->
            <div v-else-if="currentTab === 'Activity'">
                <h3>📊 Recent Activity</h3>
                <ul class="activity-list">
                    <li v-for="(log, index) in activity" :key="index">• {{ log }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const tabs = ['Overview', 'Edit Profile', 'Activity']
    const currentTab = ref('Overview')

    const user = ref({
    name: 'StarCode Kh',
    email: 'starcodekh@example.com',
    })

    const form = ref({ ...user.value })

    const updateProfile = () => {
        user.value = { ...form.value }
        currentTab.value = 'Overview'
        alert('Profile updated!')
    }

    const activity = ref([
        'Logged in from Chrome',
        'Updated password',
        'Enabled notifications',
    ])
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

    /* Card */
    .card {
        background: #fff;
        padding: 1rem;
        border-radius: 8px;
        box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.05),
            0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Forms */
    form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
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

    /* Display Info */
    .info-group {
        margin-bottom: 1rem;
    }

    .info-group label {
        font-weight: 600;
        display: block;
        margin-bottom: 0.5rem;
        color: #334155;
    }

    .info-group p {
        background-color: #f9fafb;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        border: 1px solid #dbeafe;
        color: #0f172a;
    }

    /* Activity */
    .activity-list {
        padding-left: 1rem;
        color: #444;
        font-size: 0.95rem;
        list-style: none;
    }
</style>


