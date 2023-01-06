<template>
    <div style="height: auto;min-height: 100vh;
    background-color:#475467;overflow: hidden;">
      
      <VenuPageHeader/>
      <GeneralBar/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import GeneralBar from '@/components/GeneralBar.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'ProductPage',
    components: {
        VenuPageHeader,
     GeneralBar,
      FooterMain
    }
  }
  </script>
  