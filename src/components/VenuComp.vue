<template>
    <div>
 <div class="pa-4" style="background-color: #1D2939;">
<v-row class="pb-0">
<v-col>
            <div>
            <div ><img width="100%" height="188px" crossorigin="anonymous" :src="`http://138.68.27.231:3000/projectdata/eventspic/${events.eventimage}`" />
         </div>
            <h3 class="heading mt-7">{{events.eventname}}</h3>
            <p class=" mt-16 mb-0 white--text text-left">{{events.Dates | formatDate}}</p>
            <p class="white--text text-left mb-0">{{events.venue.venuename}}</p>
            <v-row>
            <v-col cols="10">
            <p class="white--text text-left pb-16">{{events.venue.Location.address}} </p>
            </v-col>
            <v-col cols="2">
                <img class="mt-n1" width="100%" src="@/assets/google-maps.png" />
            </v-col>
            </v-row>
        </div>
        </v-col>
 </v-row>
 </div>
 <v-row  v-show="ticket" style="background-color: #475467;" class="px-4 py-2">
   <v-col v-show="ticket" cols="6" class="px-1 py-7">
    <router-link to="/TicketPage"> <div class="imgstyle"><img width="30%" src="@/assets/ticket-main.png" />
    <h2 class="black--text" style="font-size: 12px;">Buy Tickets</h2></div></router-link>
</v-col>
<v-col cols="6"  class="px-1 py-7">
  <router-link :to="`/ProductPage/${id}`"><div class="imgstyle"><img width="30%" src="@/assets/alcoholic.png" />
    <h2 class="black--text" style="font-size: 12px;">Buy Food & Drinks</h2></div></router-link>
</v-col>
 </v-row>
 <v-row  v-show="!ticket" style="background-color: #475467;" class="px-4 py-2 ma-0">
   
<v-col cols="12"  class="px-10 py-7 pt-2">
  <router-link :to="`/ProductPage/${id}`"><div class="imgstyle"><img width="30%" src="@/assets/alcoholic.png" />
    <h2 class="black--text" style="font-size: 12px;">Buy Food & Drinks</h2></div></router-link>
</v-col>
 </v-row>
</div>
</template>

<script>
import axios from "axios";
export default {
name:'VenuComp',
data: () => ({
    id: "",
    userdata: "",
    name: "",
    email: "",
    path: "",
    events:[],
    customerid:"",
    ticket:"",
    venuename:""
  }),
  mounted() {
    
    this.pageload();
  },
  methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/events/getevent/"+this.$route.params.id
      );
      
      this.events =  result.data.data.event;
      this.id=this.$route.params.id;
      this.ticket=result.data.data.event.Tickets;
      console.log("ticket:" +this.ticket);
      this.venuename=result.data.data.event.venue.venuename;
      console.log("venue" +this.venuename);
    },
}
}
</script>

<style>
.imgstyle{
    border: 4px solid #EF7E35;
    border-radius: 4px;
    padding: 20px;
    background-color: #D0D5DD;
}
</style>