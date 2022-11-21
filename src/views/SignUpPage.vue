<template>
    <div style="height: auto;
    min-height: 100vh;">
      
      <VenuPageHeader/>
      <SignUpComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import SignUpComp from '@/components/SignUpComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'SignUpPage',
    components: {
        VenuPageHeader,
        SignUpComp,
        FooterMain
    }
  }
  </script>
  