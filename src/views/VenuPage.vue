<template>
    <div style="height: auto;min-height: 100vh;
    background-color:#475467;">
      
      <VenuPageHeader/>
      <VenuComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import VenuComp from '@/components/VenuComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'VenuPage',
    components: {
        VenuPageHeader,
      VenuComp,
      FooterMain
    }
  }
  </script>
  