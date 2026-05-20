<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <HomePage />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import HomePage from '@/views/HomePage.vue'
</script>
