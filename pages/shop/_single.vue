<template>
     <div class="text-center max-w-2xl mx-auto">
          <h1 class="text-3xl md:text-4xl font-medium mb-2">product single {{product.title}}</h1>
          <div class="mt-4">
            <img :src="url+product.image"
              class="d-block max-w-full rounded shadow-md">
          </div>
          <button class="bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6">Get Started</button>
        </div>
</template>

<script>
export default {
  data() {
    return {
        url: process.env.url,
        product:{},
    }
  },

  created(){
      const slug = this.$route.params.single;
        this.$axios.get(`product-single/${slug}`).then(res =>{
        console.log(res);
        this.product = res.data
      })
  },

  methods: {
    
  }
}
</script>