<template>
  <div class="schedule-container">
    <b-row>
      <b-col class="container-padding" lg="4" align-self="center">
        <div class="text-container">
          <h1 class="title-padding schedule-title">Horaire</h1>
          <div class="text-content">
            <p class="text"><strong>Lundi</strong>: Fermé</p>
            <p class="text"><strong>Mardi</strong>: Fermé</p>
            <p class="text"><strong>Mercredi</strong>: Fermé</p>
            <p class="text"><strong>Jeudi</strong>: Kiosque ouvert de 16h à 18h</p>
            <p class="text"><strong>Vendredi</strong>: Fermé</p>
            <p class="text"><strong>Samedi</strong>: Ouvert pour l'autocuillette de 10h à 17h</p>
            <p class="text"><strong>Dimanche</strong>: Ouvert pour l'autocuillette de 10h à 17h</p>
            <p class="text text-note">*Notez que le libre service est disponible en tout temps pour certains légumes</p>
          </div>
        </div>
      </b-col>
      <b-col lg="8">
        <b-img :src="scheduleImage" alt="Kiosque" fluid></b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
  data: function () {
    return {
      scheduleImage: require('../assets/kiosque.jpg')
    }
  },
}
</script>

<style scoped lang="scss">
  .schedule-container {
    background: $custom-milk;
  }

  .text-container {
    margin: 1em;
  }

  .schedule-title {
    color: black;
  }

  .text {
    color: $custom-milk;
  }

  .text-content {
    text-align: left;
    padding: 1em;
    background: $custom-blue;
    border-radius: 7px;
  }

  .text-note {
    font-size: 12pt;
  }
</style>