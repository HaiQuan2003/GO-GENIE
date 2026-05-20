<template>
  <footer>
    <!-- ══════════════════════════════════════════
         BLUE FOOTER BODY
    ══════════════════════════════════════════ -->
    <div class="bg-brand-blue">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-10 pb-8">

        <!-- Logo -->
        <p class="text-white font-extrabold text-2xl tracking-wide mb-6">GO-GENIE</p>

        <!-- Divider -->
        <hr class="border-white/20 mb-8" />

        <!-- 5-column link grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 mb-8">
          <div v-for="col in footerColumns" :key="col.heading">
            <p class="text-white font-semibold text-sm mb-4">{{ col.heading }}</p>
            <ul class="space-y-2">
              <li v-for="link in col.links" :key="link">
                <a href="#" class="text-white/70 text-sm hover:text-white transition-colors duration-150">
                  {{ link }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Divider -->
        <hr class="border-white/20 mb-6" />

        <!-- Bottom row: addresses + social -->
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          <!-- Addresses — side by side on sm+ -->
          <div class="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p class="text-white/55 text-xs mb-1">Singapore Address: 1234 Building, Random</p>
              <p class="text-white/55 text-xs">Rd, Singapore, 17890123</p>
            </div>
            <div>
              <p class="text-white/55 text-xs mb-1">Vietnam Address: 1234 Rd, Random District, Ho</p>
              <p class="text-white/55 text-xs">Chi Minh City, Vietnam</p>
            </div>
          </div>

          <!-- Social -->
          <div class="flex flex-col gap-2">
            <p class="text-white/55 text-xs">Follow us and keep updated</p>
            <div class="flex items-center gap-2">
              <!-- Facebook -->
              <a href="#" aria-label="Facebook"
                class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors duration-150">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <!-- Instagram -->
              <a href="#" aria-label="Instagram"
                class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors duration-150">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <!-- TikTok -->
              <a href="#" aria-label="TikTok"
                class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors duration-150">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
              </a>
              <!-- X / Twitter -->
              <a href="#" aria-label="X"
                class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors duration-150">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- Copyright bar — slightly darker strip -->
      <div class="border-t border-white/15 py-4 text-center">
        <p class="text-white/70 text-xs">© 2026 GO-GENIE® All Rights Reserved.</p>
      </div>
    </div>

    <!-- ── Awards strip ── -->
    <FooterAwards />
  </footer>
</template>

<script setup>
import FooterAwards from './FooterAwards.vue'
import footerData from '@/data/footer.json'

const footerColumns = footerData.columns
</script>
