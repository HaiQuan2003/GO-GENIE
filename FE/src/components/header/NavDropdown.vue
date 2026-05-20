<template>
  <div
    class="relative"
    @mouseenter="open"
    @mouseleave="close"
  >
    <!-- Trigger -->
    <button
      class="flex items-center gap-1.5 text-white text-sm font-medium py-2 px-3
             hover:text-white/80 transition-colors duration-150 focus:outline-none"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
    >
      {{ label }}
      <svg
        class="w-3.5 h-3.5 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 12 12" fill="none"
        aria-hidden="true"
      >
        <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <!-- Dropdown Panel -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95 translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition ease-in duration-100"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 mt-3 bg-white rounded-2xl z-50 overflow-hidden"
        style="min-width: 280px; box-shadow: 0 8px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07);"
        role="menu"
      >
        <a
          v-for="item in items"
          :key="item.title"
          href="#"
          class="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer group"
          role="menuitem"
        >
          <!-- Image icon (Services / Solutions) -->
          <div class="flex-shrink-0 w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center"
               :class="item.icon ? 'bg-sky-50' : iconBg(item.iconType)">
            <img
              v-if="item.icon"
              :src="resolveIcon(item.icon)"
              :alt="item.title"
              class="w-9 h-9 object-contain"
            />
            <!-- SVG icons for non-image items -->
            <template v-else-if="item.iconType">
              <svg v-if="item.iconType === 'sparkle'" class="w-5 h-5" :class="iconColor(item.iconType)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="item.iconType === 'globe'" class="w-5 h-5" :class="iconColor(item.iconType)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="item.iconType === 'leaf'" class="w-5 h-5" :class="iconColor(item.iconType)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M17 8C8 10 5.9 16.17 3.82 19.34A1 1 0 0 0 4.82 21C7 20 9 19 11 17c2-2 3-4 3-7 0 0 2 1 3 3s1 5 1 5 2-3 2-6-1-7-3-9z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="item.iconType === 'newspaper'" class="w-5 h-5" :class="iconColor(item.iconType)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="item.iconType === 'headset'" class="w-5 h-5" :class="iconColor(item.iconType)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else-if="item.iconType === 'phone'" class="w-5 h-5" :class="iconColor(item.iconType)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </template>
          </div>

          <!-- Text -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-semibold text-gray-900 group-hover:text-brand-blue leading-tight">
              {{ item.title }}
            </p>
            <p class="text-xs text-gray-400 mt-0.5 leading-snug">
              {{ item.description }}
            </p>
          </div>
        </a>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAsset } from '@/composables/useAsset'

defineProps({
  label: { type: String, required: true },
  items: { type: Array, required: true }
})

const isOpen = ref(false)
let closeTimer = null

function open() {
  clearTimeout(closeTimer)
  isOpen.value = true
}
function close() {
  closeTimer = setTimeout(() => { isOpen.value = false }, 120)
}
function resolveIcon(filename) {
  return getAsset(filename)
}

// Icon background colours per type
const bgMap = {
  sparkle:   'bg-purple-50',
  globe:     'bg-yellow-50',
  leaf:      'bg-green-50',
  newspaper: 'bg-indigo-50',
  headset:   'bg-blue-50',
  phone:     'bg-teal-50',
}
const colorMap = {
  sparkle:   'text-purple-500',
  globe:     'text-yellow-500',
  leaf:      'text-green-500',
  newspaper: 'text-indigo-500',
  headset:   'text-brand-blue',
  phone:     'text-brand-teal',
}
function iconBg(type)    { return bgMap[type]    ?? 'bg-gray-50' }
function iconColor(type) { return colorMap[type] ?? 'text-gray-500' }
</script>
