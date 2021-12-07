<template>
    <div class="mt-3 home_images">
      <div class="py-4 flex gap-8">
           <div v-for="cat in cats" :key="cat.id" class="rounded">
           <div>
               <img src="~/assets/images/slider.png" class="home_images"/>
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
                id: 1,
                name: "Men Fashion"
            },
            {
                id: 3,
             name: "Men Fashion"

            },
            {
                id: 2,
                name: "Men Fashion"

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
</style>
