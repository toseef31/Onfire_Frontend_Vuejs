<template>
  <v-container fluid class="ma-0 pt-0 pb-14 px-0">
    <v-row class="#101828 mt-0 pa-1" style="background-color: #101828">
      <v-col class="pr-1 py-0 pb-0">
        <router-link to="/TodayHome">
          <v-btn class="view">View Events</v-btn></router-link
        >
      </v-col>
    </v-row>
    
    <v-row class="px-3 py-0" style="background-color: #1d2939">
      <v-col cols="6">
        <div class="colum">
          <div class="gallery">
            <img width="100%" src="@/assets/image19.png" />
          </div>
          <h5 class="heading">Le Feria</h5>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="colum">
          <div class="gallery">
            <img width="90%" src="@/assets/image21.png" />
          </div>
          <h5 class="heading">Espacio Riesco</h5>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-3 py-0" style="background-color: #1d2939">
      <v-col cols="6">
        <div class="colum">
          <div class="gallery" style="background-color: #101828">
            <img width="100%" src="@/assets/image22.png" />
          </div>
          <h5 class="heading">Movistar Arena</h5>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="colum">
          <div class="gallery" style="padding: 13px 4px">
            <img width="58%" src="@/assets/image23.png" />
          </div>
          <h5 class="heading">Estadio Monumental</h5>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-3 py-0" style="background-color: #1d2939">
      <v-col cols="6">
        <div class="colum">
          <div class="gallery">
            <img width="100%" src="@/assets/image19.png" />
          </div>
          <h5 class="heading">Le Feria</h5>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="colum">
          <div class="gallery">
            <img width="90%" src="@/assets/image21.png" />
          </div>
          <h5 class="heading">Espacio Riesco</h5>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-3 py-0" style="background-color: #1d2939">
      <v-col cols="6">
        <div class="colum">
          <div class="gallery" style="background-color: #101828">
            <img width="100%" src="@/assets/image22.png" />
          </div>
          <h5 class="heading">Movistar Arena</h5>
        </div>
      </v-col>
      <v-col cols="6">
        <div class="colum">
          <div class="gallery" style="padding: 13px 4px">
            <img width="57%" src="@/assets/image23.png" />
          </div>
          <h5 class="heading">Estadio Monumental</h5>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  
  name: "HomeMain",
  data() {
    return {
      coordinates: {
        lng: 0,
        lat: 0,
      },
    };
  },
  created(){
    this.$getLocation({})
  .then(coordinates => {
    console.log(coordinates);
  })
  .catch(error => alert(error));
  },
 
};
</script>

<style>
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