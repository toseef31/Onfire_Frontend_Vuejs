<template>
  <div style="height: auto; background-color: #101828">
    <img
      width="100%"
      height="100%"
      crossorigin="anonymous"
      :src="`http://138.68.27.231:3000/projectdata/venuepic/${events[0].venue.venueimage}`"
    />

    <v-container fluid class="ma-0 pt-0 pb-14 px-0">
      <v-row class="#101828 mt-0 px-1" style="background-color: #101828">
        <v-col cols="6" class="pr-1 py-0 pb-0">
          <v-btn class="today">Today</v-btn>
        </v-col>
        <v-col cols="6" class="pr-1 py-0 pb-0">
          <router-link to="/">
            <v-btn class="view">View Events</v-btn></router-link
          >
        </v-col>
      </v-row>

      <v-row class="px-3 py-0" style="background-color: #1d2939">
        <v-col cols="6" v-for="item in events" :key="item.id">
          <router-link :to="`/VenuPage/${item.id}`">
            <div class="colum">
              <div class="gallery">
                <img
                  width="100%"
                  height="90px"
                  crossorigin="anonymous"
                  :src="`http://138.68.27.231:3000/projectdata/eventspic/${item.eventimage}`"
                />
              </div>
              <h5 class="heading">{{ item.eventname }}</h5>
              <p
                class="mt-7 mb-1 white--text text-left"
                style="font-size: 10px"
              >
                {{ item.Dates | formatDate }}
              </p>
              <p class="white--text text-left" style="font-size: 10px">
                {{ item.venue.venuename }}
              </p>
            </div>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
 <script>
import axios from "axios";
export default {
  name: "EventComp",
  data() {
    return {
      events: [],

      n: "",
      venueimage: "",
    };
  },

  created() {
    this.pageload();

    let cityname = localStorage.getItem("city");
    if (cityname) {
      this.location = false;
      this.overlay = false;
      this.loga();
    }
  },
  methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/events/getallbyvenue/" +
          this.$route.params.id
      );
      
      this.events = result.data.data.events;
      
    },
  },
};
</script>
 
 <style>
.loc {
  padding: 12px 12px;
  background-color: #ef7e35;
  margin: 12px;
  border: 1px solid #ef7e35;
  width: 92%;
  border-radius: 6px;
}
.v-btn,
a {
  text-decoration: none !important;
}

p,
h1,
h2,
h3,
h4,
h5 {
  font-family: roboto;
}
.view {
  float: right;
  background-color: transparent !important;
  color: white !important;
  text-transform: inherit;
  text-decoration: underline;
}
.colum {
  background-color: #344054;
  border-radius: 4px;
  padding: 6px 6px 2px 6px !important;
}
.gallery {
  background-color: white;
  padding: 4px 4px !important;
  border-radius: 4px;
}
body {
  overflow-x: hidden;
}
.col-6 {
  width: 100%;
  padding: 6px;
}
.heading {
  color: white !important;
  float: left;
  margin-top: 6px;
}
</style>