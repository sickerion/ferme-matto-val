<template>
  <div>
    <b-row>
      <b-col lg="8">
        <b-img :src="famillyImage" alt="Photo de famille" fluid></b-img>
      </b-col>
      <b-col class="container-padding" lg="4" align-self="center">
        <div class="text-zone">
          <h1 class="title text title-padding">Une aventure aux racines familiales</h1>
          <p class="text">
            Cultivant sur les terres de Val-Alain depuis plus de 60 ans, la famille Matteau a débuté la culture de fraises et de légumes en 2020.
            Soucieuse de léguer un environnement sain aux générations futures et d'offrir des produits de qualité, l'ensemble de sa production végétale est biologique.
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'FarmDescription',
    data: function () {
    return {
      famillyImage: "https://i.imgur.com/yO7iAfJ.jpg"
    }
  },
  }
</script>

<style scoped lang="scss">
  .text-zone {
    margin: 0.5em;
  }

  .text-container {
    margin: 5em 20em 5em 20em;
    padding: 2em 0 2em 0;
    border-style: solid none solid none;
  }

  .text {
    font-family: 'Sniglet';
  }

  .title {
    font-size: 36pt;
  }

  @media only screen and (max-width: 1100px) {
    .text-container {
      padding: 1em;
      margin: 0;
      border-style: none;
    }
  }

</style>