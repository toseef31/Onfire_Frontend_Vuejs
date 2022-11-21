<template>
  <div>
    
    <div class="pa-4 cont">
      <v-row>
        <v-col class="px-3 py-7">
          <div class="est">
            <h3 class="black--text pb-4">ORDER IN PROGRESS</h3>
            <p class="black--text float-left px-3">
              Pickup in aprox :<span class="font-weight-bold"> 8mins</span>
            </p>
            <p class="black--text float-right px-3">
              Orders:<span class="font-weight-bold"> 12</span>
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="px-3">
        <v-col cols="2" class="mt-3 pa-0">
          <p
            style="background-color: #ef7e35"
            class="rounded black--text float-left px-2 py-1"
          >
            1 x
          </p>
        </v-col>

        <v-col cols="8" class="py-0 px-0">
          <p class="white--text text-left mt-1">
            Bot. Chivas Regel 12+ canada Dry that is what
          </p>
        </v-col>
        <v-col cols="2" class="ma-0 pa-0">
          <h4 class="white--text text-right mt-2">$12.500</h4>
        </v-col>
      </v-row>
      <v-row class="px-3">
        <v-col cols="2" class="mt-3 pa-0">
          <p
            style="background-color: #ef7e35"
            class="rounded black--text float-left px-2 py-1"
          >
            2 x
          </p>
        </v-col>

        <v-col cols="8" class="py-0 px-0">
          <p class="white--text text-left mt-1">
            Chelade
          </p>
        </v-col>
        <v-col cols="2" class="ma-0 pa-0">
          <h4 class="white--text text-right mt-2">$24.000</h4>
        </v-col>
      </v-row>
      <v-row class="px-0 pb-16">
        <v-col cols="9">
          <h4 class="white--text float-right">General Bar Total:</h4>
        </v-col>
        <v-col cols="3">
            <h4 class="white--text float-right mt-10"> $21.500</h4>
        </v-col>
    </v-row>
    
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "OrdersComp",
  
};
</script>
  
  <style scoped>
  .cont{
    height: 100vh;
    background-color: #1d2939;
  }
.im {
  border: 2px solid #475467;
  border-radius: 4px;
  padding: 6px;

  padding-top: 12px;
  background-color: #1d2939;
}
.v-btn:not(.v-btn--round).v-size--default {
  float: left !important;
  width: 157px !important;
  padding: 0 13px;
}
.v-btn {
  text-decoration: none;
}
body {
      flex-direction: column;
      display: flex;
      min-height: 100vh;
   
    
    background-color: #1D2939!important;
}
.est {
  border: 0px solid #ef7e35;
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: #ef7e35;
}
.slidebut {
  width: 96px;
  font-size: 12px;
  height: 52px;
}
</style>