<template>
  <div>
    <div class="pa-2" style="background-color: #d0d5dd;height:100vh;">
      <div class="px-2 ma-0">
        <v-row class="pa-0 ma-0" style="background-color: #475467">
          <v-col class="px-0 py-0" >
            <div class="est" >
              <p class="white--text float-left px-3 mt-1 mb-1">June 22:</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row
        class="py-2 px-1 mx-2 my-4"
        style="background-color: #344054; border-radius: 4px"
      >
        <v-col cols="6" class="pa-0 mt-1">
          <img width="100%" src="@/assets/banner189.png" />
        </v-col>
        <v-col cols="6" class="px-5 mt-1">
          <v-row>
            <h3 class="heading" style="font-size: 14px; font-weight: 500">
              Hernan Cataneo
            </h3>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Saturday, 15th January 2022, 7pm
            </p>
          </v-row>
          <v-row class="text-right">
            <p class="white--text text-right mt-7" style="font-size: 10px; ">
             TOTAL: $8.000
            </p>
          </v-row>
        </v-col>
      </v-row>
      <div class="px-2 ma-0">
        <v-row class="pa-0 ma-0" style="background-color: #475467">
          <v-col class="px-0 py-0" >
            <div class="est" >
              <p class="white--text float-left px-3 mt-1 mb-1">June 22:</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row
        class="py-2 px-1 mx-2 my-4"
        style="background-color: #344054; border-radius: 4px"
      >
        <v-col cols="6" class="pa-0 mt-1">
          <img width="100%" src="@/assets/banner189.png" />
        </v-col>
        <v-col cols="6" class="px-5 mt-1">
          <v-row>
            <h3 class="heading" style="font-size: 14px; font-weight: 500">
              Hernan Cataneo
            </h3>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Saturday, 15th January 2022, 7pm
            </p>
          </v-row>
          <v-row class="text-right">
            <p class="white--text text-right mt-7" style="font-size: 10px; ">
             TOTAL: $8.000
            </p>
          </v-row>
        </v-col>
      </v-row>
      <div class="px-2 ma-0">
        <v-row class="pa-0 ma-0" style="background-color: #475467">
          <v-col class="px-0 py-0">
            <div class="est">
              <p class="white--text float-left px-3 mt-1 mb-1">June 22:</p>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row
        class="py-2 px-1 mx-2 my-4"
        style="background-color: #344054; border-radius: 4px"
      >
        <v-col cols="6" class="pa-0 mt-1">
          <img width="100%" src="@/assets/banner189.png" />
        </v-col>
        <v-col cols="6" class="px-5 mt-1">
          <v-row>
            <h3 class="heading" style="font-size: 14px; font-weight: 500">
              Hernan Cataneo
            </h3>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Saturday, 15th January 2022, 7pm
            </p>
          </v-row>
          <v-row class="text-right">
            <p class="white--text text-right mt-7" style="font-size: 10px; ">
             TOTAL: $8.000
            </p>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: 'AccountPurchase',
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }
  },
};
</script>
  
  <style>
.imgstyle {
  border: 4px solid #ef7e35;
  border-radius: 4px;
  padding: 20px;
  background-color: #d0d5dd;
}
</style>