<template>
    <div style="height: auto;min-height: 100vh;
    background-color:#101828;">
      
      <VenuPageHeader/>
      <CategoryCoroucel/>
      <CategoryProducts/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import CategoryProducts from '@/components/CategoryProducts.vue'
  import CategoryCoroucel from '@/components/CategoryCoroucel.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'CategoryProductsPage',
    components: {
        VenuPageHeader,
        CategoryCoroucel,
        CategoryProducts,
        FooterMain
    }
  }
  </script>
  