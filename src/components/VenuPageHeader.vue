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
  
       <h3 class="ml-4">{{ $route.meta.title }}</h3>
       <v-spacer></v-spacer>
       
       <router-link to="/CartPage"><v-badge
        bordered
        color="#EF7E35"
        content="0"
        overlap
      
      >
        
        <img width="100%" src="@/assets/Cart.png" />
  </v-badge>
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
.theme--dark.v-badge .v-badge__badge::after {
    border-color: rgb(239, 126, 53)!important;
}
.v-application--is-ltr .v-badge__badge {
    
    margin-left: -20px!important;
    margin-bottom: -7px!important;
    border: 1px solid rgb(239, 126, 53)!important;
}

</style>