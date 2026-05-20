<template>
  <section class="bg-white py-16 sm:py-20" aria-labelledby="cta-heading">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- ecosystem_sep2025.png — isometric city map with GO-GENIE tower -->
      <div class="flex justify-center mb-2">
        <img
          :src="cityMapSrc"
          alt="Isometric GO-GENIE logistics city map showing interconnected warehouses, delivery hubs, and transport routes"
          class="w-full max-w-2xl object-contain"
          style="max-height: 380px;"
        />
      </div>

      <!-- Text + CTA card -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10 text-center -mt-6 relative z-10">
        <h2 id="cta-heading" class="text-2xl sm:text-3xl font-bold text-text-dark leading-tight">
          Start Building a More Sustainable
          <span class="block text-brand-blue">Logistics Operation</span>
        </h2>
        <p class="mt-4 text-text-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Take control of your emissions, meet sustainability goals, and create measurable impact.
        </p>
        <p class="mt-1 text-text-muted text-sm font-medium">
          GO SMART, GO GREEN, GO-GENIE®
        </p>
        <div class="mt-8">
          <a
            href="#"
            class="inline-flex items-center gap-2 bg-brand-blue text-white
                   px-8 py-3 rounded-md text-sm font-medium
                   hover:bg-brand-blue-dark transition-colors duration-200"
            aria-label="Talk to our team"
          >
            Talk To Our Team
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { getAsset } from '@/composables/useAsset'
// ecosystem_sep2025.png = dark isometric city map with GO-GENIE tower
const cityMapSrc = getAsset('ecosystem_sep2025.png')
</script>
