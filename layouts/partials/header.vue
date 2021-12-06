<template>
  <div class="header-2">

    <nav class="bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center">

        <div class="flex justify-between items-center">
          <nuxt-link :to="{ name: 'index'}" class="main__logo"> <img
              src="https://nuxtjs.org/img/banners/mastering-nuxt/logo.png" alt="" srcset=""> </nuxt-link>
          <button
            class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          <nuxt-link :to="{ name: 'index'}" class="p-2 lg:px-4 md:mx-2 text-white rounded">Home</nuxt-link>
          <nuxt-link :to="{ name: 'about'}"
            class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            About</nuxt-link>
          <nuxt-link :to="{ name: 'shop'}"
            class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Shop</nuxt-link>
          <a href="#"
            class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Pricing</a>
          <a href="#"
            class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Contact</a>

          <div v-if="$auth.loggedIn" class="auth-user">
            <button @click="$auth.logout()"
              class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Logout</button>
            <nuxt-link :to="{ name: 'profile'}"
              class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Profile</nuxt-link>
          </div>

          <div v-else class="guest mt-2">
            <nuxt-link :to="{ name: 'login'}"
              class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">
              Login</nuxt-link>
            <a href="#"
              class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
          </div>

        </div>
      </div>
    </nav>



  </div>
</template>