<template>
  <section
    class="relative overflow-hidden"
    style="background: linear-gradient(160deg, #1a6fa8 0%, #2e8fc5 35%, #5ab4d6 65%, #a8d8ea 100%);"
    aria-label="Hero section"
  >
    <!-- ── Text Content ── -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4 text-center">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
        Measure and Reduce Your Logistics Carbon Footprint
      </h1>
      <p class="mt-4 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
        Track emissions, gain real-time insights, and make smarter, more sustainable logistics decisions.
      </p>

      <!-- CTA Button -->
      <div class="mt-8">
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30
                 border border-white/60 text-white font-medium text-sm
                 px-6 py-3 rounded-full backdrop-blur-sm
                 transition-all duration-200"
          aria-label="Explore sustainability solutions"
        >
          Explore Sustainability Solutions
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- ── Isometric Buildings (ecosystem_horizontal.png) ── -->
    <div class="relative z-10 w-full mt-6 pb-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          :src="buildingsSrc"
          alt="Isometric logistics city illustration showing warehouses, delivery hubs, and transport nodes"
          class="w-full object-contain object-bottom"
          style="max-height: 660px;"
        />
      </div>
    </div>

    <!-- ── Bottom fade into next section ── -->
    <div
      class="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
      style="background: linear-gradient(to bottom, transparent, #f0f8ff);"
      aria-hidden="true"
    ></div>
  </section>
</template>

<script setup>
import { getAsset } from '@/composables/useAsset'
const buildingsSrc = getAsset('ecosystem_horizontal.png')
</script>
