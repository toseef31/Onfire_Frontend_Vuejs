<template>
    <div>
      
      <VenuPageHeader/>
      <CategoryCoroucel/>
      <FoodComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import FoodComp from '@/components/FoodComp.vue'
  import CategoryCoroucel from '@/components/CategoryCoroucel.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'AccountPurchasePage',
    components: {
        VenuPageHeader,
        FoodComp,
        CategoryCoroucel,
        FooterMain
    }
  }
  </script>
  