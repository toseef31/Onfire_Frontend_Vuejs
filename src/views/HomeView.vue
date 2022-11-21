<template>
  <div>
    
    <HeaderTop/>
    <CoroucelComp/>
    <HomeMain/>
    <FooterMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTop from '@/components/HeaderTop.vue'
import HomeMain from '@/components/HomeMain.vue'
import CoroucelComp from '@/components/CoroucelComp.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTop,
    CoroucelComp,
    HomeMain,
    FooterMain
  }
}
</script>
