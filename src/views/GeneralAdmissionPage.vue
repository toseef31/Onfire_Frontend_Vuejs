<template>
    <div>
      
      <VenuPageHeader/>
      <GeneralAdmission/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import GeneralAdmission from '@/components/GeneralAdmission.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'TicketPage',
    components: {
        VenuPageHeader,
        GeneralAdmission,
      FooterMain
    }
  }
  </script>
  