<template>
  <button
    class="flex items-center gap-1.5 text-white
           hover:opacity-80 transition-opacity duration-150 focus:outline-none"
    aria-label="Switch language"
  >
    <!-- Flag image -->
    <img
      :src="flagSrc"
      alt="English"
      class="w-7 h-5 object-cover rounded-sm"
      @error="onImgError"
    />
    <!-- Chevron -->
    <svg
      class="w-3 h-3 text-white"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup>
// Images in /public/img/ are served at runtime by Vite — no build-time resolution.
// Place flag-en.png in /FE/public/img/ when you have the asset.
const flagSrc = '/img/flag-en.svg'

function onImgError(e) {
  e.target.style.display = 'none'
}
</script>
