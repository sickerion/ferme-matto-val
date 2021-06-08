<template>
  <div id="app">
    <Navbar id="header" v-bind:showNavbar="showNavbar" v-on:scroll-into-view="onScrollIntoView" v-on:onGoToAutocueillette="goToAutocueillette"/>
    <FrontPage v-if="!showAutocueillette" v-bind:viewToScrollInto="viewToScrollInto"/>
    <Autocueillette v-else />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import FrontPage from './components/FrontPage.vue'
  import Autocueillette from './components/Autocueillette.vue'

  export default {
    name: 'App',
    metaInfo() {
        return { 
            title: "Ferme Matto-Val - Fraises et légumes biologiques",
            meta: [
                {
                  name: 'description',
                  content: "Située près de l'autoroutes 20 à 30 minutes de Québec, la Ferme Matto-Val cultive des légumes et des fraises bio. " +
                    "Autocueillette pour les fraises biologiques en juin et juillet. " +
                    "Kiosque à la ferme ouvert durant la saison estivale. " +
                    "Halte gourmande, pique-nique, troupeau de bovins et plaisirs pour toute la famille."
                },
                { property: 'og:title', content: "Ferme Matto-Val - Fraises et légumes biologiques"},
                {
                  property: 'og:description',
                  content: "Située près de l'autoroutes 20 à 30 minutes de Québec, la Ferme Matto-Val cultive des légumes et des fraises bio. " +
                    "Autocueillette pour les fraises biologiques en juin et juillet. " +
                    "Kiosque à la ferme ouvert durant la saison estivale."
                },
                { property: 'og:image', content: "https://i.imgur.com/bHBFTDX.jpg"},
                { property: 'og:site_name', content: 'Ferme Matto-Val'},
                {property: 'og:type', content: 'website'},    
                {name: 'robots', content: 'index,follow'} 
            ]
        }
    },
    components: {
      Navbar,
      FrontPage,
      Autocueillette
    },
    created () {
      window.addEventListener('scroll', this.onScoll);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScoll)
    },
    data: () => ({
      viewToScrollInto: '',
      lastScrollPosition: 0,
      showNavbar: true,
      showAutocueillette: false
    }),

    methods: {
      onScrollIntoView: function (view) {
        this.showAutocueillette = false;
        this.viewToScrollInto = view;
      },
      onScoll () {
        this.viewToScrollInto = '';
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScrollPosition < 0) {
          return;
        }

        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return;
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      },
      goToAutocueillette: function () {
        this.showAutocueillette = true;
      },
    }
  }
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #fbf5f3;
    overflow-y: hidden;
  }

  .container-padding {
    padding-top: 2em;
    padding-bottom: 2em;
  }

  .title-padding {
    padding-bottom: 0.5em;
  }
</style>