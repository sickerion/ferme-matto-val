<template>
  <div v-if="showBanner" class="alertBanner w-full fixed z-10 mt-2">
    <p class="close cursor-pointer flex items-center justify-between w-full py-2 px-4 bg-green shadow text-black" title="close">
      {{ messageFraiseTermineEtCremerie }}

      <svg
        class="fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        @click="closeBanner"
        style="cursor:pointer"
      >
        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
      </svg>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showBanner = ref(true);

    const messageOuvertureSansAutocueillette = "Les fraises sont arrivées! Le kiosque est ouvert. Ouverture de l'autocueillette à venir."
    const messageOuvertureAutocueillette = "Autocueillette ouverte tous les jours de 8h a 18h. Crèmerie ouverte dès 11h."
    const closeMessage = "La saison est terminée. Merci pour votre fidélité et à l'année prochaine!"
    const messageOuvertCremerie = "La crèmerie est ouverte! Horaire sur Facebook.";
    const messageLink = "https://www.facebook.com/fermemattoval/"
    const messageFraiseTermineEtCremerie = "Saison des fraises terminée. Ouverture de la crèmerie: jeudi 18h à 21h, vendredi et samedi 11h à 21h et dimanche 11h à 18h."

    function closeBanner() {
      showBanner.value = false;
    }

    return {
      showBanner,
      messageOuvertureSansAutocueillette,
      messageOuvertureAutocueillette,
      closeMessage,
      messageOuvertCremerie,
      messageLink,
      messageFraiseTermineEtCremerie,
      closeBanner
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
