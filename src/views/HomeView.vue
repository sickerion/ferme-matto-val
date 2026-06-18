<script setup>
import { defineAsyncComponent } from 'vue'
import BannerAlert from '@/components/BannerAlert.vue'
import TitleLandscape from '@/components/TitleLandscape.vue'
import FarmDescription from '@/components/FarmDescription.vue'
import AdvertisementComponent from '@/components/AdvertisementComponent.vue'

// Load below-fold components asynchronously
const StrawberriesComponent = defineAsyncComponent(() =>
  import('@/components/StrawberriesComponent.vue')
)
const IceCreamComponent = defineAsyncComponent(() =>
  import('@/components/IceCreamComponent.vue')
)
const ContactComponent = defineAsyncComponent(() =>
  import('@/components/ContactComponent.vue')
)
</script>

<template>
  <main class="mt-20">
    <BannerAlert />
    <TitleLandscape />
    <FarmDescription />
    <StrawberriesComponent />
    <!--<VarietiesComponent />-->
    <IceCreamComponent />
    <AdvertisementComponent />
    <ContactComponent />
  </main>
</template>
