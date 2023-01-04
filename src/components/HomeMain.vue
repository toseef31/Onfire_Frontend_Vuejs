<template>
  <div style="height: auto; background-color: #101828">
    <div>
      <v-overlay
        :absolute="absolute"
        :opacity="opacity"
        :value="overlay"
        style="margin-top: -20%"
      >
        <div
          class="px-1 py-5 mx-5"
          style="background-color: #344054; border-radius: 6px"
        >
          <p class="white-text my-6 text-center">
            We do not know where you are!
          </p>
          <p class="white-text my-7 text-center px-1">
            You need to share your location or select a city to view available
            events & venues
          </p>

          <v-btn
            block
            style="font-size: 14px !important"
            color="#EF7E35"
            class="py-6 text-h4 black--text"
            @click="sharelocation()"
          >
            ACTIVATE LOCATION SHARING
          </v-btn>
          <p
            style="font-size: 14px !important"
            block
            color="rgb(239 126 53 / 0%)"
            class="
              text-decoration-underline
              py-1
              text-h4
              white--text
              mt-3
              text-center
            "
            @click="change"
          >
            Select your location
          </p>
          <p
            style="font-size: 14px !important"
            block
            color="rgb(239 126 53 / 0%)"
            class="py-2 text-h4 white--text mb-0 text-center"
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
        style="margin-top: -20%"
      >
        <div
          class="px-1 py-5 mx-5"
          style="background-color: #344054; border-radius: 6px"
        >
          <p class="white-text my-6 text-center">Country & City!</p>
          <p class="white-text my-7 text-center px-1">
            In which country and city do you want to see what's happening
          </p>

        
          <country-select
            v-model="country"
          
            countryName="true"
            placeholder="Country"
            class="loc"
          />
          <region-select
            v-model="region"
            :country="country"
            countryName="true"
            regionName="true"
            v-on:input="locat()"
            :region="region"
            placeholder="City"
            class="loc"
          />

          <p
            style="font-size: 14px !important"
            block
            color="rgb(239 126 53 / 0%)"
            class="py-2 text-h4 white--text mb-0 text-center"
            @click="close"
          >
            Cancel
          </p>
        </div>
      </v-overlay>
    </div>
    <v-container fluid class="ma-0 pt-0 pb-14 px-0">
      <v-row class="#101828 mt-0 px-1" style="background-color: #101828">
        <v-col cols="6" class="pr-1 py-0 pb-0">
          <v-btn class="today">Today</v-btn>
        </v-col>
        <v-col cols="6" class="pr-1 py-0 pb-0">
          <router-link to="/TodayHome">
            <v-btn class="view">View Venues</v-btn></router-link
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
  name: "HomeMain",
  data() {
    return {
      coordinates: {
        lng: 0,
        lat: 0,
        
      },
      events: [],
      magnify: true,
      lng: 0,
      lat:0,
      region: "",
      n: "",
      absolute: true,
      opacity: 0,
      overlay: true,
      location: false,
      country:"",
      
      name: "",
      ID:"",
      query: "",
      cat:true
    };
  },
  watch: {
    '$route': function() {
        this.pageload();
    }
  },
  created() {
    this.$root.$emit('cat', true);
    this.pageload();

    let cityname = localStorage.getItem("city");
    let lng = localStorage.getItem("lng");
    if (lng) {
      this.location = false;
      this.overlay = false;
      
    }
    
    if (cityname) {
      this.location = false;
      this.overlay = false;
      this.loga();
    }
  },
  methods: {
    sharelocation(){
      console.log("sharelocation");
      this.$getLocation({})
      .then((coordinates) => {
        console.log(coordinates);
        this. lng= coordinates.lng;
        console.log("longitude is",this. lng);
        this.lat= coordinates.lat;
        console.log("latitude is",this.lat);
        localStorage.setItem("lng", JSON.stringify(this.lng));
      localStorage.setItem("lat", JSON.stringify(this.lat));
      this.close();
      })
      .catch((error) => alert(error));
    },
    locat() {
      this.location = !this.location;
      localStorage.setItem("city", JSON.stringify(this.region));
      localStorage.setItem("country", JSON.stringify(this.country));
      this.loga();
    },
    async loga() {
      console.log("i am in");

      console.log(this.country);
      console.log(this.region);
      try {
        let result = await axios.get(
          `http://138.68.27.231:3000/api/v1/events/getallbycity?search=${this.region},${this.country}`
        );
        this.events = result.data.data.events;

        console.log("result: ", result.data);

        if (result.status == 500) {
          this.error = this.response;

          console.log("11111: ", this.error);
        }
        if (result.status == 200) {
          (this.error = ""), (this.location = false);
        }
      } catch (err) {
        //  console.log("catched: ", err.message);
        this.error = err.response.data.message;

        console.log(err.response.data.message);
      }
    },
    change() {
      this.overlay = false;
      this.location = true;
    },
    close() {
      this.overlay = false;
      this.location = false;
    },
    async pageload() {
      
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/events/getall"
      );
      console.log(result.data.data.events[0].eventname);
      this.events = result.data.data.events;

      this.$root.$on("query", async (data) => {
        console.log("Searched", data);
        let search =await axios.get(
          `http://138.68.27.231:3000/api/v1/events/getall?search=${data}`
        );
        console.log("searched", search);
        this.events = search.data.data.events;
        console.log("Search events",this.events);
        
      });
      this.$root.$on("ID", async (data) => {
        console.log("Event ID", data);
        let cat = await axios.get(
         "http://138.68.27.231:3000/api/v1/events/getallbycatogry/"+
            data
       );
        console.log("cat", cat);
        this.events = cat.data.data.events;
       console.log("Cat events",this.events);
        
      });
     
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