<template>
    <div>
      
      <v-row class="px-7 pt-10 pb-3" style="background-color: #475467;">
   <v-col  cols="4" class="px-1 py-1">
    <router-link to="/SignUpPage"> <div class="imgs" :class="`elevation-${hover ? 54 : 6}`"><img width="55%" src="@/assets/profile.png" />
    <h5 class="black--text">My Profile</h5></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/MyWalletPage"> <div class="imgs"><img width="50%" src="@/assets/wallet.png" />
    <h5 class="black--text">Wallet</h5></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/AccountPurchasePage"> <div class="imgs"><img width="56%" src="@/assets/purchase.png" />
    <h5 class="black--text">My Purchases</h5></div></router-link>
</v-col>

 </v-row>
 <v-row class="px-7 pb-10 pt-3" style="background-color: #475467;">
   <v-col  cols="4" class="px-1 py-1">
    <router-link to="/IdPage"> <div class="imgs" :elevation="hover ? 24 : 6"><img width="70%" src="@/assets/ID.png" />
    <h5 class="black--text">ID Verification</h5></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/AccountQrPage"> <div class="imgs"><img width="52%" src="@/assets/code.png" />
    <h5 class="black--text">My QR</h5></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/SupportPage"> <div class="imgs"><img width="54%" src="@/assets/support.png" />
    <h5 class="black--text">Support</h5></div></router-link>
</v-col>

 </v-row>
</div>
  </template>
      
      <script>
  export default {
    name:'DashboardComp',
    data: () => ({
     
       
    }),
    
  };
  </script>
      
      <style scoped>
      .v-application .elevation-14 {
    box-shadow: 0px 7px 9px -4px rgb(0 0 0 / 59%), 0px 14px 21px 2px rgb(0 0 0 / 14%), 0px 5px 26px 4px rgb(0 0 0 / 12%) !important;
}
  .imgs{
  border: 4px solid transparent;
    border-radius: 4px;
    padding: 5px;
    background-color: #d0d5dd;
    
  }
  .imgs:hover{
    border: 4px solid #ef7e35;
  }
  .v-btn {
    text-decoration: none!important;
    text-transform: inherit;
  }
  
  
 
  </style>