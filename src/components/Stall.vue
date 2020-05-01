<template>
  <div>
    <b-row>
      <b-col lg="4" align-self="center">
        <div class="text-zone">
          <h1>Un kiosque à la ferme pour vous recevoir</h1>
          <p>Venez nous visiter à notre kiosque à la ferme tous les vendredi et samedi de 16h à 20h</p>
        </div>
      </b-col>
      <b-col lg="8">
        <b-img :src="stallImage" alt="Kiosque" fluid></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Stall',
  data: function () {
    return {
      stallImage: require('../assets/kiosque.jpg')
    }
  },
}
</script>

<style scoped lang="scss">
  .text-zone {
    margin: 0.5em;
  }
</style>