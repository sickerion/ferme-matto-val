<template>
  <div class="alertBanner w-full fixed z-10 mt-2">
    <input id="banneralert" type="checkbox" class="hidden">

    <p class="close cursor-pointer flex items-center justify-between w-full py-2 px-4 bg-green shadow text-black" title="close" for="banneralert">
      {{ closeMessage }}

      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
      </svg>
    </p>
  </div>
</template>

<script>
export default {
  setup() {
    const messageOuvertureSansAutocueillette = "Les fraises sont arrivées! Le kiosque est ouvert. Ouverture de l'autocueillette à venir."
    const messageOuvertureAutocueillette = "Le kiosque et l'autocueillette sont ouverts!"
    const closeMessage = "La saison est terminée. Merci pour votre fidélité et à l'année prochaine!"
    const messageOuvertCremerie = "La crèmerie est ouverte! Horaire sur Facebook.";
    const messageLink = "https://www.facebook.com/fermemattoval/"

    return {
      messageOuvertureSansAutocueillette,
      messageOuvertureAutocueillette,
      closeMessage,
      messageOuvertCremerie,
      messageLink
    }
  },
};
</script>

<style scoped>
    .alertBanner {
      -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /*Banner close animation*/
    .alertBanner input:checked~* {
      -webkit-animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
      animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
      }
    }

    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
      }
    }

    @-webkit-keyframes slide-out-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
      }

      100% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
      }
    }

    @keyframes slide-out-top {
      0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1
      }

      100% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0
      }
    }
</style>
