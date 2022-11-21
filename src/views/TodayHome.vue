<template>
    <div>
      
      <HeaderTop/>
      <CoroucelComp/>
      <TodayMain/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderTop from '@/components/HeaderTop.vue'
  import TodayMain from '@/components/TodayMain.vue'
  import CoroucelComp from '@/components/CoroucelComp.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'TodayHome',
    components: {
      HeaderTop,
      CoroucelComp,
      TodayMain,
      FooterMain
    }
  }
  </script>
  