/**
 * useAsset — resolves image paths from src/assets/img/.
 *
 * All assets are explicitly imported so Vite can statically analyze them
 * and include them in production builds with correct hashed filenames.
 *
 * Usage:
 *   import { getAsset } from '@/composables/useAsset'
 *   const src = getAsset('scenery.png')
 */

// ── Explicit static imports (required for Vite production bundling) ──
import scenery from '@/assets/img/scenery.png'
import ecosystemHorizontal from '@/assets/img/ecosystem_horizontal.png'
import ecosystemSep2025 from '@/assets/img/ecosystem_sep2025.png'
import brandsforgood from '@/assets/img/brandsforgood.png'
import logoVertical from '@/assets/img/logo_vertical.png'
import masterAgentLaptop from '@/assets/img/masterAgent_laptop.png'
import transformationEfforts from '@/assets/img/transformation efforts - promising brands - gold.png'
import upscaled1 from '@/assets/img/upscale_image[Upscaled1].png'
import upscaled2 from '@/assets/img/upscale_image[Upscaled2].png'
import upscaled3 from '@/assets/img/upscale_image[Upscaled3].png'
import visualEnvImpact1 from '@/assets/img/visual_environmental impact_1.png'
import visualGreenFleet from '@/assets/img/visual_green fleet.png'
import visualMonitor from '@/assets/img/visual_monitor enviromental impact.png'
// Submenu icons
import servicesMenu1 from '@/assets/img/services_menu1.png'
import servicesMenu2 from '@/assets/img/services_menu2.png'
import servicesMenu3 from '@/assets/img/services_menu3.png'
import solutionMenu1 from '@/assets/img/solution_menu1.png'
import solutionMenu2 from '@/assets/img/solution_nemu2.png'
import solutionsMenu3 from '@/assets/img/solutions_menu3.png'

const assetMap = {
  'scenery.png':                                          scenery,
  'ecosystem_horizontal.png':                             ecosystemHorizontal,
  'ecosystem_sep2025.png':                                ecosystemSep2025,
  'brandsforgood.png':                                    brandsforgood,
  'logo_vertical.png':                                    logoVertical,
  'masterAgent_laptop.png':                               masterAgentLaptop,
  'transformation efforts - promising brands - gold.png': transformationEfforts,
  'upscale_image[Upscaled1].png':                         upscaled1,
  'upscale_image[Upscaled2].png':                         upscaled2,
  'upscale_image[Upscaled3].png':                         upscaled3,
  'visual_environmental impact_1.png':                    visualEnvImpact1,
  'visual_green fleet.png':                               visualGreenFleet,
  'visual_monitor enviromental impact.png':               visualMonitor,
  'services_menu1.png':                                   servicesMenu1,
  'services_menu2.png':                                   servicesMenu2,
  'services_menu3.png':                                   servicesMenu3,
  'solution_menu1.png':                                   solutionMenu1,
  'solution_nemu2.png':                                   solutionMenu2,
  'solutions_menu3.png':                                  solutionsMenu3,
}

/**
 * @param {string} filename - the image filename (e.g. 'scenery.png')
 * @returns {string} resolved URL for use in <img :src="...">
 */
export function getAsset(filename) {
  const resolved = assetMap[filename]
  if (!resolved) {
    console.warn(`[useAsset] Unknown asset: "${filename}"`)
    return ''
  }
  return resolved
}
