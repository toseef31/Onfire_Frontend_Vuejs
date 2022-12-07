<template>
  <div>
    <div class="pa-4" style="background-color: #1d2939">
      <v-row class="pb-0">
        <v-col class="pb-1">
          <div class="pb-16 mt-1">
            <img
              width="100%"
              height="188px"
              crossorigin="anonymous"
              :src="`http://138.68.27.231:3000/projectdata/eventspic/${events.eventimage}`"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <p class="white--text float-left mb-0">Choose Where to order</p>
        </v-col>
        <v-col cols="6">
          <p class="white--text float-right mr-2 mt-0 mb-0" style="font-size:12px;">
            View Menu<img
              width="23px"
              class="mb-n1 ml-3"
              src="@/assets/men.png"
            />
          </p>
        </v-col>
      </v-row>
    </div>
    <v-row class="px-7 py-4 pb-16">
      <v-col
        cols="3"
        class=" imgstyle .justify-center"
        
        v-for="item in events.servicepoint"
        :key="item.id"
      >
        <router-link :to="`/MenuPage/${item.pointname}`">
          
          <div>
            <img
              width="40%"
              height="35px"
              crossorigin="anonymous"
              :src="`http://138.68.27.231:3000/projectdata/servicepoint/${item.pointimage}`"
            />

            <h6 class="black--text .justify-center" style="font-size:12px;">{{ item.pointname }}</h6>
            </div>
         </router-link
        >
      </v-col>
      <v-col
        cols="3"
        class=" imgstyle .justify-center"
        v-show="ticket"
      >

        <router-link to="/TicketPage">
          
            <img width="40%"
              height="35px" src="@/assets/ticket-main.png" />
            
            <h6 class="black--text .justify-center" style="font-size:12px;">Tickets</h6>
            
         </router-link
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "GeneralBar",
  data() {
    return {
      name: "",
      events: [],
      servicepoint: [],
      id: "",
      ticket:""
    };
  },
  mounted() {
    this.pageload();
  },
  methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/events/getevent/" +
          this.$route.params.id
      );

      this.events = result.data.data.event;
      this.ticket=result.data.data.event.tickets;
      console.log("ticket:" +this.Ticket);
    },
  },
};
</script>

<style scoped>
.imgstyle {
  border: 0px solid #475467;
  border-radius: 4px;
  padding: 5px 0px!important;
  background-color: #d0d5dd;
  margin: 20px 17px 20px 10px ;
  box-shadow: 0px 0px 15px 0px black;
 
}
</style>