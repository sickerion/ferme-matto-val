<script setup>
import BannerAlert from '@/components/BannerAlert.vue'
import TitleLandscape from '@/components/TitleLandscape.vue'
import FarmDescription from '@/components/FarmDescription.vue'
import StrawberriesComponent from '@/components/StrawberriesComponent.vue'
import CertificationComponent from '@/components/CertificationComponent.vue'
import ContactComponent from '@/components/ContactComponent.vue'
//import VarietiesComponent from '@/components/VarietiesComponent.vue'
import IceCreamComponent from '@/components/IceCreamComponent.vue'
</script>

<template>
  <main class="mt-20">
    <BannerAlert />
    <TitleLandscape />
    <FarmDescription />
    <StrawberriesComponent />
    <!--<VarietiesComponent />-->
    <IceCreamComponent />
    <CertificationComponent />
    <ContactComponent />
  </main>
</template>
