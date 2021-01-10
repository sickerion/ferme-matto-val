<template>
  <div class="strawberries-container">
    <b-row>
      <b-col class="container-padding" lg="4" align-self="center">
        <div class="text-zone">
          <h1 class="text title-padding">La grande nouveauté de cette année</h1>
          <p class="text">
            Que vous les préférez sucrées ou juteuses, grosses ou petites, nos huit variétés de fraises disponnibles de mi-juin à la fin juillet seront vous charmer. 
            Venez les choisir vous même en autocueillette ou passez à notre kiosque prendre un casseau bien rempli avec quelques légumes.
          </p>
        </div>
      </b-col>
      <b-col lg="8">
        <b-img :src="strawberriesImage" alt="Fraises biologiques" fluid></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Strawberries',
  data: function () {
    return {
      strawberriesImage: "https://i.imgur.com/bHBFTDX.jpg"
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