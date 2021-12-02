<template>
  <div>
    <Header />
    <div class="bg-indigo-100 py-6 md:py-12">
      <div class="container px-4 mx-auto">
        <nuxt/>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<script lang="ts">
import Header from '../layouts/partials/header.vue';
import Footer from '../layouts/partials/footer.vue';

export default ({
    components:{Header,Footer}
})
</script>

<style>
body{
    overflow-x: hidden;
}
</style>