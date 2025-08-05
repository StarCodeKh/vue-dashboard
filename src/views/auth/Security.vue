<template>
    <div class="main-page">
        <!-- Page Header -->
        <div class="page-header">
            <h2 class="title">🛡️ Security Settings</h2>
            <p class="subtitle">Manage user roles, permissions, and access control policies.</p>
        </div>

        <!-- Roles Section -->
        <div class="section mb-6">
            <h3 class="text-lg font-semibold text-gray-700 mb-3">User Roles</h3>
            <ul class="list-disc pl-5 text-gray-600">
                <li>Admin - Full access to all modules.</li>
                <li>Editor - Can modify content but has limited system access.</li>
                <li>Viewer - Read-only access to data.</li>
            </ul>
        </div>

        <!-- Permissions Table -->
        <div class="section bg-white rounded-xl shadow p-4">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">Permission Matrix</h3>
            <table class="min-w-full text-sm text-left text-gray-700">
                <thead>
                <tr class="bg-gray-50">
                    <th class="py-2 px-4">Module</th>
                    <th class="py-2 px-4">Admin</th>
                    <th class="py-2 px-4">Editor</th>
                    <th class="py-2 px-4">Viewer</th>
                </tr>
                </thead>
                <tbody>
                <tr class="border-b">
                    <td class="py-2 px-4">User Management</td>
                    <td class="py-2 px-4 text-green-600 font-bold">✔</td>
                    <td class="py-2 px-4 text-red-500 font-bold">✘</td>
                    <td class="py-2 px-4 text-red-500 font-bold">✘</td>
                </tr>
                <tr class="border-b">
                    <td class="py-2 px-4">Content Editing</td>
                    <td class="py-2 px-4 text-green-600 font-bold">✔</td>
                    <td class="py-2 px-4 text-green-600 font-bold">✔</td>
                    <td class="py-2 px-4 text-red-500 font-bold">✘</td>
                </tr>
                <tr>
                    <td class="py-2 px-4">View Reports</td>
                    <td class="py-2 px-4 text-green-600 font-bold">✔</td>
                    <td class="py-2 px-4 text-green-600 font-bold">✔</td>
                    <td class="py-2 px-4 text-green-600 font-bold">✔</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .section {
        margin-bottom: 1.5rem;
    }

    .section h3 {
        font-size: 1.125rem;
        font-weight: 600;
        color: #374151;
        margin-bottom: 0.75rem;
    }

    .section ul {
        list-style-type: disc;
        padding-left: 1.25rem;
        color: #4b5563;
        line-height: 1.6;
        margin: 0;
    }

    .section.bg-white {
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 1rem;
    }

    .section.bg-white table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
        color: #374151;
    }

    .section.bg-white thead tr {
        background-color: #f9fafb;
        border-bottom: 1px solid #d1d5db; 
    }

    .section.bg-white th {
        padding: 0.5rem 1rem;
        text-align: left;
        font-weight: 600;
    }

    .section.bg-white tbody tr {
        border-bottom: 1px solid #e5e7eb;
        transition: background-color 0.2s ease;
    }

    .section.bg-white tbody tr:last-child {
        border-bottom: none;
    }

    .section.bg-white tbody tr:hover {
        background-color: #f3f4f6;
    }

    .section.bg-white td {
        padding: 0.5rem 1rem;
    }

    .text-green-600 {
        color: #16a34a;
        font-weight: 700;
        font-size: 1.25rem;
    }

    .text-red-500 {
        color: #ef4444;
        font-weight: 700;
        font-size: 1.25rem;
    }

</style>