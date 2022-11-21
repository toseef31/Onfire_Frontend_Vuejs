<template>
    <v-container class="ma-0  pt-0 pb-14 px-0" style="background-color:#1D2939;">
      
      <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          style="margin-top: -29%;"
        >
        <div class="px-1 py-5 mx-5" style="background-color:#344054;border-radius:6px;">
        <p class="white-text my-6 text-center ">We do not know where you are!</p>
         <p class="white-text my-7 text-center px-1">We need to share your location or select a city to view available events & venues</p>
         
         <v-btn
         block
          :class="`elevation-${hover ? 54 : 14}`"
          style="font-size:14px!important;"
          color="#EF7E35" class=" py-6 text-h4 black--text"
           
          >
           ACTIVATE LOCATION SHARING
          </v-btn>
          <p
          style="font-size:14px!important;"
          block
         color="rgb(239 126 53 / 0%)" class="text-decoration-underline py-1 text-h4 white--text mt-3 text-center"
         @click="change"
         >
          Select your location
       </p>
          <p
          style="font-size:14px!important;"
          block
          color="rgb(239 126 53 / 0%)" class=" py-2 text-h4 white--text mb-0 text-center"
            @click="close"
          >
           Cancel
        </p>
          </div>
        </v-overlay>
        <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="location"
          style="margin-top: -29%;"
        >
        <div class="px-1 py-5 mx-5" style="background-color:#344054;border-radius:6px;">
        <p class="white-text my-6 text-center ">Country & City!</p>
         <p class="white-text my-7 text-center px-1">In which country and city do you want to see what's happening</p>
         
         <v-btn
         block
          :class="`elevation-${hover ? 54 : 14}`"
          style="font-size:14px!important;"
          color="#EF7E35" class=" py-8 text-h6 black--text text--right"
           
          >
           <v-icon class="mr-2">mdi-map-marker-circle</v-icon> My Location
          </v-btn>
         <h4 class="my-4">OR</h4>
         <v-select
          :items="items"
          filled
           class=" mx-2 black--text text--right"
          label="Country"
        ></v-select>
        <v-select
          :items="items"
          filled
           class=" mx-2 black--text text--right"
          label="City"
        ></v-select>
          <p
          style="font-size:14px!important;"
          block
          color="rgb(239 126 53 / 0%)" class=" py-2 text-h4 white--text mb-0 text-center"
            @click="close"
          >
           Cancel
        </p>
          </div>
        </v-overlay>
      <v-row class="#101828 mt-0 px-1" style="background-color:#101828;">
        <v-col cols="6" class="pr-1 py-0 pb-0">
            <router-link to="/TodayHome"> <v-btn class="today">Today</v-btn></router-link>
        </v-col>
        <v-col cols="6" class="pr-1 py-0 pb-0">
            <router-link to="/"> <v-btn class="view">View Venus</v-btn></router-link>
        </v-col>
      </v-row>
     <v-row  class="px-3 pt-0 pb-3" style="background-color:#1D2939">
        <v-col cols="6">
            <router-link to="/VenuPage">  <div class="colum">
            <div ><img width="100%" src="@/assets/banner011.png" /></div>
            <h5 class="heading">Le Feria</h5>
        </div></router-link>
        </v-col>
        <v-col cols="6" >
            <div class="colum">
            <div ><img width="100%" src="@/assets/banner121.png" /></div>
            <h5 class="heading">Espacio Riesco</h5>
        </div>
        </v-col>
      </v-row>
      <v-row class="px-3 py-0" style="background-color:#1D2939">
        <v-col cols="6">
            <div class="colum">
            <div><img  width="100%" src="@/assets/Banner111.png" /></div>
            <h5 class="heading">Movistar Arena</h5>
            </div>
        </v-col>
        <v-col cols="6">
            <div class="colum">
            <div ><img width="90%" src="@/assets/banner011.png" /></div>
            <h5 class="heading">Le Feria</h5>
        </div>
        </v-col>
      </v-row >
      <v-row class="#101828 ma-n3 pa-1" style="background-color:#101828;">
        <v-col class="pr-1 py-0">
            <router-link to="/TodayHome"> <v-btn class="today">June</v-btn></router-link>
        </v-col>
       
      </v-row>
      <v-row  class="px-3 py-0" style="background-color:#1D2939">
        <v-col cols="6">
            <div class="colum">
            <div ><img width="100%" src="@/assets/banner011.png" /></div>
            <h5 class="heading">Le Feria</h5>
        </div>
        </v-col>
        <v-col cols="6" >
            <div class="colum">
            <div ><img width="100%" src="@/assets/banner121.png" /></div>
            <h5 class="heading">Espacio Riesco</h5>
        </div>
        </v-col>
      </v-row>
      <v-row class="px-3 py-0" style="background-color:#1D2939">
        <v-col cols="6">
            <div class="colum">
            <div><img  width="100%" src="@/assets/Banner111.png" /></div>
            <h5 class="heading">Movistar Arena</h5>
            </div>
        </v-col>
        <v-col cols="6">
            <div class="colum">
            <div ><img width="90%" src="@/assets/banner011.png" /></div>
            <h5 class="heading">Le Feria</h5>
        </div>
        </v-col>
      </v-row >
    
      
      
      
    </v-container>
    </template>
    
    <script>
    export default {
    name:'TodayMain',
    data(){
        return{
            items: ['france', 'china', 'pakistan', 'india'],
            absolute: true,
      opacity: 0,
      overlay: true,
      location:false,
        }
    },
    methods: {
        change(){
      this.overlay = false;
    this.location = true;
        },
        close(){
            this.overlay = false;
    this.location = false;
        }
    }
    }
    </script>
    
    <style>
    .view{
        float: right;
        background-color: transparent!important;
        color: white!important;
        text-transform: inherit;
        text-decoration:underline;
    }
    .row + .row {
    margin-top: 11px;
}
.font{
    font-size: 14px!important;
}
    .today{
        float: left;
        background-color: transparent!important;
        color: white!important;
        text-transform: inherit;
        
    }
    .colum{
        background-color: #344054;
        border-radius: 4px;
        padding: 6px 6px 30px 6px;
       
    }
    .gallery{
        background-color: white;
        padding: 19px 4px;
        border-radius: 4px;
    
    }
    
    body{
        overflow-x:hidden ;
    }
    .col-6{
        width: 100%;
        padding: 6px;
    }
    .heading{
    color: white!important;
    float:left;
    margin-top:6px;
    }
    </style>