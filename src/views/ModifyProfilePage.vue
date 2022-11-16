<template>
    <div>
      
      <VenuPageHeader/>
      <ModifyProfile/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import ModifyProfile from '@/components/ModifyProfile.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'ModifyProfilePage',
    components: {
        VenuPageHeader,
        ModifyProfile,
        FooterMain
    }
  }
  </script>
  