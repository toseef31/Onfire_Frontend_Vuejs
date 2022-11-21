<template>
    <v-container class="ma-0 pt-0 pb-0 px-0">
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0">
          <v-carousel :show-arrows="false" height="auto">
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
      items: [
        {
            src: 'banner.png',
        },
        {
            src: 'banner.png',
        },
        
    ],
    };
  },
};
</script>

<style>
.v-carousel__controls {
  display: none !important;
}
</style>