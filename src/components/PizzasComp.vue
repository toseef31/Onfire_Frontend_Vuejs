<template>
    <div class="flex">
      
      <div class="pa-4" style="background-color: #1d2939;height:100vh">
        <v-row>
          <v-col class="px-3 py-2 " style="background-color:#101828;">
            <router-link to="/ProductPage">
              <div class="est">
                <p class="black--text float-left px-3">
                  Estimated Wait:<span class="font-weight-bold"> 8mins</span>
                </p>
                <p class="black--text float-right px-3">
                  Orders:<span class="font-weight-bold"> 12</span>
                </p>
              </div></router-link
            >
          </v-col>
        </v-row>
        <v-row class="px-2 py-2">
          <v-col cols="6" class="pl-0 pr-2 py-1 flex-grow-1">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                <img width="100%" src="@/assets/pizza1.png" />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Chickern BBQ</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
              <v-row>
                <p class="float-left ma-0 " style="color:#EF7E35;">$11.99</p>
              </v-row>
              <v-row class="d-flex justify-end">
                <v-btn color="#EF7E35" class="float-right mt-6">Agregar</v-btn>
              </v-row>
              </div></router-link
            >
          </v-col>
          <v-col cols="6" class="pl-2 pr-0 py-1">
            
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                  <img width="100%" src="@/assets/pizza2.png" />
                </v-row>
                <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Dobble Peprone</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
                <v-row>
                  <p class="white--text float-left ma-0">$15.00</p>
                </v-row>
                <v-row>
                  <v-col cols="4" >
                    <v-btn class="mr-n3" @click="decrease" style="background-color: transparent;
      border: 1px solid #EF7E35;min-width: 29px; width: 29px; float: right"
                      ><v-icon color="#EF7E35">mdi-minus</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="4">
                    <h3 class="white--text">{{counter}}</h3>
                  </v-col>
                  <v-col cols="4" >
                    <v-btn class="ml-n3" @click="add" style="background-color: transparent;
      border: 1px solid #EF7E35;min-width: 29px; width: 29px; float: left"
                      ><v-icon color="#EF7E35">mdi-plus</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </div>
          </v-col>
         
        </v-row>
        <v-row class="px-2 py-2">
          <v-col cols="6" class="pl-0 pr-2 py-1">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                <img width="100%" src="@/assets/pizza3.png" />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Chickern BBQ</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
              <v-row>
                <p class="float-left ma-0 " style="color:#EF7E35;">$11.99</p>
              </v-row>
              <v-row class="d-flex justify-end">
                <v-btn color="#EF7E35" class="float-right mt-6">Agregar</v-btn>
              </v-row>
              </div></router-link
            >
          </v-col>
          <v-col cols="6" class="pl-2 pr-0 py-1">
            
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                  <img width="100%" src="@/assets/pizza4.png" />
                </v-row>
                <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">Dobble Peprone</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">Las Majeso Pizzas Para satisfacer tu bajon de hambre</p>
              </v-row>
                <v-row>
                  <p class="white--text float-left ma-0">$15.00</p>
                </v-row>
                <v-row>
                  <v-col cols="4" >
                    <v-btn class="mr-n3" @click="decrease" style="background-color: transparent;
      border: 1px solid #EF7E35;min-width: 29px; width: 29px; float: right"
                      ><v-icon color="#EF7E35">mdi-minus</v-icon></v-btn
                    >
                  </v-col>
                  <v-col cols="4">
                    <h3 class="white--text">{{counter}}</h3>
                  </v-col>
                  <v-col cols="4" >
                    <v-btn class="ml-n3" @click="add" style="background-color: transparent;
      border: 1px solid #EF7E35;min-width: 29px; width: 29px; float: left"
                      ><v-icon color="#EF7E35">mdi-plus</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
              </div>
          </v-col>
         
        </v-row>
        
      
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PizzasComp",
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
    height: 26px;
  
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