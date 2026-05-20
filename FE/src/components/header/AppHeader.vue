<template>
  <header class="bg-brand-blue sticky top-0 z-40 w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- ── Logo ── -->
        <a href="/" class="flex-shrink-0" aria-label="GO-GENIE Home">
          <span class="text-white font-extrabold text-xl tracking-wide select-none">GO-GENIE</span>
        </a>

        <!-- ── Desktop Nav ── -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          <NavDropdown
            v-for="item in navItems"
            :key="item.label"
            :label="item.label"
            :items="item.dropdown"
          />
        </nav>

        <!-- ── Desktop Right Actions ── -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="#"
            class="border border-white text-white text-sm font-medium px-5 py-2 rounded-full
                   hover:bg-white/10 transition-colors duration-200"
            aria-label="Track your parcel"
          >
            Track Your Parcel
          </a>
          <a
            href="#"
            class="bg-white text-brand-blue text-sm font-semibold px-5 py-2 rounded-full
                   hover:bg-white/90 transition-colors duration-200"
            aria-label="Sign in"
          >
            Sign In
          </a>
          <LanguageSwitcher />
        </div>

        <!-- ── Mobile: Track + Hamburger ── -->
        <div class="lg:hidden flex items-center gap-2">
          <a href="#" class="text-white text-xs border border-white/60 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors">
            Track Parcel
          </a>
          <button
            @click="mobileOpen = !mobileOpen"
            class="p-2 text-white focus:outline-none"
            :aria-expanded="mobileOpen"
            aria-label="Toggle mobile menu"
          >
            <!-- Hamburger → X transition -->
            <svg v-if="!mobileOpen" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round"/>
            </svg>
            <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- ── Mobile Menu Panel ── -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden bg-brand-blue-dark border-t border-white/10"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">

          <!-- Nav items — accordion style -->
          <div v-for="item in navItems" :key="item.label">
            <button
              @click="toggleMobileSection(item.label)"
              class="w-full flex items-center justify-between text-white text-sm font-medium
                     py-3 px-2 rounded-lg hover:bg-white/10 transition-colors duration-150"
            >
              {{ item.label }}
              <svg
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': openSection === item.label }"
                viewBox="0 0 12 12" fill="none" aria-hidden="true"
              >
                <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Sub-items -->
            <div v-if="openSection === item.label" class="pl-4 pb-2 flex flex-col gap-1">
              <a
                v-for="sub in item.dropdown"
                :key="sub.title"
                href="#"
                class="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-white/10 transition-colors duration-150"
              >
                <span class="text-white text-sm font-medium">{{ sub.title }}</span>
                <span class="text-white/55 text-xs">{{ sub.description }}</span>
              </a>
            </div>
          </div>

          <!-- Divider -->
          <hr class="border-white/15 my-2" />

          <!-- Sign In + Language -->
          <div class="flex items-center justify-between px-2 py-2">
            <a href="#" class="text-white text-sm font-medium hover:text-white/80 transition-colors">Sign In</a>
            <LanguageSwitcher />
          </div>

        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import NavDropdown from './NavDropdown.vue'
import LanguageSwitcher from './LanguageSwitcher.vue'
import navData from '@/data/navigation.json'

const navItems = navData.navItems
const mobileOpen = ref(false)
const openSection = ref(null)

function toggleMobileSection(label) {
  openSection.value = openSection.value === label ? null : label
}
</script>
