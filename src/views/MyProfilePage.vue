<template>
    <div style="background-color:#475467;height: auto;
    min-height: 100vh;overflow: hidden;">
      
      <VenuPageHeader/>
      <MyProfileComp/>
      <DashboardComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import MyProfileComp from '@/components/MyProfileComp.vue'
  import DashboardComp from '@/components/DashboardComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'MyProfilePage',
    components: {
        VenuPageHeader,
        MyProfileComp,
        DashboardComp,
        FooterMain
    }
  }
  </script>
  