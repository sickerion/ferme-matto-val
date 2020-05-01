<template>
  <div id="app">
    <Navbar v-bind:showNavbar="showNavbar" v-on:scroll-into-view="onScrollIntoView" />
    <FrontPage v-bind:viewToScrollInto="viewToScrollInto"/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import FrontPage from './components/FrontPage.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
      FrontPage 
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
      showNavbar: true
    }),

    methods: {
      onScrollIntoView: function (view) {
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
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #fbf5f3;
    overflow-y: hidden;
  }
</style>