import { createRouter, createWebHistory } from 'vue-router'

// Layout
import DefaultLayout from '../layouts/DefaultLayout.vue'

// Main Views
import Dashboard from '../views/Dashboard.vue'
import Folder from '../components/Folder.vue'
import Recent from '../views/folder/Recent.vue'
import Shared from '../views/folder/Shared.vue'
import Settings from '../views/Settings.vue'

// Auth Views
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Logout from '../views/auth/Logout.vue'
import Users from '../views/auth/Users.vue'
import Security from '../views/auth/Security.vue'
import Privacy from '../views/auth/Privacy.vue'
import Profile from '../views/auth/Profile.vue'

const routes = [
    // Layout-wrapped routes (with sidebar + topbar)
    {
        path: '/',
        component: DefaultLayout,
        children: [
        {
            path: '',
            name: 'dashboard',
            component: Dashboard,
            meta: { title: '📊 Dashboard' }
        },
        {
            path: 'folders',
            name: 'folders',
            component: Folder,
            meta: { title: '📁 Folder' }
        },
        {
            path: 'folder/recent',
            name: 'recent',
            component: Recent,
            meta: { title: '🕓 Recent' }
        },
        {
            path: 'folder/shared',
            name: 'shared',
            component: Shared,
            meta: { title: '📤 Shared' }
        },
        {
            path: 'settings',
            name: 'settings',
            component: Settings,
            meta: { title: '⚙️ Settings' }
        }
        ]
    },

    // Auth layout-wrapped routes (sidebar still applies)
    {
        path: '/auth',
        component: DefaultLayout,
        children: [
        {
            path: 'profile',
            name: 'profile',
            component: Profile,
            meta: { title: '👤 Profile' }
        },
        {
            path: 'users',
            name: 'users',
            component: Users,
            meta: { title: '🔒 Users' }
        },
        {
            path: 'security',
            name: 'security',
            component: Security,
            meta: { title: '🛡️ Security' }
        },
        {
            path: 'privacy',
            name: 'privacy',
            component: Privacy,
            meta: { title: '🔒 Privacy' }
        }
        ]
    },

    // Public auth routes (no sidebar)
    {
        path: '/auth/login',
        name: 'login',
        component: Login,
        meta: { title: '🔐 Login' }
    },
    {
        path: '/auth/register',
        name: 'register',
        component: Register,
        meta: { title: '📝 Register' }
    },
    {
        path: '/auth/logout',
        name: 'logout',
        component: Logout,
        meta: { title: '🔒 Logout' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Update document title based on route meta title
router.afterEach((to) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta?.title)
    document.title = nearestWithTitle ? nearestWithTitle.meta.title : 'StarCode Kh'
})

export default router
