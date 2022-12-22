<template>
  <div style="height: auto;min-height: 100vh;
    background-color: #1D2939;">
      
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
  