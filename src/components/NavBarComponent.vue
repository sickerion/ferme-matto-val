<template>
  <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue">
    <div class="container px-4 flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <img src="@/assets/Logov2_petit_sans_fond.svg" class="inline-block align-top cursor-pointer w-16 h-16" alt="Logo">
        <div class="md:hidden flex flex-grow self-center justify-center">
          <p class="text-2xl text-milk">Ferme Matto-Val</p>
        </div>
        <!--<button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <img src="@/assets/bars.svg" alt="bars" class="h-8 w-8">
        </button>-->
      </div>
      <!--<div :class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none mt-1 lg:ml-4">
          <li>
            <a class="py-2 lg:px-3 flex items-center text-sm lg:text-xl font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
              <span class="ml-2">La ferme</span>
            </a>
          </li>
          <li>
            <a class="py-2 lg:px-3 flex items-center text-sm lg:text-xl font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
              <span class="ml-2">Fraises</span>
            </a>
          </li>
          <li>
            <a class="py-2 lg:px-3 flex items-center text-sm lg:text-xl font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
              <span class="ml-2">Certification</span>
            </a>
          </li>
          <li>
            <a class="py-2 lg:px-3 flex items-center text-sm lg:text-xl font-bold leading-snug text-white hover:opacity-75 cursor-pointer">
              <span class="ml-2">Nous joindre</span>
            </a>
          </li>
        </ul>
      </div>-->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>