<script setup>

</script>

<template>
  <header class="dark:text-white body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <nuxt-link to="/">
        <img
          class="hidden lg:block h-8 w-auto"
          src="http://seven123.cn/logo"
          alt="YiHeZu"
        />
      </nuxt-link>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
      >
        
        <button @click="$router.push('/team')" class="mr-5 text-white font-semibold ">{{ $t('teamup') }}</button>
        <button class="mr-5 text-white font-semibold ">{{ $t('order') }}</button>
      </nav>

      <div class="dropdown dropdown-hover">
        <button
          tabindex="0"
          class="inline-flex items-center font-semibold bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-white hover:text-black rounded mt-4 md:mt-0"
          
        >
          <svg viewBox="0 0 24 24" class="fill-current h-5 min-w-5 mr-2">
            <path
              d="M12.012 2.25c.734.009 1.466.093 2.182.253a.75.75 0 0 1 .582.649l.17 1.527a1.384 1.384 0 0 0 1.927 1.116l1.401-.615a.75.75 0 0 1 .85.174 9.793 9.793 0 0 1 2.204 3.792.75.75 0 0 1-.271.826l-1.242.915a1.38 1.38 0 0 0 .001 2.226l1.243.915a.75.75 0 0 1 .271.826 9.798 9.798 0 0 1-2.204 3.792.75.75 0 0 1-.848.175l-1.407-.616a1.38 1.38 0 0 0-1.926 1.113l-.169 1.526a.75.75 0 0 1-.572.648 9.518 9.518 0 0 1-4.406 0 .75.75 0 0 1-.572-.648l-.168-1.524a1.382 1.382 0 0 0-1.925-1.11l-1.407.616a.75.75 0 0 1-.849-.175 9.798 9.798 0 0 1-2.203-3.796.75.75 0 0 1 .271-.826l1.243-.916a1.38 1.38 0 0 0 0-2.226l-1.243-.914a.75.75 0 0 1-.271-.826 9.793 9.793 0 0 1 2.204-3.792.75.75 0 0 1 .85-.174l1.4.615a1.387 1.387 0 0 0 1.93-1.118l.17-1.526a.75.75 0 0 1 .583-.649c.717-.16 1.45-.244 2.201-.253zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
            ></path>
          </svg>
          {{ $t('user') }}
        </button>
       
      </div>
    </div>
  </header>
</template>


<style>
.bg-black {
  background-color: #151515;
}
</style>
