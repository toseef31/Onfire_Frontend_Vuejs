<template>
  <div style="height: auto; background-color: #101828">
    <v-container
      fluid
      class="ma-0 pt-0 pb-0 px-0"
      style="background-color: #1d2939"
    >
      <v-row class="#101828 mt-0 px-1" style="background-color: #101828">
        <v-col class="pr-1 py-0 pb-0">
          <router-link to="/">
            <v-btn class="view">View Events</v-btn></router-link
          >
        </v-col>
      </v-row>
      <v-row class="px-3 pt-0 pb-0" style="background-color: #1d2939">
        <v-col cols="6" v-for="item in events" :key="item.id">
          <router-link :to="`/EventPage/${item._id}`">
            <div class="colum">
              <div>
                <img
                  crossorigin="anonymous"
                  height="100%"
                  width="100%"
                  :src="`http://138.68.27.231:3000/projectdata/venuepic/${item.venueimage}`"
                />
              </div>
              <h5 class="heading">{{ item.venuename }}</h5>
            </div></router-link
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
    
    <script>
import axios from "axios";
export default {
  name: "TodayMain",
  data() {
    return {
      events: [],
      cat:false,
      city: "",
      country: "",
      lng:0,
      lat:0,
    };
  },
  watch: {
    '$route': function() {
        this.pageload();
    }
  },
 


  mounted() {
    this.pageload();

    this.city = JSON.parse(localStorage.getItem("city"));
    this.country = JSON.parse(localStorage.getItem("country"));
    this.lng = JSON.parse(localStorage.getItem("lng"));
    this.lat = JSON.parse(localStorage.getItem("lat"));
    console.log(this.lng);
    console.log(this.lat);
    console.log(this.city);
    console.log(this.country);
    try {
      let result = axios.get(
        `http://138.68.27.231:3000/api/v1/venues/getallbycity?search=${this.city},${this.country}`
      );
      this.events = result.data.data.venues;

      console.log("result: ", this.events);

      if (result.status == 500) {
        this.error = this.response;

        console.log("11111: ", this.error);
      }
      if (result.status == 200) {
        (this.error = ""), (this.location = !this.location);
      }
    } catch (err) {
      //  console.log("catched: ", err.message);
      this.error = err.response.data.message;

      console.log(err.response.data.message);
    }
  },
  methods: {
    async pageload() {
      this.$root.$emit('cat', false);
      if(this.lng!=0){
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/venues/getallvenue"
      );
      console.log("all",result.data.data.data);
      this.events = result.data.data.data;
      }
      else{
      let bylnglat = await axios.get(
        `http://138.68.27.231:3000/api/v1/venues/distances/${this.lng},${this.lat}/unit/mi`
      );
      console.log("by lng and lat",bylnglat.data.data.data);
      this.events = bylnglat.data.data.data;
      }
    },
  },
};
</script>
    
    <style>
.view {
  float: right;
  background-color: transparent !important;
  color: white !important;
  text-transform: inherit;
  text-decoration: underline;
}
.row + .row {
  margin-top: 11px;
}
.v-btn--is-elevated {
  box-shadow: none !important;
}
.font {
  font-size: 14px !important;
}
.today {
  float: left;
  background-color: transparent !important;
  color: white !important;
  text-transform: inherit;
}
.colum {
  background-color: #344054;
  border-radius: 4px;
  padding: 6px 6px 30px 6px;
}
.gallery {
  background-color: white;
  padding: 19px 4px;
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