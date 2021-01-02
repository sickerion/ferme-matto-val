<template>
  <div class="strawberries-container">
    <b-row>
      <b-col class="container-padding" lg="4" align-self="center">
        <div class="text-zone">
          <h1 class="text title-padding">Le meilleur fruit</h1>
          <p class="text">
            Que vous les préférez sucrées ou juteuses, grosses ou petites, nos huit variétés de fraises disponnible de la mi-juin à la fin juillet seront vous charmer. 
            Venez les choisir vous même en autocuillette ou passez chercher un casseau avec quelques légumes à notre kiosque.
          </p>
        </div>
      </b-col>
      <b-col lg="8">
        <b-img :src="strawberriesImage" alt="Fraises" fluid></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Strawberries',
  data: function () {
    return {
      strawberriesImage: require('../assets/strawberries.jpg')
    }
  },
}
</script>

<style scoped lang="scss">
  .strawberries-container {
    background: $custom-blue;
  }

  .text {
    color: $custom-milk;
  }

  .text-zone {
    margin: 0.5em;
  }
</style>