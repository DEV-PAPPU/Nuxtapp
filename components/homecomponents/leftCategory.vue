<template>
    <div class="home_sidebar bg-white w-5/12">
       <div class="bg-blue-200 px-5 py-4">
         <h1>Categories See All ></h1>
       </div>
      <div class="px-5 py-4">
           <div v-for="cat in cats" :key="cat.id" class="py-1">
          <p>Category name</p>
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
                id: 9
            },
            {
                id: 8            },
            {
                id: 5
            },
        ]
    }
  },
})
</script>

<style scoped>
.home_sidebar{
    height: 526px;
}
</style>
