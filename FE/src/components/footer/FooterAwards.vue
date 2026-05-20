<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">

      <!-- Awards row: text left, logos right -->
      <div class="flex flex-col lg:flex-row lg:items-start gap-8">

        <!-- Left: text lists -->
        <div class="flex-shrink-0 lg:w-56">
          <p class="text-sm font-bold text-text-dark mb-2">Awards and Recognition</p>
          <ul class="text-xs text-text-muted space-y-1 mb-5">
            <li>Brands For Good 2025 – Honouree</li>
            <li>SPBA 2025 – Promising Brands</li>
            <li>SPBA 2025 – Transformation Efforts</li>
          </ul>

          <p class="text-sm font-bold text-text-dark mb-2">Business Chambers</p>
          <ul class="text-xs text-text-muted space-y-1">
            <li>Member of Singapore Chinese Chamber of Commerce &amp; Industry (SCCCI)</li>
            <li>Member of Singapore Business Federation (SBF)</li>
          </ul>
        </div>

        <!-- Right: logos row -->
        <div class="flex flex-wrap items-center gap-6 lg:gap-10 lg:pl-8">

          <!-- SPBA 2025 award -->
          <img
            :src="spbaSrc"
            alt="Singapore Prestige Brand Award 2025 — Winner Transformation Efforts, SPBA Promising Brands"
            class="h-28 w-auto object-contain"
          />

          <!-- Brands for Good -->
          <img
            :src="brandsForGoodSrc"
            alt="Brands for Good"
            class="h-16 w-auto object-contain"
          />

          <!-- SCCCI -->
          <img
            :src="scccISrc"
            alt="Singapore Chinese Chamber of Commerce and Industry"
            class="h-16 w-auto object-contain"
          />

          <!-- SBF — styled text (no image provided) -->
          <span class="text-3xl font-black tracking-tight" style="color:#2E86C1;">SBF.</span>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { getAsset } from '@/composables/useAsset'

const spbaSrc          = getAsset('transformation efforts - promising brands - gold.png')
const brandsForGoodSrc = getAsset('brandsforgood.png')
const scccISrc         = getAsset('logo_vertical.png')
</script>
