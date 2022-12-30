<template>
  <div style="background-color: #1d2939; height: 100vh" class="pt-8 px-4">
    <div style="background-color: #70afe3;display:block!important; border-radius: 12px" class="px-16 py-8 mt-6" >
      
        <v-row v-for="item in ticketspurchased"
            :key="item.id" style="display:block!important;">
          <div v-if="item.id == id" class="text-center" style="display:block!important;">
          <v-col cols="12" class="pa-0">
            <p class="white--text mt-4" style="font-size: 20px">
              {{ item.ticketquantity }} x {{item.ticketname}}<br>Sat, 15 January
            </p>
            <h2 class="text--black">{{item.status}}</h2>
          </v-col>
         
          <v-col cols="12">
            <p v-html="item.ticketqr"></p>
          </v-col>
          </div>
        </v-row>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GeneralParking",
  data() {
    return {
     id:"",
     ticketspurchased:[]
    };
  },
  mounted() {
    this.pageload();
    console.alert("i am in");
  },
 
    methods: {
    async pageload() {
      this.id=this.$route.params.id;
      console.log("ID",this.id);
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
</style>