<template>
  <div>
    <div class="pa-2" style="background-color: #1d2939; height: 100vh">
      <div class="px-2 ma-0">
        <v-row class="pa-0 ma-0" style="background-color: #101828">
          <v-col class="px-0 py-0" style="background-color: #1d2939">
            <div class="est" style="background-color: #1d2939">
              <p class="white--text float-left px-3">June 22:</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-row v-for="item in state.ticketsordered"
            :key="item.id" class="pb-1 px-3 mx-2" style="background-color: #344054">
        <v-col cols="6" class="pa-0 mt-6">
          <img width="100%" src="@/assets/banner189.png" />
        </v-col>
        <v-col cols="6" class="px-5 mt-6">
          <v-row>
            <h3 class="heading" style="font-size: 10px">Hernan Cataneo</h3>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Saturday, 15th January 2022, 7pm
            </p>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Espacio Riesco
            </p>
          </v-row>
          <v-row>
            <v-col cols="10" class="pa-0">
              <p class="white--text text-left pb-16" style="font-size: 10px">
                Avenida El Salto 5000, Huechuraba, Region Mero politana
              </p>
            </v-col>
            <v-col cols="2" class="ma-0 pa-0">
              <img class="mt-n2" width="100%" src="@/assets/google-maps.png" />
            </v-col>
          </v-row>
        </v-col>
        <div
          style="background-color: #70afe3; border-radius: 12px"
          class="pa-3"
        >
        <router-link to="/GeneralParkingPage"
        >
          <v-row>
            <v-col cols="3">
              <img width="100%" src="@/assets/qr.png" />
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="white--text text-left mt-4" style="font-size: 12px">
                Avenida El Salto 5000, Huechuraba, Region Mero politana
              </p>
            </v-col>
            <v-col cols="1" class="pa-0 mt-8">
              <img width="100%" src="@/assets/parking.png" />
            </v-col>
          </v-row>
          </router-link>
        </div>
        <div
          style="background-color: #ef7e35; border-radius: 12px"
          class="pa-3 mt-5"
        >
        <router-link to="/GeneralAdmissionPage"
        >
          <v-row>
            <v-col cols="3">
              <img width="100%" src="@/assets/qr.png" />
            </v-col>
            <v-col cols="7" class="pa-0">
              <p class="white--text text-left mt-4" style="font-size: 12px">
                Avenida El Salto 5000, Huechuraba, Region Mero politana
              </p>
            </v-col>
          </v-row>
          </router-link>
        </div>
      </v-row>
      <v-row class="pa-2 mt-10" style="background-color: #101828">
        <v-col class="px-0 py-0" style="background-color: #1d2939">
          <div class="est" style="background-color: #1d2939">
            <p class="white--text float-left px-3">June 22:</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-1">
        <v-col cols="6" class="pa-0 mt-6">
          <img width="100%" src="@/assets/banner011.png" />
        </v-col>
        <v-col cols="6" class="px-5 mt-6">
          <v-row>
            <h3 class="heading" style="font-size: 10px">Hernan Cataneo</h3>
          </v-row>
          <v-row>
            <p class="white--text text-left" style="font-size: 10px">
              Saturday, 15th January 2022, 7pm
            </p>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketComp",
  data() {
    return {
      name: "",
      state: { ticketsordered: [] },
      servicepoint: [],
      id: "",
      ticket:"",
      eventmenu:""
    };
  },
  mounted() {
    this.pageload();
  },
  methods: {
    async pageload() {
      this.state.ticketsordered = JSON.parse(localStorage.getItem("ticketsordered"));
      console.log(this.state.ticketsordered);
      
    },
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