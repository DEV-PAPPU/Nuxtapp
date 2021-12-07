<template>
  <div class="header-2">
    <div class="top_header flex justify-between items-center main__container">
      <div>
        <p>Welcome</p>
      </div>
      <div>
        <div v-if="$auth.loggedIn" class="auth-user py-1 flex gap-6">
          <button @click="$auth.logout()" class="">Logout</button>
          <nuxt-link :to="{ name: 'profile'}"
            class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
            Profile</nuxt-link>
        </div>

        <div v-else class="guest py-1 flex gap-6">
          <nuxt-link :to="{ name: 'login'}" class="">
            Login</nuxt-link>
          <a href="#" class="">Signup</a>
        </div>
      </div>
    </div>
    <div class="header_middle py-2 border-1 border-gray-200">
      <div class="main__container flex justify-between items-center">
        <div class="logo">
          <nuxt-link :to="{ name: 'index'}" class="main__logo"> <img
              src="https://nuxtjs.org/design-kit/colored-text.svg" alt="" srcset=""> </nuxt-link>
        </div>

        <div class="flex items-center">
          <div class="form">
            <div class="form-group flex">
              <input type="text" class="search_form" placeholder="i am looking for..">
            </div>
          </div>
          <div class="shop_menu flex ">
            <ul>
              <li><a href=""><i class="las la-sync-alt shop_icon"></i> Compare </a></li>
              <li><a href=""><i class="lab la-gratipay shop_icon"></i> Wishlist</a></li>
              <li><a href=""> <i class="las la-shopping-cart shop_icon"></i> Cart </a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav class="bg-white py-1 flex justify-center">
      <div class="main__container px-4 mx-auto md:flex md:items-center">
        <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          <nuxt-link :to="{ name: 'index'}" class="p-2 lg:px-4 md:mx-2 rounded">Home</nuxt-link>
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
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.search_form{
  margin-right: 40px;
  border: solid 1px rgb(197, 193, 193);
  width: 500px;
  padding: 10px;
  border-radius: 6px;
}

.shop_menu ul{
  display: flex;
  gap: 30px;
}
.shop_menu ul li> a{
  list-style: none;
}

.shop_icon{
  font-size: 25px;
}
</style>