<template>
<div class="caroussel-container">
  <b-carousel class="caroussel" :interval="2000" controls>
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
          "https://i.imgur.com/0mqv5Ae.jpg",
          "https://i.imgur.com/EDaxVjD.jpg",
          "https://i.imgur.com/EWICLCq.jpg",
          "https://i.imgur.com/lrHG42n.jpg",
          "https://i.imgur.com/HvNRnNg.jpg",
          "https://i.imgur.com/FyDpx7q.jpg",
          "https://i.imgur.com/d1C6r3Y.jpg",
          "https://i.imgur.com/gcHyeHZ.jpg",
          "https://i.imgur.com/47bRzc7.jpg",
          "https://i.imgur.com/QbhIXfh.jpg",
          "https://i.imgur.com/YpazxFo.jpg",
          "https://i.imgur.com/ttY1Ky9.jpg",
          "https://i.imgur.com/jf1e17j.jpg",
          "https://i.imgur.com/LcJmRgD.jpg",
          "https://i.imgur.com/lDMPvHj.jpg",
          "https://i.imgur.com/VlBTgD4.jpg",
          "https://i.imgur.com/i6cIuco.jpg",
          "https://i.imgur.com/LWxTfaO.jpg",
          "https://i.imgur.com/xszZOmV.jpg",
          "https://i.imgur.com/6z2H2ZU.jpg",
          "https://i.imgur.com/egevW0B.jpg",
        ]
      }
    },
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
