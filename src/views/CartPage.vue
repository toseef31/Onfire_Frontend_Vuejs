<template>
    <div style="height: auto;
    min-height: 100vh;background-color: #475467;overflow: hidden;">
      
      <VenuPageHeader/>
      <CategoryCoroucel/>
      <CartComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import CartComp from '@/components/CartComp.vue'
  import CategoryCoroucel from '@/components/CategoryCoroucel.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'ProductPage',
    components: {
        VenuPageHeader,
        CategoryCoroucel,
        CartComp,
        FooterMain
    }
  }
  </script>
  