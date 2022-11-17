<template>
    <div  style="background-color:#475467;height:100vh;">
      
      <VenuPageHeader/>
      <MyWallet/>
      <DashboardComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import MyWallet from '@/components/MyWallet.vue'
  import DashboardComp from '@/components/DashboardComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'MyProfilePage',
    components: {
        VenuPageHeader,
        DashboardComp,
        MyWallet,
        FooterMain
    }
  }
  </script>
  