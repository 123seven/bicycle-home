<template>
  <section class="dark:text-white body-font">
    <div class="container mx-auto flex px-7 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{{ title }}
          <br class="hidden lg:inline-block">{{ subtitle }}
        </h1>
        <p class="mb-8 leading-relaxed">{{ desc }}</p>
        <div class="flex justify-center">
          <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg" @click="$router.push(page)">{{ $t('try') }}</button>
        </div>
      </div>
      <div class="md:w-1/2 w-5/6 h:">
        <img class="object-cover object-center rounded" alt="hero" :src="poster">
      </div>
    </div>
  </section>
</template>


<script>
export default {
  props:{
    page:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
    subtitle:{
      type: String,
      required: true
    },
    desc:{
      type: String,
      required: true
    },
    poster:{
      type: String,
      required: true
    }
  }
}
</script>