<template color="#101828">
  <v-card flat tile>
    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlay"
      style="margin-top: 89%"
    >
      <div
        class="px-1 py-5 mx-5"
        style="background-color: #344054; border-radius: 6px"
      >
        <p class="white-text my-6 text-center">We do not know where you are!</p>
        <p class="white-text my-7 text-center px-1">
          We need to share your location or select a city to view available
          events & venues
        </p>

        <v-btn
          block
          :class="`elevation-${hover ? 54 : 14}`"
          style="font-size: 14px !important"
          color="#EF7E35"
          class="py-6 text-h4 black--text"
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
      style="margin-top: 99%"
    >
      <div
        class="px-1 py-5 mx-5"
        style="background-color: #344054; border-radius: 6px"
      >
        <p class="white-text my-6 text-center">Country & City!</p>
        <p class="white-text my-7 text-center px-1">
          In which country and city do you want to see what's happening
        </p>

        <v-btn
          block
          :class="`elevation-${hover ? 54 : 14}`"
          style="font-size: 14px !important"
          color="#EF7E35"
          class="py-8 text-h6 black--text text--right"
        >
          <v-icon class="mr-2">mdi-map-marker-circle</v-icon> My Location
        </v-btn>
        <h4 class="my-4">OR</h4>
        <v-select
          :items="items"
          filled
          class="mx-2 black--text text--right"
          label="Country"
        ></v-select>
        <v-select
          :items="items"
          filled
          class="mx-2 black--text text--right"
          label="City"
        ></v-select>
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

      items: ["france", "china", "pakistan", "india"],
      absolute: true,
      opacity: 0,
      overlay: true,
      location: false,
    };
  },
  methods: {
    change() {
      this.overlay = false;
      this.location = true;
    },
    close() {
      this.overlay = false;
      this.location = false;
    },
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
</style>