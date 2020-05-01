<template>
  <div>
    <b-row>
      <b-col lg="8">
        <b-img :src="strawberriesImage" alt="Fraises" fluid></b-img>
      </b-col>
      <b-col lg="4" align-self="center">
        <div class="text-zone">
          <h1>Plein de fraises en 2021</h1>
          <p>
            Cette année des milliers de fraisiers ont été plantés, mais ils produiront des fraises sucrés l'année prochaine seulement.
            Six variétés de fraises vous seront offertes en autocueillette et au kiosque à la ferme.
          </p>
        </div>
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
  .text-zone {
    margin: 0.5em;
  }
</style>