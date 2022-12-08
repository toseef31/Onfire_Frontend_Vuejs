<template>
    <div>
      
      <div class="py-4 px-2" style="background-color: #1d2939;height: 100vh;">
       
        <v-row class="px-2 py-2 flex-grow-1">
          <v-col cols="6" class="px-1 py-1"  v-for="item in products"
        :key="item.id">
            <router-link to="/ProductPage">
              <div class="im px-5 py-6">
                <v-row class="d-inline-flex">
                  <img
              width="100%"
              height="80px"
              crossorigin="anonymous"
              :src="`http://138.68.27.231:3000/projectdata/foodservicepoint/${item.fpointimage}`"
            />
              </v-row>
              <v-row>
                <h4 class="white--text text-left text-uppercase" style="font-size:14px;font-weight: 500;">{{item.fpointname}}</h4>
              </v-row>
              <v-row>
                <p class="white--text text-left ma-0 my-1" style="font-size:14px;">{{item.fpointdescription}}</p>
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
  import axios from "axios";
  export default {
    name: "FoodComp",
    data(){
      return{
        
  products:[],
  image:""
      }
     },
     mounted() {
    this.pageload();
  },
  methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/service/getfoodservicepoint/" +
          this.$route.params.id
      );

      this.products = result.data.data.servicepoint.food_servicepoints;
      
    },
  },

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