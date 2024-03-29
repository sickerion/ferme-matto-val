<script setup>
import TabComponent from '@/components/TabComponent.vue';
import Tab from '@/models/Tab';
import { reactive } from 'vue'

const tabs = reactive([
  new Tab('Wendy', 'Wendy est une variété précoce qui produit des fraises juteuses et sucrées, idéales pour commencer la saison de fraises en beauté.'),
  new Tab('Saint-Laurent', 'Saint-Laurent est une variété résistante qui produit des fraises de taille moyenne à grande, parfaites pour ceux qui aiment les fraises charnues.'),
  new Tab('Veestar', 'Veestar est connue pour ses fraises brillantes et savoureuses qui arrivent tôt en été, offrant une explosion de saveur juste à temps pour les pique-niques d’été.'),
  new Tab('Audrey', 'Audrey est une variété hâtive productive qui produit des fraises douces et juteuses.'),
  new Tab('Généreuse', 'Généreuse porte bien son nom, offrant une récolte abondante de fraises sucrées et parfumées, pour ceux qui aiment faire des réserves de fraises.'),
  new Tab('Jewel', 'Jewel est une variété polyvalente qui produit des fraises de taille moyenne à grande, avec une saveur douce, idéale pour toutes sortes de recettes.'),
  new Tab('Laurel', 'Laurel est une variété de mi-saison qui produit des fraises de grande taille avec une saveur riche.')
]);
</script>

<template>
  <div class="flex flex-col lg:flex-row bg-blue">
    <div class="lg:w-4/12 mx-4 mb-6 self-center">
      <h3 class="text-milk">Nos variétés disponibles en ce moment</h3>
    </div>
    <div class="lg:w-8/12 px-4 lg:pl-0 lg:pr-4 pb-6 lg:mt-6">
      <TabComponent :tabs="tabs" />
    </div>
  </div>
</template>