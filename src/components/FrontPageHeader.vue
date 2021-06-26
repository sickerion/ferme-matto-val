<template>
  <div class="headerContainer">
    <transition name="fade-in">
      <div class="textContainer" v-if="showText">
        <h1 class="title">Ferme Matto-Val</h1>
        <div class="separation"></div>
        <h2 class="subtitle">Fraises et légumes</h2>
        <h2 class="subtitle">biologiques</h2>
      </div>
    </transition>
    <b-img :src="headerImage" alt="Ferme Matto-Val" class="image"></b-img>
  </div>
</template>

<script>
export default {
  name: 'FrontPageHeader',
  data: function () {
    return {
      headerImage: "https://i.imgur.com/lVPHbIj.jpg",
      showText: false,
    }
  },
  mounted: function () {
    this.showText = true;
  }
}
</script>

<style scoped lang="scss">
  .headerContainer {
    position: relative;
  }

.textContainer {
  position: absolute;
  top: 8em;
  right: 5em;
  text-align: right;
}

.fade-in-enter-active {
  transition: opacity 1.5s;
}

.fade-in-enter {
  opacity: 0;
}

.title {
  font-family: 'Sniglet';
  font-size: 70pt;
  margin-bottom: 0;
  color: $custom-milk;
}

.subtitle {
  font-family: 'Sniglet';
  font-size: 45pt;
  margin-bottom: 0;
  color: $custom-milk;
}

.separation {
  border-bottom: 4px solid $custom-milk;
  border-top: 4px solid $custom-milk;
  border-radius: 5px;
}

.image {
  height: 60rem;
}

@media only screen and (max-width: 1600px) {


  .image {
    height: 50rem;
  }
}

@media only screen and (max-width: 960px) {
  .textContainer {
    top: 5em;
    right: 3em;
    left: 3em;
    text-align: center;
  }

  .title {
    font-size: 60pt;
  }

  .subtitle {
    font-size: 40pt;
  }

  .image {
    height: 30rem;
  }
}

@media only screen and (max-width: 720px) {
  .headerContainer {
    display: none;
  }
}
</style>
