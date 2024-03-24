<template>
  <nav class="flex flex-wrap items-center justify-between px-2 lg:px-6 py-3 bg-blue z-10 fixed w-full">
    <div class="flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <img src="@/assets/Logov2_petit_sans_fond.svg" class="inline-block align-top cursor-pointer w-16 h-16 pr-2 lg:pr-0" alt="Icone Ferme Matto-Val">
      <div class="md:hidden flex flex-grow self-center justify-center">
        <p class="text-2xl text-milk">Ferme Matto-Val</p>
      </div>
    </div>
    <div class="flex">
      <a class="flex flex-grow self-center justify-center hover:opacity-75 pr-2 lg:pr-4" href="https://www.facebook.com/fermemattoval" target="_blank" rel="noopener noreferrer">
        <img class="h-8" src="@/assets/icon_facebook.svg">
      </a>
      <a class="flex flex-grow self-center justify-center hover:opacity-75 lg:pr-4 lg:hidden" href="https://m.me/fermemattoval" target="_blank" rel="noopener noreferrer">
        <img class="h-8" src="@/assets/icon_messenger.svg">
      </a>
      <a class="flex flex-grow self-center justify-center hover:opacity-75 pl-2 lg:pl-4" href="https://www.tiktok.com/@fermemattoval" target="_blank" rel="noopener noreferrer">
        <img class="h-8" src="@/assets/icon_tiktok.svg">
      </a>
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