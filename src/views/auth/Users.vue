<template>
  <div class="main-page">
    <!-- Page Header -->
    <div class="page-header">
      <h2 class="title">👥 User Listing</h2>
      <p class="subtitle text-gray-600">View and manage all registered users</p>
    </div>

    <!-- Users Table -->
    <EasyDataTable
      :headers="headers"
      :items="users"
      :rows-per-page="5"
      table-class="rounded-xl shadow bg-white"
    >
      <template #item-status="{ status }">
        <span
          class="px-2 py-1 rounded-full text-sm font-medium"
          :class="status === 'active'
            ? 'bg-green-100 text-green-700'
            : 'bg-red-100 text-red-700'"
        >
          {{ status }}
        </span>
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup>
import EasyDataTable from 'vue3-easy-data-table'

const headers = [
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Status', value: 'status' },
]

const users = [
  { id: 1, name: 'StarCode kh', email: 'starcodekh@example.com', status: 'active' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', status: 'inactive' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'active' },
  { id: 4, name: 'Soeng Souy', email: 'soengsouy@example.com', status: 'active' },
  { id: 5, name: 'Navy Chan', email: 'navychan@example.com', status: 'active' },
]
</script>
