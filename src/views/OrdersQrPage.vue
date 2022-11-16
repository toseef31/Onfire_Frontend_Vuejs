<template>
    <div>
      
      <VenuPageHeader/>
      <OrdersQr/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import OrdersQr from '@/components/OrdersQr.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'OrderQrPage',
    components: {
        VenuPageHeader,
        OrdersQr,
        FooterMain
    }
  }
  </script>
  