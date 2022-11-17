<template>
    <div>
      
      <VenuPageHeader/>
      <CategoryCoroucel/>
      <OrdersComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import OrdersComp from '@/components/OrdersComp.vue'
  import CategoryCoroucel from '@/components/CategoryCoroucel.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'OrdersPage',
    components: {
        VenuPageHeader,
        CategoryCoroucel,
     OrdersComp,
      FooterMain
    }
  }
  </script>
  