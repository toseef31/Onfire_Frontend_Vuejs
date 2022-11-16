<template>
    <div>
      
      <HeaderTop/>
      <TodayMain/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderTop from '@/components/HeaderTop.vue'
  import TodayMain from '@/components/TodayMain.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'TodayHome',
    components: {
      HeaderTop,
      TodayMain,
      FooterMain
    }
  }
  </script>
  