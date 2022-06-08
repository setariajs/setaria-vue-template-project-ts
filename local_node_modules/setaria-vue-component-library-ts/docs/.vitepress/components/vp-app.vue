<script setup lang="ts">
// import { onMounted } from 'vue'
// import { ElMessageBox } from 'element-plus'
// import nprogress from 'nprogress'
// import dayjs from 'dayjs'
// import { isClient, useStorage, useToggle } from '@vueuse/core'
// import { useSidebar } from '../composables/sidebar'
// import { useToggleWidgets } from '../composables/toggle-widgets'
// import { useLang } from '../composables/lang'
// import { breakpoints } from '../constant'
// import VPOverlay from './vp-overlay.vue'
// import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
// import VPSidebar from './vp-sidebar.vue'
// import VPContent from './vp-content.vue'
// import VPSponsors from './vp-sponsors.vue'
// import VPReloadPrompt from './vp-reload-prompt.vue'

// const USER_PREFER_GITHUB_PAGE = 'USER_PREFER_GITHUB_PAGE'

// const [isSidebarOpen, toggleSidebar] = useToggle(false)
// const { hasSidebar } = useSidebar()
// const lang = useLang()

// useToggleWidgets(isSidebarOpen, () => {
//   if (!isClient) return
//   if (window.outerWidth >= breakpoints.lg) {
//     toggleSidebar(false)
//   }
// })

// const userPrefer = useStorage<boolean | string>(USER_PREFER_GITHUB_PAGE, null)

// onMounted(async () => {
// })

</script>

<template>
  <div class="App">
    hello would
    <!-- <VPNav />
    <VPSubNav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #top>
        <VPSponsors />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VPContent> -->
  </div>
</template>
