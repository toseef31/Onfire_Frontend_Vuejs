<template>
    <div>
      
      <VenuPageHeader/>
      <GeneralParking/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import GeneralParking from '@/components/GeneralParking.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'ParkigQrPage',
    components: {
        VenuPageHeader,
        GeneralParking,
      FooterMain
    }
  }
  </script>
  