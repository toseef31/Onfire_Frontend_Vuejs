<template>
    <div>
      
      <VenuPageHeader/>
      <UpdatePasswordComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import UpdatePasswordComp from '@/components/UpdatePasswordComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'UpdatePasswordPage',
    components: {
        VenuPageHeader,
        UpdatePasswordComp,
        FooterMain
    }
  }
  </script>
  