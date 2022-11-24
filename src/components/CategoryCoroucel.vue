<template>
    <div>
      <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          style="margin-top: -29%;"
        >
        <div class="px-3 py-5 mx-5" style="background-color:#344054;border-radius:6px;">
        <p class="white-text my-6 text-center ">Create or login to the OnFire account to continue with your order</p>
        <router-link to="/LoginPage"> <div style="background-color:white;border-radius: 4px;" class="px-4 py-3" ><v-icon color="black">mdi-email-outline</v-icon><span class="ml-2 black--text">Continue with your email</span></div></router-link>
        <p class="white-text my-6 text-center ">Continue with</p>
        <div class="">
          <router-link to="/"
        >  <img width="50px" class="mr-2" src="@/assets/google.png" /></router-link>
        <router-link to="/"
        > <img width="50px" class="ml-2" src="@/assets/social.png" /></router-link>
          </div>
         <p
         
          block
          color="rgb(239 126 53 / 0%)" class=" py-2 text-h6 white--text mb-0 text-center"
            @click="overlay = false"
          >
           Cancel
        </p>
          </div>
        </v-overlay>
      <v-row style="background-color: #475467">
        <v-col class="px-6 py-7 xaxis">
            <router-link to="/FoodPage"
        >
            <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
              class="ma-1 slidebut"
              color="#E4E7EC"
              style="width: 96px; font-size: 12px; height: 52px"
              >All</v-btn
            >
            </router-link>
            <router-link to="/PizzasPage"
        >
            <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
              class="ma-1 slidebut"
              color="#E4E7EC"
              style="width: 96px; font-size: 12px; height: 52px"
              >Pizzas</v-btn
            >
            </router-link>
            <router-link to="/MenuPage"
        >
            <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
              class="ma-1 slidebut"
              color="#E4E7EC"
              style="width: 96px; font-size: 12px; height: 52px"
              >Liquer</v-btn
            >
            </router-link>
            <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
              class="ma-1 slidebut"
              color="#E4E7EC"
              style="width: 96px; font-size: 12px; height: 52px"
              >Bear</v-btn
            >
            <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
              class="ma-1 slidebut"
              color="#E4E7EC"
              style="width: 96px; font-size: 12px; height: 52px"
              >Liquer</v-btn
            >
            <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
              class="ma-1 slidebut"
              color="#E4E7EC"
              style="width: 96px; font-size: 12px; height: 52px"
              >Bear</v-btn
            >
          
        </v-col>
      </v-row>
     
    </div>
  </template>
  
  <script>
  export default {
    name: "CategoryCoroucel",
    data(){
      return{
        overlay:true,
  
      }
     },
     mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
     this.overlay=false;
    }
  },
    
  };
  </script>
  
  <style scoped>
  .im {
    border: 2px solid #475467;
    border-radius: 4px;
    padding: 6px;
   
    padding-top: 12px;
    background-color: #1d2939;
  }
  .xaxis{
    display: flex;
      overflow-x: auto;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    height: 29px;
  border:3px solid rgb(228, 231, 236);
    padding: 0 13px;
  }
  .v-btn {
    text-decoration: none;
  }
  .v-btn:hover{
    border:3px solid #EE771C!important;
  }
  .est {
    border: 2px solid #ef7e35;
    border-radius: 6px;
    padding-top: 10px;
    padding-bottom: 30px;
    background-color: #d0d5dd;
  }
  .slidebut {
    width: 96px;
    font-size: 12px;
    height: 52px;
  }
  </style>