<script setup>
import TabComponent from '@/components/TabComponent.vue';
import Tab from '@/models/Tab';
import { reactive } from 'vue'

const tabs = reactive([
  new Tab('Wendy', 'Tab 1 Content'),
  new Tab('Saint-Laurent', 'Tab 2 Content'),
  new Tab('Veestar', 'Tab 3 Content')
]);

console.log(tabs);
</script>

<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-4/12 mx-4 my-6 self-center">
          <h1 class="mb-4">Nos variétés disponibles en ce moment</h1>
      </div>
      <div class="lg:w-8/12">
        <TabComponent :tabs="tabs" />
      </div>
    </div>
  </div>
</template>