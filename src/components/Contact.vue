<template>
  <div class="contactBar">
    <b-row class="contactInfo" align-v="start">
      <b-col lg="2">
        <img src="../assets/Logov2.svg" class="d-inline-block align-top" alt="Logo complet" height="150px">
      </b-col>
      <b-col class="info" lg="10" align-self="center">
        <b-row class="textContainer">
          <p class="whiteText">(581) 996-1001</p>
        </b-row>
        <b-row class="textContainer">
          <p class="whiteText">haltechampetremattoval</p>
          <p class="whiteText">@gmail.com</p>
        </b-row>
        <b-row class="textContainer">
          <p class="whiteText">490, 5e rang, Val-Alain (Québec) G0S 3H0</p>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="copyright">
      <b-col>
        <p class="whiteText">© Ferme Matto-Val 2020 | Etienne Matteau</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped lang="scss">
  .contactBar {
    background-color: $custom-green;
    padding-top: 2em;
    padding-bottom: 1em;
  }

  .contactInfo {
    padding-bottom: 1em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }

  .whiteText {
    color: $custom-milk;
  }

  .copyright {
    padding-top: 1em;
    border-top: solid $custom-milk;
    margin-left: 2em;
    margin-right: 2em;
  }

  .textContainer {
      justify-content: left;
  }

  @media only screen and (max-width: 1000px) {
    .info {
      margin-top: 2em;
      text-align: center;
    }
    .textContainer {
      justify-content: center;
    }
  }
</style>