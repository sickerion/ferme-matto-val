<template>
  <div class="contactBar">
    <b-row class="contactInfo" align-v="start">
      <b-col lg="2">
        <img src="../assets/Logo_v3_plein.svg" class="d-inline-block align-top" alt="Logo complet" height="150px">
      </b-col>
      <b-col class="info" lg="6" align-self="center">
        <b-row class="textContainer">
          <p class="text">(418) 744-3058</p>
        </b-row>
        <b-row class="textContainer">
          <p class="text">info</p>
          <p class="text">@fermemattoval.com</p>
        </b-row>
        <b-row class="textContainer">
          <p class="text">505 5e rang, Val-Alain Québec G0S 3H0</p>
        </b-row>
      </b-col>
      <b-col lg="4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1374.3370415272761!2d-71.75100986480834!3d46.45515447220923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb879a6669c3757%3A0x1769c765bfc80311!2sFerme%20Matto-Val!5e0!3m2!1sfr!2sca!4v1623182771527!5m2!1sfr!2sca"
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