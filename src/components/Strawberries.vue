<template>
    <div class="bg-blue">
      <div>
        <div class="flex flex-col lg:flex-row-reverse lg:flex-row">
          <div class="lg:w-8/12">
            <img :src="strawberriesImage" alt="Fraises biologiques" class="w-full">
          </div>
          <div class="lg:w-4/12 mx-4 my-6 self-center">
            <h1 class="mb-4 text-milk">Des fraises pour tous les goûts</h1>
            <p class="text-lg text-milk">
              Que vous les préférez sucrées ou juteuses, grosses ou petites, nos 12 variétés de fraise vous charmerons de la fin juin à la fin juillet. 
              Venez les choisir vous même en autocueillette ou passez à notre kiosque prendre un casseau bien rempli avec des légumes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
    setup() {
        return {
            strawberriesImage: "https://i.imgur.com/9zBL6NA.jpg"
        }
    },
}
</script>