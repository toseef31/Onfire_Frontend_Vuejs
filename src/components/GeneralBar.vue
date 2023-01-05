<template>
  <div>
    <div class="pa-4" style="background-color: #1d2939;overflow: hidden!important;">
      <v-row class="pb-0">
        <v-col class="pb-1">
          <div class="pb-16 mt-1">
            <img
              width="100%"
              min-height="188px" height="100%"
              crossorigin="anonymous"
              style="border-style: none;
    border: 1px solid;
    border-radius: 3px;"
              :src="`http://138.68.27.231:3000/projectdata/eventspic/${events.eventimage}`"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <p class="white--text float-left mb-0" style="font-size:14px;">Choose Where to order</p>
        </v-col>
        <v-col cols="6">
          <a :href="`http://138.68.27.231:3000/projectdata/downloadmenu/${eventmenu}`" download="download"><p class="white--text float-right mr-2 mt-0 mb-0" style="font-size:12px;">
            View Menu<img
              width="23px"
              class="mb-n1 ml-3"
              src="@/assets/men.png"
            />
          </p></a>
        </v-col>
      </v-row>
    </div>
    <v-row class="px-7 py-4 pb-16 justify-center ">
      <v-col
        cols="3"
        class=" imgstyle .justify-center"
        
        v-for="item in events.servicepoint"
        :key="item.id"
      >
        <router-link :to=" item.pointname != 'Food' ? `/MenuPage/${item.id}` : `/FoodPage/${item.id}`">
          
          <div>
            <img
              width="40%" height="40px!important"
              crossorigin="anonymous"
              :src="`http://138.68.27.231:3000/projectdata/servicepoint/${item.pointimage}`"
            />

            <h6 class="black--text" style="font-size:12px;text-align: center!important;">{{ item.pointname }}</h6>
            </div>
         </router-link
        >
      </v-col>
      <v-col
        cols="3"
        class=" imgstyle .justify-center"
        v-show="ticket"
      >

        <router-link :to="`/TicketShoppingPage/${id}`">
          
            <img width="40%"
              height="40px" src="@/assets/ticket-main.png" />
            
            <h6 class="black--text .justify-center" style="font-size:12px;">Tickets</h6>
            
         </router-link
        >
      </v-col>
      <v-col
        cols="3"
        class=" imgstyle .justify-center"
        v-show="food"
      >

        <router-link :to="`/FoodPage/food/${id}`">
          
            <img width="40%"
              height="40px" src="@/assets/truck.png" />
            
            <h6 class="black--text .justify-center" style="font-size:12px;">Food</h6>
            
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
      ticket:"",
      food:"",
      eventmenu:""
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
      this.ticket=result.data.data.event.Tickets;
      this.food=result.data.data.event.food_service;
      console.log("ticket:" +this.Ticket);
      console.log("food:" +this.food);
      this.eventmenu=result.data.data.event.eventmenu;
      console.log("menu" +this.eventmenu);
      this.id=result.data.data.event._id;
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
  box-shadow: 2px 2px 5px black;
 
}
</style>