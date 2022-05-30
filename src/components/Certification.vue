<template>
  <div class="certification-container container-padding">
    <div>
      <b-img class="image" :src="certificationImage" alt="Logo Ecocert" fluid></b-img>
    </div>
      <div class="text-container">
        <h1 class="title title-padding">Certifié biologique par Ecocert Canada</h1>
        <p class="text-content">
            Parce que votre santé et celle de l'environnement nous tiennent à coeur, nos fraises et nos légumes sont biologiques.
            Aucun produit chimique n'est utilisé pour faire pousser nos cultures et nos pratiques agricoles sont durables pour l'écosystème. 
        </p>
        <a href="https://drive.google.com/file/d/1InGzqcGe43ZQIevdAJ66gcHQlbgz7SxX/view?usp=sharing" target="_blank" rel="noopener noreferrer">Lien vers la certification</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Certification',
  data: function () {
    return {
      certificationImage: "https://seeklogo.com/images/C/canada-organic-logo-10054A64D2-seeklogo.com.png"
    }
  },
}
</script>

<style scoped lang="scss">
  .certification-container {
    background-color: $custom-milk;
  }

  .text-container {
    padding: 1em 20em 1em 20em;
  }

  .title {
    font-family: 'Sniglet';
    font-size: 36pt;
  }

  .text-content {
    font-family: 'Sniglet';
    margin-bottom: 0.5em;
  }

  .image {
      width: 20rem;
      padding: 0 2rem 0 2rem;
  }

  .whiteText {
    color: $custom-milk;
  }

  @media only screen and (max-width: 1024px) {
    .text-container {
      padding: 1em;
    }
  }

</style>