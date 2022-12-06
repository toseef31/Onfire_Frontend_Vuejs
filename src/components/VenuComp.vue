<template>
    <div>
 <div class="pa-4" style="background-color: #1D2939;">
<v-row class="pb-8">
<v-col>
            <div>
            <div ><img width="100%" height="140px" crossorigin="anonymous" :src="`http://138.68.27.231:3000/projectdata/eventspic/${events.eventimage}`" />
         </div>
            <h3 class="heading mt-7">{{events.eventname}}</h3>
            <p class=" mt-16 white--text text-left">{{events.Dates | formatDate}}</p>
            <p class="white--text text-left">{{events.venuename}}</p>
            <v-row>
            <v-col cols="10">
            <p class="white--text text-left pb-16">{{events.address}} </p>
            </v-col>
            <v-col cols="2">
                <img class="mt-n8" width="100%" src="@/assets/google-maps.png" />
            </v-col>
            </v-row>
        </div>
        </v-col>
 </v-row>
 </div>
 <v-row style="background-color: #475467;" class="px-4 py-4">
   <v-col cols="6" class="px-1 py-7">
    <router-link to="/TicketPage"> <div class="imgstyle"><img width="30%" src="@/assets/ticket-main.png" />
    <h2 class="black--text" style="font-size: 12px;">Buy Tickets</h2></div></router-link>
</v-col>
<v-col cols="6" class="px-1 py-7">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="30%" src="@/assets/alcoholic.png" />
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
    
  }),
  mounted() {
    
    this.pageload();
  },
  methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/events/getevent/"+this.$route.params.id
      );
      console.log(result);
      this.events =  result.data.data.event;
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