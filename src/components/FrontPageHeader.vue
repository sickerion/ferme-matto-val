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
      headerImage: "https://i.imgur.com/RkOSF5l.jpg",
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
  height: 50rem;
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
  .textContainer {
    top: 7em;
    right: 1.25em;
    left: 1.25em;
    text-align: center;
  }

  .title {
    font-size: 50pt;

  }

  .subtitle {
    font-size: 35pt;

  }
}

@media only screen and (max-width: 540px) {
  .textContainer {
    top: 7em;
    right: 0.75em;
    left: 0.75em;
    text-align: center;
  }

  .title {
    font-size: 40pt;

  }

  .subtitle {
    font-size: 30pt;

  }
}

@media only screen and (max-width: 420px) {
  .textContainer {
    top: 4em;
    right: 0.5em;
    left: 0.5em;
    text-align: center;
  }

  .title {
    font-size: 35pt;

  }

  .subtitle {
    font-size: 28pt;
  }

  .image {
    height: 20rem;
  }
}

  @media only screen and (max-width: 370px) {
  .textContainer {
    top: 4em;
    right: 0.5em;
    left: 0.5em;
    text-align: center;
  }

  .title {
    font-size: 30pt;

  }

  .subtitle {
    font-size: 25pt;
  }
}
</style>
