<template>
  <div class="strawberries-container">
    <b-row>
      <b-col class="container-padding" lg="4" align-self="center">
        <div class="text-zone">
          <h1 class="title text title-padding">Des fraises pour tous les goûts</h1>
          <p class="text">
            Que vous les préférez sucrées ou juteuses, grosses ou petites, nos 12 variétés de fraise vous charmerons de la fin juin à la fin juillet. 
            Venez les choisir vous même en autocueillette ou passez à notre kiosque prendre un casseau bien rempli avec des légumes.
          </p>
        </div>
      </b-col>
      <b-col lg="8">
        <b-img :src="strawberriesImage" alt="Fraises biologiques" class="image"></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Strawberries',
  data: function () {
    return {
      strawberriesImage: "https://i.imgur.com/9zBL6NA.jpg"
    }
  },

}
</script>

<style scoped lang="scss">
  .strawberries-container {
    background: $custom-blue;
  }

  .text {
    font-family: 'Sniglet';
    color: $custom-milk;
  }

  .text-zone {
    margin: 1rem;
  }

  .image {
    height: 45rem;
  }

  .title {
    font-size: 36pt;
  }
</style>