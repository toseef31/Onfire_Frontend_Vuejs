<template>
    <div style="height:100%;background-color: #475467">
      
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
  