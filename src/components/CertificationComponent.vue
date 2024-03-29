<template>
  <div class="bg-milk flex flex-col items-center mx-4 my-6">
    <div>
      <img class="mb-6" :src="certificationImage" alt="Ecocert" loading="lazy">
    </div>
    <div class="lg:w-6/12">
      <h2 class="mb-4">Certifié biologique par Ecocert Canada</h2>
      <p class="text-lg mb-2">
          Parce que votre santé et celle de l'environnement nous tiennent à coeur, nos fraises et nos légumes sont biologiques.
          Aucun produit chimique n'est utilisé pour faire pousser nos cultures et nos pratiques agricoles sont durables pour l'écosystème. 
      </p>
      <!--<a href="https://drive.google.com/file/d/1InGzqcGe43ZQIevdAJ66gcHQlbgz7SxX/view?usp=sharing" target="_blank" rel="noopener noreferrer">Lien vers la certification</a>-->
    </div>
  </div>
</template>
  
  <script>
  export default {
    setup() {
      return {
        certificationImage: "https://seeklogo.com/images/C/canada-organic-logo-10054A64D2-seeklogo.com.png"
      }
    },
  }
  </script>