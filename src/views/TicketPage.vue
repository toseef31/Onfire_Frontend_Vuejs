<template>
    <div>
      
      <VenuPageHeader/>
      <TicketComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import TicketComp from '@/components/TicketComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'TicketPage',
    components: {
        VenuPageHeader,
        TicketComp,
      FooterMain
    }
  }
  </script>
  