<template>
    <div style="height: auto;min-height: 100vh;
    background-color:#101828;">
      
      <VenuPageHeader/>
      <EventComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import EventComp from '@/components/EventComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'EventPage',
    components: {
        VenuPageHeader,
      EventComp,
      FooterMain
    }
  }
  </script>
  