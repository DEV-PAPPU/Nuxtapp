<template>
  <div>
    <div class="hero_section">
      <div class="flex gap-5">
        <leftCategory />
        <div>
          <HomeSlider />
          <HeroBrands />
        </div>
        <!-- <Tutorial/> -->
        <RightProducts />
      </div>
    </div>

    <div class="image_section">
      <ImageSection/>
    </div>
    <div>
      <RecentProducts/>
    </div>
  </div>
</template>

<script>
import leftCategory from "@/components/homecomponents/leftCategory";
import HomeSlider from "@/components/homecomponents/slider";
import RightProducts from "@/components/homecomponents/rightProducts";
import HeroBrands from "@/components/homecomponents/brands";
import ImageSection from "@/components/homecomponents/imageSection";
import RecentProducts from "@/components/homecomponents/recentProducts";

export default {
  components: {
    leftCategory,
    HomeSlider,
    RightProducts,
    HeroBrands,
    ImageSection,
    RecentProducts,
  }
}
</script>
