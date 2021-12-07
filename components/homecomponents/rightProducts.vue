<template>
    <div class="home_sidebar bg-blue-300 w-4/12">
       <div class="bg-blue-200 px-5 py-4">
         <h1>Todays Deal <span class="home_bags">Hot</span></h1>
       </div>
      <div class="px-2 py-4">
           <div v-for="cat in cats" :key="cat.id" class="bg-white p-3 my-3 rounded">
           <div>
               <img src="~/assets/images/slider.png" class="home_rignt_product_img"/>
           </div>
       </div>
      </div>
    </div>
</template>

<script>

export default ({
     data() {
    return {
        cats:[
            {
                id: 1
            },
            {
                id: 3
            },
            {
                id: 2
            },
            {
                id: 4
            },
        ]
    }
  },
})
</script>

<style scoped>
.home_rignt_product_img{
    width: 180px;
}

.home_sidebar{
    height: 526px;
    overflow-y: hidden;
}
</style>
