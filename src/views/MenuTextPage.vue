<template>
    <div style="height: auto;
    min-height: 100vh;background-color: #475467">
      
      <VenuPageHeader/>
      <MenuText/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import MenuText from '@/components/MenuText.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'MenuTextPage',
    components: {
        VenuPageHeader,
        MenuText,
        FooterMain
    }
  }
  </script>
  