<template>
  <div class="frontPageContainer">
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
</style>
