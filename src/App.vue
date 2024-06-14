<script setup>
  import NavBarComponent from '@/components/NavBarComponent.vue'
  import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <NavBarComponent />
  <HomeView />
</template>

<script>
import { useHead } from "@vueuse/head"

export default {
  setup() {
      useHead({
          title: "Ferme Matto-Val - Fraises biologiques",
          meta: [
              {
                  name: 'description',
                  content: "Située près de l'autoroutes 20 à 30 minutes de Québec, la Ferme Matto-Val cultive des fraises bio. " +
                    "Autocueillette pour les fraises biologiques en juin et juillet. " +
                    "Kiosque à la ferme ouvert durant la saison estivale. " +
                    "Halte gourmande, pique-nique, troupeau de bovins et plaisirs pour toute la famille.",
              },
              { property: 'og:title', content: "Ferme Matto-Val - Fraises biologiques"},
                {
                  property: 'og:description',
                  content: "Située près de l'autoroutes 20 à 30 minutes de Québec, la Ferme Matto-Val cultive des fraises bio. " +
                    "Autocueillette pour les fraises biologiques en juin et juillet. " +
                    "Kiosque à la ferme ouvert durant la saison estivale."
                },
                { property: 'og:image', content: "https://i.imgur.com/bHBFTDX.jpg"},
                { property: 'og:site_name', content: 'Ferme Matto-Val'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
          ],
      });
  },
};
</script>