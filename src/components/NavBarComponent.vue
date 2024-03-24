<template>
  <nav class="flex flex-wrap items-center justify-between px-2 py-3 bg-blue z-10 fixed w-full">
    <div class="container lg:px-6 px-2 flex items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <img src="@/assets/Logov2_petit_sans_fond.svg" class="inline-block align-top cursor-pointer w-16 h-16" alt="Icone Ferme Matto-Val">
        <div class="md:hidden flex flex-grow self-center justify-center">
          <p class="text-2xl text-milk">Ferme Matto-Val</p>
        </div>
        <!--<button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <img src="@/assets/bars.svg" alt="bars" class="h-8 w-8">
        </button>-->
      </div>
      <div class="flex">
        <a class="flex flex-grow self-center justify-center hover:opacity-75 pr-2 lg:pr-4" href="https://www.facebook.com/fermemattoval" target="_blank" rel="noopener noreferrer">
          <img class="h-8" src="@/assets/icon_facebook.svg">
        </a>
        <a class="flex flex-grow self-center justify-center hover:opacity-75 lg:pr-4 lg:hidden" href="http://m.me/fermemattoval?text=Bonjour!%20N'hésitez%20pas%20à%20m'écrire%20si%20vous%20avez%20des%20questions." target="_blank" rel="noopener noreferrer">
          <img class="h-8" src="@/assets/icon_messenger.svg">
        </a>
        <a class="flex flex-grow self-center justify-center hover:opacity-75 pl-2 lg:pl-4" href="https://www.tiktok.com/@fermemattoval" target="_blank" rel="noopener noreferrer">
          <img class="h-8" src="@/assets/icon_tiktok.svg">
        </a>
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