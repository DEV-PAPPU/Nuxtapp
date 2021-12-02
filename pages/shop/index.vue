<template>
  <div class="text-center  mx-auto">

    <div v-if="products.length" class="product grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-10 w-full">
      <div v-for="product in products" :key="product.id" class="">

        <div class="mb-2">
          <div
            class="border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white  shadow-sm hover:shadow-sm border-b-8 border-green-700">

            <img :src="url+product.image" class="product-image">
            <div class="p-6">

              <h1 class="title-font text-lg font-medium text-gray-900">
                {{product.price}}</h1>
              <h1 class="title-font text-sm font-medium text-gray-900 mt-2 mb-4">{{product.title}}

              </h1>
             
              <div class="flex items-center">
                <nuxt-link :to="'/shop/'+product.slug"
                  class="text-white inline-block rounded mr-3 bg-green-600 hover:bg-green-700 py-1 px-10">
                  View</nuxt-link>

                <button @click="addTocart(product)"
                  class="rounded bg-green-600 text-md text-white hover:bg-green-700 py-1 px-3">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <tbody v-else>
      <tr>
        <td colspan="6">
          <h5 class="text-center mt-4 mb-4">No product Found.</h5>
        </td>
      </tr>
    </tbody>

  </div>
</template>
<script>
export default {
  data() {
    return {
        url:'http://ecommerce.test/',
        products:{},
    }
  },

  created(){
    this.loadProduct();
  },

  methods: {
    
    async loadProduct() {
        try {
               this.$axios.get('shop').then(res =>{
                   console.log(res);
                   this.products = res.data
               })
             } 

            catch (err) {
                console.log(err);
                this.$toast.error({
                    title: 'Error!',
                    message: 'Someting is wrong!',
                });
            }
     
    }
  }
}
</script>