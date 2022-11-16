<template>
  <div>
    
    <HeaderTop/>
    <HomeMain/>
    <FooterMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderTop from '@/components/HeaderTop.vue'
import HomeMain from '@/components/HomeMain.vue'
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderTop,
    HomeMain,
    FooterMain
  }
}
</script>
