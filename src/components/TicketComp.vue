<template>
  <div>
    <div class="pa-2" style="background-color: #1d2939!important;
    padding-bottom: 70px!important;">
      <div class="px-2 ma-0">
        <v-row class="pa-0 ma-0" style="background-color: #101828">
          <v-col class="px-0 py-0" style="background-color: #1d2939">
            <div class="est" style="background-color: #1d2939">
              <p class="white--text float-left px-3">June 22:</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-row v-for="item in ticketspurchased"
            :key="item.id" class="pb-1 px-3 mx-2" style="background-color: #344054">
        <div v-if="item.event._id != ticketcheck" style="display: inherit; width:100%;">
            <v-col cols="6" class="pa-0 mt-6">
          
              <img
                  width="100%"
                  height="100%px"
                  crossorigin="anonymous"
                  style="border-radius: 3px;"
                  :src="`http://138.68.27.231:3000/projectdata/eventspic/${item.event.eventimage}`"
                />
        </v-col>
        <v-col cols="6" class="px-5 mt-6">
          <v-row >
            <h3 :set="ticketcheck = item.event._id" class="heading" style="font-size: 10px">{{item.event.eventname}}</h3>
            
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Saturday, 15th January 2022, 7pm
            </p>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Espacio Riesco
            </p>
          </v-row>
          <v-row>
            <v-col cols="10" class="pa-0">
              <p class="white--text text-left pb-1" style="font-size: 10px">
                Avenida El Salto 5000, Huechuraba, Region Mero politana
              </p>
            </v-col>
            <v-col cols="2" class="ma-0 pa-0">
              <img class="mt-n2" width="100%" src="@/assets/google-maps.png" />
            </v-col>
          </v-row>
        </v-col>
        </div>
        <div
          style="background-color: #70afe3; border-radius: 12px;width:100%"
          class="pa-3 mt-5"
        >
        
        <router-link :to="`/ParkigQrPage/${item.id}`">
          <v-row>
            <v-col cols="3">
              <img width="100%" src="@/assets/qr.png" />
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="white--text text-left mt-4 mb-0" style="font-size: 12px">
               {{ item.ticketquantity }} x {{item.ticketname}}

              </p>
              <p class="white--text text-left mt-0 mb-0" style="font-size: 12px">
               Price x {{item.price}}

              </p>
              <p class="white--text text-left mt-0" style="font-size: 12px">
               {{item.status}}

              </p>
            </v-col>
            <v-col cols="1" class="pa-0 mt-8">
              <img width="100%" src="@/assets/parking.png" />
            </v-col>
          </v-row>
          </router-link>
        </div>
       <!--<div
          style="background-color: #ef7e35; border-radius: 12px"
          class="pa-3 mt-5"
        >
        <router-link to="/GeneralAdmissionPage"
        >
          <v-row>
            <v-col cols="3">
              <img width="100%" src="@/assets/qr.png" />
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="white--text text-left mt-4" style="font-size: 12px">
                Avenida El Salto 5000, Huechuraba, Region Mero politana
              </p>
            </v-col>
          </v-row>
          </router-link>
        </div>//-->
      </v-row>
      
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TicketComp",
  data() {
    return {
      name: "",
      ticketspurchased:[],
      ticketcheck:"",
      id: "",
      ticket:"",
      eventmenu:""
    };
  },
  mounted() {
    this.pageload();
    console.alert("i am in");
  },
 
    methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/ticket/getalluserticket"
      );

      this.ticketspurchased = result.data.data.tickets;
      console.log( this.ticketspurchased);
      this.event = this.$route.params.id;
      console.log( "event id"+this.event);
    },
    
  },

};
</script>

<style>
.imgstyle {
  border: 4px solid #ef7e35;
  border-radius: 4px;
  padding: 20px;
  background-color: #d0d5dd;
}
</style>