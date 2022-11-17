<template>
    <div>
      
      <VenuPageHeader/>
      <EventPoint/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import EventPoint from '@/components/EventPoint.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'ProductPage',
    components: {
        VenuPageHeader,
        EventPoint,
      FooterMain
    }
  }
  </script>
  