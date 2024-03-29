<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    default: () => []
  }
})

const activeTabId = ref(props.tabs.length > 0 ? props.tabs[0].id : null);

function setActiveTabId(tabId) {
  activeTabId.value = tabId;
}

const activeTab = computed(() => {
  if (activeTabId.value === null) {
    return null;
  }

  return props.tabs.find(tab => tab.id === activeTabId.value);
})
</script>

<template>
  <div v-if="activeTab !== null" class="flex flex-col rounded border bg-milk">
    <ul class="flex justify-start gap-1 sm:gap-2 xl:gap-4 inline-flex pt-2 px-1 sm:px-2 md:px-4 w-full border-b-2 border-blue">
      <li v-for="tab in props.tabs" :key="tab.id" class="cursor-pointer px-1 sm:px-2 md:px-4 py-2 rounded-t border-blue border-t-2 border-r-2 border-l-2 -mb-px flex items-center hover:opacity-75" :class="{ 'bg-blue text-milk': activeTabId === tab.id }" @click="setActiveTabId(tab.id)">
        {{ tab.title }}
      </li>
    </ul>
    <div class="mt-2 p-1 sm:p-2 md:p-4 min-h-20">{{ activeTab.content }}</div>
  </div>
</template>