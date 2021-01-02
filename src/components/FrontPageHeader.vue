<template>
  <div class="headerContainer">
    <transition name="fade-in">
      <div class="textContainer" v-if="showText">
        <p class="title">Ferme Matto-Val</p>
        <div class="separation"></div>
        <p class="subtitle">Halte Champêtre</p>
      </div>
    </transition>
    <b-img :src="headerImage" alt="Ferme" fluid></b-img>
  </div>
</template>

<script>
export default {
  name: 'FrontPageHeader',
  data: function () {
    return {
      headerImage: "https://i.imgur.com/4opPAYT.jpg",
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
  top: 5em;
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
  font-family: 'Sniglet-Regular', Sniglet-Regular, sans-serif;
  font-size: 70pt;
  margin-bottom: 0;
  color: $custom-milk;
}

.subtitle {
  font-family: 'Sniglet-Regular', Sniglet-Regular, sans-serif;
  font-size: 45pt;
  margin-bottom: 0;
  color: $custom-milk;
}

.separation {
  border-bottom: 4px solid $custom-milk;
  border-top: 4px solid $custom-milk;
  border-radius: 5px;
}


@media only screen and (max-width: 960px) {
  .textContainer {
    top: 3em;
    right: 3em;
  }

  .title {
    font-size: 60pt;

  }

  .subtitle {
    font-size: 40pt;

  }
}

@media only screen and (max-width: 720px) {
  .textContainer {
    top: 2em;
    right: 2em;
  }

  .title {
    font-size: 50pt;

  }

  .subtitle {
    font-size: 30pt;

  }
}

@media only screen and (max-width: 540px) {
  .textContainer {
    top: 1.5em;
    right: 1em;
  }

  .title {
    font-size: 30pt;

  }

  .subtitle {
    font-size: 25pt;

  }
}
</style>
