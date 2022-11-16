<template>
    <div>
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