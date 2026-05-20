<template>
  <section class="bg-white py-16 sm:py-20" aria-labelledby="vision-heading">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <!-- Label -->
      <p class="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-3">
        Our Vision
      </p>

      <!-- Heading -->
      <h2
        id="vision-heading"
        class="text-3xl sm:text-4xl font-bold text-text-dark leading-tight"
      >
        Built for Measure Sustainability
      </h2>

      <!-- scenery.png — GO-GENIE truck + balloon + trees -->
      <div class="mt-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <img
          :src="visionImgSrc"
          alt="GO-GENIE delivery truck on a road with a green hot air balloon carrying a recycling symbol, surrounded by trees"
          class="w-full object-cover"
          style="max-height: 640px;"
        />
      </div>

      <!-- Body text -->
      <p class="mt-8 text-text-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
        At GO-GENIE®, sustainability starts with understanding your impact. We provide accurate,
        transparent carbon data and actionable insights so businesses can measure emissions,
        benchmark performance, and make informed decisions.
        Turning data into measurable, real-world impact.
      </p>

    </div>
  </section>
</template>

<script setup>
import { getAsset } from '@/composables/useAsset'
// scenery.png = the GO-GENIE truck + hot air balloon + trees scene
const visionImgSrc = getAsset('scenery.png')
</script>
