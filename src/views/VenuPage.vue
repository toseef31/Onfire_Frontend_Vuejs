<template>
    <div>
      
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
  