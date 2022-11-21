<template>
  <div>
    <div class="pa-4" style="background-color: #1d2939">
      <v-row class="pb-8">
        <v-col class="pb-16">
          <div class="pb-16 mt-1">
            <img width="100%" src="@/assets/banner189.png" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <p class="white--text float-left">Choose Where to order</p>
        </v-col>
        <v-col cols="6">
          <router-link to="/MenuPage">
            <p class="white--text float-right mr-2 mt-n1">
              View Menu<img
                width="23px"
                class="mb-n1 ml-3"
                src="@/assets/men.png"
              /></p
          ></router-link>
        </v-col>
      </v-row>
    </div>
    <v-row class="px-7 py-4" style="background-color: #475467">
      <v-col cols="4" class="px-1 py-1">
        <router-link to="/ProductPage">
          <div class="imgstyle">
            <img width="80%" src="@/assets/alcoholic.png" />
            <h6 class="black--text">General Bar</h6>
          </div></router-link
        >
      </v-col>
      <v-col cols="4" class="px-1 py-1">
        <router-link to="/ProductPage">
          <div class="imgstyle">
            <img width="80%" src="@/assets/alcoholic.png" />
            <h6 class="black--text">General Bar</h6>
          </div></router-link
        >
      </v-col>
      <v-col cols="4" class="px-1 py-1">
        <router-link to="/ProductPage">
          <div class="imgstyle">
            <img width="80%" src="@/assets/alcoholic.png" />
            <h6 class="black--text">General Bar</h6>
          </div></router-link
        >
      </v-col>
    </v-row>
    <v-row class="px-7 py-4" style="background-color: #475467">
      <v-col cols="4" class="px-1 py-1">
        <router-link to="/ProductPage">
          <div class="imgstyle">
            <img width="80%" src="@/assets/alcoholic.png" />
            <h6 class="black--text">General Bar</h6>
          </div></router-link
        >
      </v-col>
      <v-col cols="4" class="px-1 py-1">
        <router-link to="/ProductPage">
          <div class="imgstyle">
            <img width="80%" src="@/assets/alcoholic.png" />
            <h6 class="black--text">General Bar</h6>
          </div></router-link
        >
      </v-col>
      <v-col cols="4" class="px-1 py-1">
        <router-link to="/ProductPage">
          <div class="imgstyle">
            <img width="80%" src="@/assets/alcoholic.png" />
            <h6 class="black--text">General Bar</h6>
          </div></router-link
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GeneralBar",
};
</script>

<style scoped>
.imgstyle {
  border: 0px solid #475467;
  border-radius: 4px;
  padding: 20px;
  background-color: #d0d5dd;

  box-shadow: 0px 0px -4px rgba(0, 0, 0, 0.8) !important;
}
</style>