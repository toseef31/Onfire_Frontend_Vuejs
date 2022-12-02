<template>
    <v-container fluid class="ma-0 pt-0 pb-0 px-0">
      <v-row class="ma-0 pa-0">
        <img width="100%" :src="src" />
        <v-col class="ma-0 pa-0"><v-carousel :show-arrows="false" height="auto">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      </v-container>
</template>

<script>

export default {
  name: "CoroucelComp",
  data() {
    return {
      
            src: '',
       items:[{
        src:"banner.png"
       },
       {
        src:"banner2.png"
       },
       {
        src:"banner3.png"
       }
       ]
    };
  },
  
};
</script>

<style>
.v-carousel__controls {
  display: none !important;
}
</style>