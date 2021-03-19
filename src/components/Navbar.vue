<template>
  <div>
    <b-navbar fixed="top" toggleable="md" type="dark" class="navbar" v-bind:class="{ hidden: !showNavbar}">
      <b-navbar-brand>
        <img src="../assets/Logov2_petit_sans_fond.svg" class="d-inline-block align-top logo" alt="Logo" width="60px" height="60px" @click="$emit('scroll-into-view', '#header')">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="text" active @click="$emit('scroll-into-view', '#farmDescription')"><span>La ferme</span></b-nav-item>
          <b-nav-item class="text" active @click="$emit('scroll-into-view', '#strawberries')">Fraises</b-nav-item>
          <b-nav-item class="text" active @click="$emit('scroll-into-view', '#certification')">Certification</b-nav-item>
          <!--<b-nav-item class="text" active @click="$emit('onGoToAutocueillette')">Autocueillette</b-nav-item>-->
          <b-nav-item class="text" active @click="$emit('scroll-into-view', '#contact')">Nous joindre</b-nav-item>
        </b-navbar-nav> 
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: ["showNavbar"],
  }
  
</script>

<style scoped lang="scss">
  .navbar {
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
    background: $custom-blue;
  }

  .hidden {
    transform: translate3d(0, -100%, 0);
  }

  .text {
    font-family: 'Sniglet';
    font-size: 16pt;
    margin-bottom: 0;
    color: $custom-milk;
  }

  .logo {
    cursor: pointer;
  }
</style>