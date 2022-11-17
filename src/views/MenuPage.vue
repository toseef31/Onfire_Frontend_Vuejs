<template>
    <div>
      
      <VenuPageHeader/>
      <CategoryCoroucel/>
      <MenuView/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import MenuView from '@/components/MenuView.vue'
  import CategoryCoroucel from '@/components/CategoryCoroucel.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'MenuPage',
    components: {
        VenuPageHeader,
        CategoryCoroucel,
        MenuView,
        FooterMain
    }
  }
  </script>
  