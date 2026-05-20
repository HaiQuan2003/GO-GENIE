<template>
  <section class="bg-brand-light py-16 sm:py-20" aria-labelledby="carbon-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Heading block -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 id="carbon-heading" class="text-3xl sm:text-4xl font-bold text-text-dark leading-tight">
          Real-Time Carbon Tracking
          <span class="block text-brand-blue">for Every Delivery</span>
        </h2>
        <p class="mt-4 text-text-muted text-base leading-relaxed">
          Monitor emissions, optimise routes, and improve sustainability across your logistics operations.
        </p>
      </div>

      <!-- 3-card grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

        <!-- Card 1: Optimise Delivery Routes -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
          <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
            <!-- Lightning bolt icon (inline SVG — simple icon, not a complex illustration) -->
            <svg class="w-6 h-6 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M13 2L4.5 13.5H12L11 22L19.5 10.5H12L13 2Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 class="text-base font-semibold text-text-dark">Optimise Delivery Routes</h3>
            <p class="mt-1.5 text-sm text-text-muted leading-relaxed">
              Reduce emissions by optimising routes and improving delivery efficiency.
            </p>
          </div>
        </div>

        <!-- Card 2: Monitor Environmental Impact — SVG icon only, no image -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
          <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
            <svg class="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div>
            <h3 class="text-base font-semibold text-text-dark">Monitor Environmental Impact</h3>
            <p class="mt-1.5 text-sm text-text-muted leading-relaxed">
              Track carbon emissions across shipments with real-time insights.
            </p>
          </div>
        </div>

        <!-- Card 3: Achieve Sustainability Goals -->
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
          <div class="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
            <!-- House/goal icon -->
            <svg class="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M3 9.5L12 3L21 9.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V9.5Z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 class="text-base font-semibold text-text-dark">Achieve Sustainability Goals</h3>
            <p class="mt-1.5 text-sm text-text-muted leading-relaxed">
              Set targets and measure progress toward your sustainability objectives.
            </p>
          </div>
        </div>

      </div>

      <!-- Book A Demo CTA -->
      <div class="mt-12 text-center">
        <a
          href="#"
          class="inline-flex items-center gap-2 border border-brand-blue text-brand-blue
                 px-8 py-3 rounded-full text-sm font-medium
                 hover:bg-brand-blue hover:text-white transition-colors duration-200"
          aria-label="Book a demo"
        >
          Book A Demo
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
// No image imports needed — all 3 cards use inline SVG icons
</script>
