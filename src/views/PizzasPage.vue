<template>
    <div>
      
      <VenuPageHeader/>
      <CategoryCoroucel/>
      <PizzasComp/>
      <FooterMain/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import VenuPageHeader from '@/components/VenuPageHeader.vue'
  import PizzasComp from '@/components/PizzasComp.vue'
  import CategoryCoroucel from '@/components/CategoryCoroucel.vue'
  import FooterMain from '@/components/FooterMain.vue'
  
  export default {
    name: 'PizzasPage',
    components: {
        VenuPageHeader,
        PizzasComp,
        CategoryCoroucel,
    
      FooterMain
    }
  }
  </script>
  