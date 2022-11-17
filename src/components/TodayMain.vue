<template>
    <v-container class="ma-0  pt-0 pb-14 px-0" style="background-color:#1D2939;">
      <v-row class="ma-0 pa-0">
        <v-col  class="ma-0 pa-0">
            <img width="100%" src="@/assets/banner.png" /></v-col>
      </v-row>
      <v-row class="#101828 ma-n3 pa-1" style="background-color:#101828;">
        <v-col cols="6" class="pr-1 py-0">
            <router-link to="/TodayHome"> <v-btn class="today">Today</v-btn></router-link>
        </v-col>
        <v-col cols="6" class="pr-1 py-0">
            <router-link to="/"> <v-btn class="view">View Venus</v-btn></router-link>
        </v-col>
      </v-row>
     <v-row  class="px-3 py-0" style="background-color:#1D2939">
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
    name:'HomeMain',
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