<template>
    <div class="main-page">
        <div class="page-header">
            <h1 class="title">📤 Shared Files</h1>
            <p class="subtitle">Quick access to items you’ve shared with others.</p>
        </div>

        <div class="shared-list">
            <div v-for="(item, index) in sharedItems" :key="index" class="shared-card">
                <div class="icon">
                    <span>{{ item.icon }}</span>
                </div>
                <div class="info">
                    <div class="name">{{ item.name }}</div>
                    <div class="shared-to">Shared with: {{ item.sharedWith }}</div>
                </div>
                <div class="time">
                    {{ item.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const sharedItems = [
        { icon: '📄', name: 'Report_Q3.pdf', sharedWith: 'Finance Team', time: '2 hours ago' },
        { icon: '🖼️', name: 'Brand_Logo.png', sharedWith: 'Marketing', time: 'Today' },
        { icon: '📁', name: 'Project Docs', sharedWith: 'All Members', time: 'Yesterday' },
        { icon: '📝', name: 'Meeting Notes.txt', sharedWith: 'HR', time: '2 days ago' }
    ]
</script>

<style scoped>

    .shared-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .shared-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem 1.25rem;
        transition: background-color 0.2s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    }

    .shared-card:hover {
        background-color: #f1f5f9;
    }

    .icon {
        font-size: 1.5rem;
        color: #3b82f6;
        margin-right: 1rem;
    }

    .info {
        flex-grow: 1;
    }

    .info .name {
        font-size: 1rem;
        font-weight: 500;
    }

    .info .shared-to {
        font-size: 0.85rem;
        color: #64748b;
    }

    .time {
        font-size: 0.85rem;
        color: #94a3b8;
        min-width: 90px;
        text-align: right;
    }
</style>
