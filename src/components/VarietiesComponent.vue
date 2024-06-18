<script setup>
import TabComponent from '@/components/TabComponent.vue';
import Tab from '@/models/Tab';
import { reactive } from 'vue'

const tabs = reactive([
  //new Tab('Kate', 'Cette variété tardive produit abondamment de grosses fraises.'),
  //new Tab('Saint-Laurent', 'La Saint-Laurent est une variété tardive de forme conique développée à l\'Université Laval en collaboration avec des cultivateurs de l\'Île d\'Orléans.'),
  new Tab('Veestar', 'La variété Veestar est connue pour ses petites fraises qui arrivent tôt en été. Elle est adorée par les cuisiniers et son goût se rapproche de celui des fraises des champs.'),
  new Tab('Audrey', 'La Audrey produit des fraises de gros calibre tôt en saison. Elle est ferme et on la reconnaît par sa queue dentelée.'),
  new Tab('Jewel', 'La Jewel est une variété hâtive qui produit de gros fruits. Elle goûte le bonbon!'),
  //new Tab('Bounty', 'La variété Bounty arrive plus tard en saison. On la reconnait par sa couleur plus foncée.'),
  new Tab('Généreuse', 'La variété Généreuse est hâtive et produit énormément.'),
]);
</script>

<template>
  <div class="flex flex-col lg:flex-row bg-green pt-8">
    <div class="lg:w-4/12 mx-4 mb-6 self-center">
      <h3 class="text-black">Nos variétés disponibles en ce moment</h3>
    </div>
    <div class="lg:w-8/12 px-4 lg:pl-0 lg:pr-4 pb-6 lg:mt-6">
      <TabComponent :tabs="tabs" />
    </div>
  </div>
</template>