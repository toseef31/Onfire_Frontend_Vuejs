<template>
    <div>
      
      <VenuPageHeader/>
      <TicketShopping/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import TicketShopping from '@/components/TicketShopping.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'TicketShoppingPage',
    components: {
        VenuPageHeader,
        TicketShopping,
      FooterMain
    }
  }
  </script>
  