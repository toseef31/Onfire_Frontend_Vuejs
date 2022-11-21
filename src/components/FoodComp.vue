<template>
    <div>
      
      <div class="py-4 px-2" style="background-color: #1d2939;height: 100vh;">
       
        <v-row class="px-2 py-2 flex-grow-1">
          <v-col cols="6" class="px-1 py-1">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                <img width="100%" src="@/assets/melt.png" />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Melt Pizzas</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Esper Approx: 16 mins</p>
              </v-row>
             
              </div></router-link
            >
          </v-col>
          <v-col cols="6" class="px-1 py-1 flex-grow-1">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                <img  class="my-5" width="100%" src="@/assets/fuente.png" />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Melt Pizzas</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Esper Approx: 16 mins</p>
              </v-row>
             
              </div></router-link
            >
          </v-col>
         
        </v-row>
        <v-row class="px-2 py-2">
          <v-col cols="6" class="px-1 py-1">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                <img width="100%" src="@/assets/image1232.png" />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Melt Pizzas</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Esper Approx: 16 mins</p>
              </v-row>
             
              </div></router-link
            >
          </v-col>
          <v-col cols="6" class="px-1 py-1">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                <img width="100%" src="@/assets/yo.png" />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Melt Pizzas</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Esper Approx: 16 mins</p>
              </v-row>
             
              </div></router-link
            >
          </v-col>
         
        </v-row>
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FoodComp",
    data(){
      return{
        counter:0
  
      }
     },
     methods: {
        add(){
            this.counter +=1;
        },
        decrease(){
          if(this.counter!=0){
                    this.counter -=1;
          }
        }
      }
  };
  </script>
  
  <style scoped>
  .im {
    border: 2px solid #475467;
    border-radius: 4px;
    padding: 6px;
   
    padding-top: 12px;
    background-color: #47546714;
  }
  .xaxis{
    display: flex;
      overflow-x: auto;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    height: 29px;
  
    padding: 0 13px;
  }
  .v-btn {
    text-decoration: none;
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