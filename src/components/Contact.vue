<template>
  <div class="contactBar">
    <b-row class="contactInfo" align-v="start">
      <b-col lg="2">
        <img src="../assets/Logov2.svg" class="d-inline-block align-top" alt="Logo complet" height="150px">
      </b-col>
      <b-col class="info" lg="6" align-self="center">
        <b-row class="textContainer">
          <p class="text">(581) 996-1001</p>
        </b-row>
        <b-row class="textContainer">
          <p class="text">haltechampetremattoval</p>
          <p class="text">@gmail.com</p>
        </b-row>
        <b-row class="textContainer">
          <p class="text">490 5e rang, Val-Alain Québec G0S 3H0</p>
        </b-row>
      </b-col>
      <b-col lg="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.703271909711!2d-71.76311238452278!3d46.44787517912495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb87787d63567dd%3A0x63085f117b5fe562!2s490%205e%20Rang%2C%20Val-Alain%2C%20QC%20G0S%203H0!5e1!3m2!1sfr!2sca!4v1588542148490!5m2!1sfr!2sca"
          width="300"
          height="200"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="Adresse sur la carte"
        >
        </iframe>
      </b-col>
    </b-row>
    <b-row class="copyright">
      <b-col>
        <p class="text">© Ferme Matto-Val 2021 | Etienne Matteau</p>
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

  .text {
    font-family: 'Sniglet';
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
      padding-bottom: 1.5em;
    }
    .textContainer {
      justify-content: center;
    }
  }
</style>