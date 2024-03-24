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

console.log(props.tabs);
</script>

<template>
  <div v-if="activeTab !== null" class="flex flex-col">
    <div class="flex justify-between">
      <div v-for="tab in props.tabs" :key="tab.id" class="cursor-pointer p-2" :class="{ 'bg-blue text-milk': activeTabId === tab.id }" @click="setActiveTabId(tab.id)">
        {{ tab.title }}
      </div>
    </div>

    <div class="mt-2">{{ activeTab.content }}</div>
  </div>
</template>

<style>
.tab {
  padding: 10px;
  cursor: pointer;
}

.tab.active {
  background-color: #000;
  color: #fff;
}

.tab-content {
  margin-top: 10px;
}
</style>