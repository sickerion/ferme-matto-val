<template>
  <div class="frontPageContainer">
    <b-alert show variant="warning" class="mb-0 pt-3 alertText">Saison 2022 terminée - Merci et à l'été prochain!</b-alert>
    <!--<b-alert show dismissible variant="info" class="mb-0 pt-3 alertText">Ouverture - Ouvert tous les jours de 8h à 18h</b-alert>-->
    <FrontPageHeader />
    <FarmDescription id="farmDescription" />
    <Strawberries id="strawberries" />
    <Certification id="certification" />
    <Caroussel id="caroussel" />
    <Contact id="contact" />
  </div>
</template>

<script>
import FrontPageHeader from './FrontPageHeader.vue';
import FarmDescription from './FarmDescription.vue';
import Caroussel from './Caroussel.vue';
import Certification from './Certification.vue';
import Strawberries from './Strawberries.vue';
import Contact from './Contact.vue';

export default {
  name: 'FrontPage',
  components: {
    FrontPageHeader,
    FarmDescription,
    Certification,
    Caroussel,
    Strawberries,
    Contact
  },
  props: ["viewToScrollInto"],
  watch: { 
    viewToScrollInto: function(view) {
      if (view) {
        let newScrollPositionY = document.querySelector(view).offsetTop;

        if(newScrollPositionY != window.scrollY) {
          window.scroll({
            top: newScrollPositionY,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .frontPageContainer {
    padding-top: 80px;
  }
  
  .alertText {
    font-family: 'Sniglet';
    font-size: 16pt;
  }
</style>
