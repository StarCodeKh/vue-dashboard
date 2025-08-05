<template>
    <div class="main-page">
        <div class="page-header">
            <h2 class="title">🕓 Recent Activity</h2>
            <p class="subtitle">Stay updated with your most recent actions.</p>
        </div>

        <div class="container">
            <div v-for="(activity, index) in activities" :key="index" class="activity-card">
                <div class="icon">
                    <span>{{ activity.icon }}</span>
                </div>
                <div class="details">
                    <div class="title">{{ activity.title }}</div>
                    <div class="time">{{ activity.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const activities = [
        { icon: '📁', title: 'Opened Folder "Invoices"', time: 'Just now' },
        { icon: '⚙️', title: 'Updated Settings', time: '10 minutes ago' },
        { icon: '📝', title: 'Created new theme config', time: '30 minutes ago' },
        { icon: '🔐', title: 'Logged in successfully', time: '1 hour ago' },
        { icon: '📊', title: 'Viewed Dashboard', time: 'Yesterday' }
    ]
</script>

<style scoped>

    .activity-card {
        display: flex;
        align-items: center;
        background-color: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem 1.25rem;
        transition: background-color 0.2s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    }

    .activity-card:hover {
        background-color: #f1f5f9;
    }

    .icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        color: #3b82f6;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 36px;
    }

    .details {
        flex-grow: 1;
    }

    .details .title {
        font-size: 1rem;
        font-weight: 500;
    }

    .details .time {
        font-size: 0.85rem;
        color: #64748b;
        margin-top: 0.25rem;
    }
</style>
