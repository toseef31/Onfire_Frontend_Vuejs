<template>
    <div>
      
      <VenuPageHeader/>
      <AccountPurchase/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import AccountPurchase from '@/components/AccountPurchase.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'AccountPurchasePage',
    components: {
        VenuPageHeader,
        AccountPurchase,
        FooterMain
    }
  }
  </script>
  