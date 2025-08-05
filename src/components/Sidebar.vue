<template>
    <aside :class="['sidebar', { collapsed }]">
        <!-- Sidebar header toggles collapse -->
        <div class="sidebar-header" @click="toggleSidebar">
            <span class="icon">⭐</span>
            <span v-if="!collapsed">StarCodeKh</span>
        </div>

        <nav class="nav-links">
            <!-- Dashboard Link -->
            <RouterLink to="/" class="nav-item" exact-active-class="active">
                <span class="icon">🏠</span>
                <span v-if="!collapsed">Dashboard</span>
            </RouterLink>

            <!-- Dynamic Sections with submenus -->
            <template v-for="(section, index) in menuSections" :key="index">
                <div class="nav-item parent-item" @click="toggleSubmenu(index)">
                    <span class="icon">{{ section.icon }}</span>
                    <span v-if="!collapsed">{{ section.label }}</span>
                    <span v-if="!collapsed" class="submenu-arrow">
                        {{ openSubmenus[index] ? '▾' : '▸' }}
                    </span>
                </div>

                <div v-if="openSubmenus[index] && !collapsed" class="submenu">
                    <RouterLink v-for="item in section.children" :key="item.label" :to="item.to" class="nav-sub-item" exact-active-class="active">
                        <span class="icon">{{ item.icon }}</span>
                        {{ item.label }}
                    </RouterLink>
                </div>
            </template>

            <!-- Settings Link -->
            <RouterLink to="/settings" class="nav-item" exact-active-class="active">
                <span class="icon">⚙️</span>
                <span v-if="!collapsed">Settings</span>
            </RouterLink>
        </nav>
    </aside>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { RouterLink, useRoute } from 'vue-router'

    const route = useRoute()
    const collapsed = ref(true)
    const openSubmenus = ref({})

    // Toggle sidebar collapse/expand
    const toggleSidebar = () => {
        collapsed.value = !collapsed.value
        if (collapsed.value) openSubmenus.value = {}
    }

    // Toggle submenu manually
    const toggleSubmenu = (index) => {
        if (collapsed.value) collapsed.value = false
        openSubmenus.value[index] = !openSubmenus.value[index]
    }

    // Menu config
    const menuSections = [
    {
        icon: '📁',
        label: 'Folders',
        children: [
        { icon: '🕒', label: 'Recent', to: '/folder/recent' },
        { icon: '📤', label: 'Shared', to: '/folder/shared' },
        ],
    },
    {
        icon: '🔐',
        label: 'Authentication',
        children: [
        { icon: '🔓', label: 'Login', to: '/auth/login' },
        { icon: '🆔', label: 'Sign Up', to: '/auth/register' },
        { icon: '🔒', label: 'Logout', to: '/auth/logout' },
        { icon: '🙍‍♂️', label: 'Profile', to: '/auth/profile' },
        { icon: '👥', label: 'Users', to: '/auth/users' },
        { icon: '🛡️', label: 'Security', to: '/auth/security' },
        { icon: '🧾', label: 'Privacy Policy', to: '/auth/privacy' },
        ],
    },
    ]

    // Auto-open submenu if current route matches a submenu item
    onMounted(() => {
        menuSections.forEach((section, index) => {
            if (section.children.some(child => route.path.startsWith(child.to))) {
                openSubmenus.value[index] = true
                collapsed.value = false
            }
        })
    })
</script>

<style scoped>
    .sidebar {
        width: 240px;
        background-color: #1e293b;
        color: #fff;
        height: 100vh;
        padding: 1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        transition: width 0.3s ease;
        overflow-y: auto;
    }
    .sidebar.collapsed {
        width: 80px;
    }

    .sidebar-header {
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.375rem;
        color: #cbd5e1;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .nav-item,
    .parent-item {
        color: #cbd5e1;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem;
        border-radius: 0.375rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
    }

    .nav-item:hover,
    .parent-item:hover {
        background-color: #334155;
        color: #ffffff;
    }

    .nav-item.active,
    .nav-sub-item.active {
        background-color: #475569;
        color: #ffffff;
        font-weight: 600;
    }

    .submenu {
        padding-left: 2.2rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .nav-sub-item {
        color: #cbd5e1;
        font-size: 0.9rem;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        border-radius: 0.375rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
    }

    .nav-sub-item:hover {
        background-color: #334155;
        color: #ffffff;
    }

    .icon {
        font-size: 1.2rem;
        min-width: 24px;
        text-align: center;
    }

    .submenu-arrow {
        margin-left: auto;
        font-size: 1.2rem;
        line-height: 1;
    }
</style>
