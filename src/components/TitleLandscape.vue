<template>
    <div class="hidden relative md:flex overflow-x-hidden">
        <div>
            <div class="absolute text-center top-20 right-12 left-12 lg:top-32 lg:right-20 lg:left-0 lg:text-right">
            <h1 class="text-6xl mb-1 text-milk lg:text-7xl">Ferme Matto-Val</h1>
            <h2 class="text-5xl mb-0 text-milk">Fraises et légumes</h2>
            <h2 class="text-5xl mb-0 text-milk">biologiques</h2>
            </div>
        </div>
        <img :src="headerImage" alt="Ferme Matto-Val" class="h-120 lg:h-200 2xl:h-220 3xl:h-240" />
    </div>
</template>
  
<script>
  export default {
    setup() {
        return { headerImage: "https://i.imgur.com/lVPHbIj.jpg" }
    }
  };
</script>

  