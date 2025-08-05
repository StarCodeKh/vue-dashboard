<template>
    <div class="container">
        <!-- Header -->
        <div class="page-header">
            <h2 class="title">📊 Welcome back, Admin!</h2>
            <p class="subtitle">{{ today }}</p>
        </div>

        <!-- Stats Cards Grid -->
        <div class="stats-grid">
            <div class="stat-card">
                <h3>👥 Users</h3>
                <p>1,240</p>
            </div>
            <div class="stat-card">
                <h3>🛒 Sales</h3>
                <p>328</p>
            </div>
            <div class="stat-card">
                <h3>💰 Revenue</h3>
                <p>$43,520</p>
            </div>
            <div class="stat-card">
                <h3>📋 Tasks</h3>
                <p>12</p>
            </div>
            <div class="stat-card">
                <h3>✉️ Messages</h3>
                <p>34</p>
            </div>
            <div class="stat-card">
                <h3>👀 Visitors</h3>
                <p>5,678</p>
            </div>
        </div>

        <!-- Chart Section -->
        <section class="dashboard-section">
            <h3>📈 Monthly Sales</h3>
            <div class="chart-placeholder">[Chart Placeholder]</div>
        </section>

        <!-- Task Progress -->
        <section class="dashboard-section">
            <h3>✅ Task Progress</h3>
            <div class="progress-bar">
                <div class="progress-fill" :style="{ width: '65%' }">65%</div>
            </div>
        </section>

        <!-- Recent Activity Table -->
        <section class="dashboard-section card">
            <h3>📌 Recent Activity</h3>
            <div class="table-responsive">
                <input type="text" v-model="search" placeholder="Search" class="search-input" />
                <EasyDataTable :headers="headers" :items="filteredItems" :sortable="true" rows-per-page="5" table-class="custom-activity-table" />
            </div>
        </section>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import EasyDataTable from 'vue3-easy-data-table'
    import 'vue3-easy-data-table/dist/style.css'

    const today = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    const headers = [
        { text: 'User', value: 'user', sortable: true },
        { text: 'Action', value: 'action', sortable: true },
        { text: 'Time', value: 'time', sortable: true }
    ]

    const items = ref([
        { user: 'Alice', action: 'Created new order', time: '2 hours ago' },
        { user: 'Bob', action: 'Updated profile', time: '5 hours ago' },
        { user: 'Jane', action: 'Completed a task', time: '1 day ago' },
        { user: 'Mark', action: 'Deleted a file', time: '3 days ago' },
        { user: 'Lina', action: 'Uploaded document', time: '4 days ago' },
        { user: 'Tom', action: 'Reset password', time: '5 days ago' }
    ])

    const search = ref('')

    const filteredItems = computed(() => {
    if (!search.value.trim()) {
        return items.value
    }
    const s = search.value.toLowerCase()
    return items.value.filter(
        (item) =>
        item.user.toLowerCase().includes(s) ||
        item.action.toLowerCase().includes(s) ||
        item.time.toLowerCase().includes(s)
    )
    })
</script>

<style scoped>
    /* Stats Cards Grid */
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .stat-card {
        background: #fff;
        border-radius: 8px;
        box-shadow:
            0 1.5px 3px rgba(0, 0, 0, 0.06),
            0 6px 12px rgba(0, 0, 0, 0.1);
        padding: 1rem 1.25rem;
        text-align: center;
        user-select: none;
        transition: transform 0.2s ease;
    }

    .stat-card:hover {
        transform: translateY(-5px);
    }

    .stat-card h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #444;
        font-weight: 600;
    }

    .stat-card p {
        font-size: 1.5rem;
        font-weight: 700;
        color: #111;
    }

    /* Sections */
    .dashboard-section {
        margin-top: 2rem;
        user-select: none;
    }

    .dashboard-section h3 {
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: #222;
    }

    /* Chart Placeholder */
    .chart-placeholder {
        background: #e9efff;
        height: 200px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #64748b;
        font-style: italic;
        user-select: none;
    }

    /* Progress Bar */
    .progress-bar {
        background: #e0e7ff;
        height: 28px;
        border-radius: 8px;
        overflow: hidden;
        margin-top: 0.5rem;
        width: 100%;
        max-width: 400px;
        user-select: none;
    }

    .progress-fill {
        height: 100%;
        background: #3b82f6;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        line-height: 28px;
        border-radius: 8px;
        transition: width 0.5s ease;
    }

    /* Card container for table */
    .card {
        background: #ffffff;
        border-radius: 8px;
        padding: 2rem;
    }

    /* Search input modern style */
    .search-input {
        width: 100%;
        max-width: 220px;
        padding: 0.5rem 1rem;
        margin-bottom: 1.5rem;
        background: none;
        border: 1px solid #d2d6da;
        border-radius: .375rem;
        line-height: 1.3;
    }

    .search-input:focus {
        outline: none;
        border-color: #3b82f6;
    }

    /* Responsive horizontal scroll wrapper */
    .table-responsive {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* smooth scroll on iOS */
        border-radius: 8px;
        box-shadow:0 2px 4px rgba(0,0,0,0.05);
        background: white;
        padding: 0.5rem;
        margin-top: 1rem;
    }

    /* Table tweaks */
    .custom-activity-table table {
        min-width: 600px; /* prevent shrinking on small screens */
        border-collapse: separate !important; /* keep border-radius if any */
    }

    /* Table rows */
    .custom-activity-table tbody tr {
        transition: background-color 0.25s ease;
    }

    .custom-activity-table tbody tr:hover {
        background-color: #d0e2ff;
        cursor: pointer;
    }

    /* Responsive adjustments */
    @media (max-width: 900px) {
        .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }

        .progress-bar {
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        .dashboard-container {
            padding: 1rem;
        }

        .stat-card h3 {
            font-size: 0.9rem;
        }

        .stat-card p {
            font-size: 1.25rem;
        }

        .search-input {
            max-width: 100%;
        }
    }
</style>
