<template>
    <div style="height: auto;
    min-height: 100vh;background-color:#D0D5DD;">
      
      <VenuPageHeader/>
      <LoginComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import LoginComp from '@/components/LoginComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'SignUpPage',
    components: {
        VenuPageHeader,
        LoginComp,
        FooterMain
    }
  }
  </script>
  