<template>
  <section class="bg-brand-light py-16 sm:py-20" aria-labelledby="reporting-heading">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading block -->
      <div class="text-center mb-12">
        <h2 id="reporting-heading" class="text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
          Simplify Sustainability
          <span class="block text-brand-blue">Reporting and Compliance</span>
        </h2>
        <p class="mt-4 text-text-muted text-base leading-relaxed">
          Track progress, generate reports and meet sustainability standards with ease.
        </p>
      </div>

      <!-- Stacked horizontal cards -->
      <div class="flex flex-col gap-5">

        <!-- Card 1: Track Progress — masterAgent_laptop.png -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-6 overflow-hidden">
          <div class="flex-1 min-w-0 text-center sm:text-left">
            <h3 class="text-lg font-semibold text-text-dark">Track Progress</h3>
            <p class="mt-2 text-sm text-text-muted leading-relaxed max-w-sm">
              Monitor your progress towards sustainability and certification targets.
            </p>
          </div>
          <div class="flex-shrink-0 w-56 h-48 sm:w-72 sm:h-60 flex items-center justify-center sm:justify-end">
            <img
              :src="trackProgressSrc"
              alt="3D character waving while holding a laptop, representing progress tracking"
              class="h-full object-contain"
            />
          </div>
        </div>

        <!-- Card 2: Generate Reports — upscale_image[Upscaled2].png -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-6 overflow-hidden">
          <div class="flex-1 min-w-0 text-center sm:text-left">
            <h3 class="text-lg font-semibold text-text-dark">Generate Reports</h3>
            <p class="mt-2 text-sm text-text-muted leading-relaxed max-w-sm">
              Create detailed reports for audits, compliance, and internal tracking.
            </p>
          </div>
          <div class="flex-shrink-0 w-56 h-48 sm:w-72 sm:h-60 flex items-center justify-center sm:justify-end">
            <img
              :src="generateReportsSrc"
              alt="3D character representing report generation"
              class="h-full object-contain"
            />
          </div>
        </div>

        <!-- Card 3: Showcase Achievements — upscale_image[Upscaled3].png -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-6 overflow-hidden">
          <div class="flex-1 min-w-0 text-center sm:text-left">
            <h3 class="text-lg font-semibold text-text-dark">Showcase Achievements</h3>
            <p class="mt-2 text-sm text-text-muted leading-relaxed max-w-sm">
              Highlight your sustainability efforts and build trust with customers.
            </p>
          </div>
          <div class="flex-shrink-0 w-56 h-48 sm:w-72 sm:h-60 flex items-center justify-center sm:justify-end">
            <img
              :src="showcaseSrc"
              alt="3D globe with tree growing on top, representing environmental achievements"
              class="h-full object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { getAsset } from '@/composables/useAsset'

// masterAgent_laptop.png = 3D man waving with laptop
const trackProgressSrc = getAsset('masterAgent_laptop.png')

// upscale_image[Upscaled2].png = Generate Reports image
const generateReportsSrc = getAsset('upscale_image[Upscaled2].png')

// upscale_image[Upscaled3].png = 3D green earth + tree + clouds
const showcaseSrc = getAsset('upscale_image[Upscaled3].png')
</script>
