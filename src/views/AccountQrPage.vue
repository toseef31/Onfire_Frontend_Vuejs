<template>
    <div>
      
      <VenuPageHeader/>
      <AccountQr/>
      <DashboardComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import AccountQr from '@/components/AccountQr.vue'
  import DashboardComp from '@/components/DashboardComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  
  export default {
    name: 'AccountQrPage',
    components: {
        VenuPageHeader,
        AccountQr,
        DashboardComp,
        FooterMain
    }
  }
  </script>
  