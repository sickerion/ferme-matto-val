<template>
  <div>
    <b-row>
      <b-col lg="4" align-self="center">
        <div class="text-zone">
          <h1>Qui sommes nous</h1>
          <p>Ce qui nous lie, c'est une passion commune pour l'agriculture, les valeurs familiale et le respect de l'environnement</p>
        </div>
      </b-col>
      <b-col lg="8">
        <b-img :src="descriptionImage" alt="Photo de famille" fluid></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'FarmDescription',
    data: function () {
      return {
        descriptionImage: require('../assets/famille.jpg')
      }
    },
  }
</script>

<style scoped lang="scss">
  .text-zone {
    margin: 0.5em;
  }

</style>