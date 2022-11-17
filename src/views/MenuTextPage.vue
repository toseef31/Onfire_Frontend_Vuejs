<template>
    <div>
      
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
  