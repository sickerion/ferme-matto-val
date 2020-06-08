<template>
  <div>
    <b-row>
      <b-col lg="8">
        <b-img :src="stallImage" alt="Marché public" fluid></b-img>
      </b-col>
      <b-col lg="4" align-self="center">
        <div class="text-zone">
          <h1>Marché public à Saint-Apollinaire</h1>
          <p>Du 16 juin au 24 septembre, vous pouvez nous trouver au Marché public Goutez Lotbinière.</p>
          <p>Le marché à lieu devant le Marché IGA Veilleux tous les jeudis de 14h30 à 18h30.</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Public Market',
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