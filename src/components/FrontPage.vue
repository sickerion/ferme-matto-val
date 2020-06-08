<template>
  <div class="frontPageContainer">
    <FrontPageHeader />
    <FarmDescription id="farmDescription" />
    <Vegetables id="vegetables" />
    <Stall id="stall" />
    <PublicMarket id="publicMarket" />
    <Strawberries id="strawberries" />
    <Contact id="contact" />
  </div>
</template>

<script>
import FrontPageHeader from './FrontPageHeader.vue';
import FarmDescription from './FarmDescription.vue';
import Vegetables from './Vegetables.vue';
import Stall from './Stall.vue';
import PublicMarket from './PublicMarket.vue'
import Strawberries from './Strawberries.vue';
import Contact from './Contact.vue';

export default {
  name: 'FrontPage',
  components: {
    FrontPageHeader,
    FarmDescription,
    Vegetables,
    Stall,
    PublicMarket,
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
