<template>
    <div class="home_hero_brands">
      <div class="py-4 flex gap-4">
           <div v-for="cat in cats" :key="cat.id" class="p-3 bg-white rounded">
           <div>
               <img src="~/assets/images/slider.png" class="home_rignt_product_img"/>
           </div>
           <h2 class="mt-2">{{cat.name}}</h2>
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
            {
                id: 4,
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
