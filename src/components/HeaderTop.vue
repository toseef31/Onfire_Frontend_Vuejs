<template>
  <v-card flat tile>
    <v-toolbar color="#101828" dark class="pa-n8">
      <router-link to="/"
        ><img class="ml-n2 mt-1" width="120px" src="@/assets/logo.png"
      /></router-link>

      <v-spacer></v-spacer>
      
      <v-btn
        class="px-0 white--text transparent text-transform-lowercase"
        :elevation="n - 1"
        ><v-icon color="#EF7E35">mdi-map-marker-outline</v-icon>Santiago
        <v-icon>mdi-chevron-down</v-icon></v-btn
      >
      <v-btn icon>
        <v-icon class="mr-n3">mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>

<style>
</style>