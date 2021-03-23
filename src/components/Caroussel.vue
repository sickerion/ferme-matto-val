<template>
<div v-if="vegetableImages" class="caroussel-container">
  <b-carousel class="caroussel" :interval="2000" controls>
    <b-carousel-slide v-for="(vegetableImage, i) in vegetableImages.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value)" :key="i" img-alt="getImageAlt()" :img-src="vegetableImage"></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
  export default {
    name: 'Vegetables',
    mounted() {
      this.vegetableImages = [
          "https://i.imgur.com/BTpzktl.jpg",
          "https://i.imgur.com/V1MAQTL.jpg",
          "https://i.imgur.com/Pagv1zR.jpg",
          "https://i.imgur.com/z6WBgX8.jpg",
          "https://i.imgur.com/0jCami4.jpg",
          "https://i.imgur.com/RgIsfn1.jpg"

        ];
    },
    data: function () {
      return {
        vegetableImages: undefined
      }
    },
    method: {
      getImageAlt(index) {
        return `Image Caroussel ${index}`;
      }
    }
  }
</script>

<style scoped lang="scss">
  .caroussel-container {
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
    width: 50%;
    margin: auto;
  }

@media only screen and (max-width: 1024px) {
  .carousel {
    width: 100%;
  }
}
</style>
