<template>
    <v-card
      flat
      tile
    
    >
      <v-toolbar
        color="#101828"
        dark
        class="pa-n8"
      >
      <v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon>
  
       <h3 class="ml-4">Hernan Caetana</h3>
       <v-spacer></v-spacer>
  
       <router-link to="/CartPage"><v-btn>
    <v-icon class="mr-n3" color="#EF7E35">mdi-cart</v-icon>
  </v-btn>
</router-link>
      </v-toolbar>
     
      
      
    </v-card>
  </template>

<script>
export default {
    name: 'VenuPageHeader',
}
</script>

<style scoped>

.v-btn{
  background-color:transparent!important ;
}

</style>