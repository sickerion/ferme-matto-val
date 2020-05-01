<template>
  <div class="vegetablesContainer">
    <div class="text-zone">
      <h1 class="text">Nos légumes</h1>
      <p class="text">Nous nous efforçons de cultiver des légumes de qualité...</p>
    </div>
    <b-carousel :interval="3000" controls indicators>
      <b-carousel-slide v-for="(vegetableImage, i) in vegetableImages" :key="i" :img-src="vegetableImage"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Vegetables',
    data: function () {
      return {
        vegetableImages: [
          require('../assets/vegetables/tomates.jpg'),
          require('../assets/vegetables/mais.jpg'),
          require('../assets/vegetables/épinard.jpg'),
          require('../assets/vegetables/carotte.jpg')
        ]
      }
    },
  }
</script>

<style scoped lang="scss">
  .vegetablesContainer {
    padding-top: 2em;
    background-color: $custom-blue;
  }

  .text-zone {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: 0.5em;
  }

  .text {
    color: $custom-milk;
  }

  .carousel {
    text-shadow: 1px 1px 2px #333;
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 3em;
  }

@media only screen and (max-width: 960px) {
  .carousel {
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
