<template>
  <section class="bg-white py-16 sm:py-20" aria-labelledby="sustain-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading block -->
      <div class="text-center max-w-5xl mx-auto mb-14">
        <h2 id="sustain-heading" class="text-3xl sm:text-4xl font-bold text-text-dark leading-tight whitespace-nowrap">
          Sustainability That<span class="text-brand-blue"> Scales with Your Business</span>
        </h2>
        <p class="mt-4 text-text-muted text-base leading-relaxed">
          Reduce emissions, improve efficiency, and operate more responsibly with GO-GENIE®.
        </p>
      </div>

      <!-- 3-column illustration grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

        <!-- Col 1: Data-Driven Insights — visual_monitor enviromental impact.png -->
        <div class="flex flex-col items-center gap-4">
          <div class="w-64 h-64 flex items-center justify-center">
            <img
              :src="dataInsightsSrc"
              alt="Green dashboard card UI representing data-driven insights"
              class="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <h3 class="text-base font-semibold text-text-dark">Data-Driven Insights</h3>
          <p class="text-sm text-text-muted leading-relaxed max-w-xs">
            Make informed decisions with accurate carbon tracking data.
          </p>
        </div>

        <!-- Col 2: Scalable Solutions — visual_green fleet.png -->
        <div class="flex flex-col items-center gap-4">
          <div class="w-64 h-64 flex items-center justify-center">
            <img
              :src="greenFleetSrc"
              alt="3D blue electric delivery truck with a teal lightning bolt badge representing scalable solutions"
              class="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <h3 class="text-base font-semibold text-text-dark">Scalable Solutions</h3>
          <p class="text-sm text-text-muted leading-relaxed max-w-xs">
            Apply sustainability practices across your entire logistics network.
          </p>
        </div>

        <!-- Col 3: Real Impact — visual_environmental impact_1.png -->
        <div class="flex flex-col items-center gap-4">
          <div class="w-64 h-64 flex items-center justify-center">
            <img
              :src="realImpactSrc"
              alt="3D folder with charts and magnifying glass representing real environmental impact"
              class="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <h3 class="text-base font-semibold text-text-dark">Real Impact</h3>
          <p class="text-sm text-text-muted leading-relaxed max-w-xs">
            Reduce emissions while maintaining operational efficiency.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { getAsset } from '@/composables/useAsset'

// visual_monitor enviromental impact.png = green dashboard card UI
const dataInsightsSrc = getAsset('visual_monitor enviromental impact.png')

// visual_green fleet.png = blue electric delivery truck
const greenFleetSrc = getAsset('visual_green fleet.png')

// visual_environmental impact_1.png = teal folder with charts + magnifier
const realImpactSrc = getAsset('visual_environmental impact_1.png')
</script>
