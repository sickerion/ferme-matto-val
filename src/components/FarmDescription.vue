<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-8/12">
        <img class="w-full" :src="famillyImage" alt="Famille Matteau">
      </div>
      <div class="lg:w-4/12 mx-4 my-6 self-center">
          <h1 class="mb-4">Une aventure aux racines familiales</h1>
          <p class="text-lg">
            Cultivant sur les terres de Val-Alain depuis plus de 60 ans, la famille Matteau a débuté la culture de fraises et légumes en 2020.
            Soucieuse de léguer un environnement sain aux générations futures et d'offrir des produits de qualité, l'ensemble de sa production végétale est biologique.
          </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    setup() {
      return {
        famillyImage: "https://i.imgur.com/yO7iAfJ.jpg"
      }
    }
  };
</script>