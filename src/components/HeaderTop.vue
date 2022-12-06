<template color="#101828">
  <v-card flat tile>
   

    <v-toolbar color="#101828" dark class="pa-n8">
      <v-row class="pr-0 pl-3" v-show="magnify">
        <router-link to="/"
          ><img class="ml-n2 mt-1" width="120px" src="@/assets/logo.png"
        /></router-link>

        <v-spacer></v-spacer>

        <v-btn
          class="px-0 mt-2 white--text transparent text-transform-lowercase"
          :elevation="n - 1"
          ><v-icon color="#EF7E35">mdi-map-marker-outline</v-icon>Santiago
          <v-icon>mdi-chevron-down</v-icon></v-btn
        >
        <v-btn icon>
          <v-icon @click="magnify = !magnify" class="mr-n3">mdi-magnify</v-icon>
        </v-btn>
      </v-row>
      <v-row v-if="!magnify">
        <v-btn class="searchicon mt-3 mr-4 ml-2" icon>
          <v-icon @click="magnify = !magnify" class="ma-0" color="black"
            >mdi-close</v-icon
          >
        </v-btn>
        <v-text-field
          placeholder="search"
          filled
          light
          dense
          append-icon="mdi-magnify"
          background-color="white"
          color="black"
          class="mt-1"
        >
        </v-text-field>
      </v-row>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "HeaderTop",
  data() {
    return {
      magnify: true,
      
    };
  },
  methods: {
    
    
  },
};
</script>

<style scoped>
.searchicon {
  background-color: white;
  border: 1px;
  border-radius: 40px;
  width: 25px !important;
  height: 25px !important;
}
.text .v-icon {
  color: black !important;
}
.custom-label-color .v-label {
  color: red;
}
.v-application .primary--text {
    color: black !important;
    caret-color: black!important;
}
.loc{
  padding: 12px 12px;
    background-color: #EF7E35;
    margin: 12px;
    border: 1px solid #EF7E35;
    width: 92%;
    border-radius:6px;
}
</style>