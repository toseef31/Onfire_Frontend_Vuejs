<template>
  <div>
  
    <div class="px-2 ma-0" style="background-color: #1d2939">
      <v-row>
        <v-col class="px-3 py-3">
          <router-link to="/ProductPage">
            <div class="est">
              <p class="black--text float-left px-3">
                Estimated Wait:<span class="font-weight-bold"> 8mins</span>
              </p>
              <p class="black--text float-right px-3">
                Orders:<span class="font-weight-bold"> 12</span>
              </p>
            </div></router-link
          >
        </v-col>
      </v-row>
    </div>
    <div  class="pt-10 pb-16" style="background-color: #475467">
    <v-row class="px-9">
      <v-col cols="1">
        <v-btn
          class="mr-n3 mt-2"
          @click="decrease"
          style="
            background-color: transparent;
            border: 1px solid #ef7e35;
            min-width: 29px;
            width: 29px;
            float: right;
          "
          ><v-icon color="#EF7E35">mdi-minus</v-icon></v-btn
        >
      </v-col>
      <v-col cols="1">
        <h3 class="white--text mt-2">{{ counter }}</h3>
      </v-col>
      <v-col cols="1">
        <v-btn
          class="ml-n3 mt-2"
          @click="add"
          style="
            background-color: transparent;
            border: 1px solid #ef7e35;
            min-width: 29px;
            width: 29px;
            float: left;
          "
          ><v-icon color="#EF7E35">mdi-plus</v-icon></v-btn
        >
      </v-col>
      <v-col cols="7" class="pa-2">
        <p class="white--text float-left mt-1">
          Bot. Chivas Regel 12+ canada Dry that is what
        </p>
      </v-col>
      <v-col cols="2">
        <h4 class="white--text float-left mt-2">
          $12.500
        </h4>
      </v-col>
    </v-row>
    <v-row class="px-9">
      <v-col cols="1">
        <v-btn
          class="mr-n3"
          @click="decrease"
          style="
            background-color: transparent;
            border: 1px solid #ef7e35;
            min-width: 29px;
            width: 29px;
            float: right;
          "
          ><v-icon color="#EF7E35">mdi-minus</v-icon></v-btn
        >
      </v-col>
      <v-col cols="1">
        <h3 class="white--text">{{ counter }}</h3>
      </v-col>
      <v-col cols="1">
        <v-btn
          class="ml-n3 "
          @click="add"
          style="
            background-color: transparent;
            border: 1px solid #ef7e35;
            min-width: 29px;
            width: 29px;
            float: left;
          "
          ><v-icon color="#EF7E35">mdi-plus</v-icon></v-btn
        >
      </v-col>
      <v-col cols="7" class="pa-2">
        <p class="white--text float-left mt-1">
          Chelada
        </p>
      </v-col>
      <v-col cols="2">
        <h4 class="white--text float-left ">
          $89.000
        </h4>
      </v-col>
    </v-row>
    <v-row class="px-4 pb-16">
        <v-col>
            <h4 class="white--text float-right">General Bar Total: $21.500</h4>
        </v-col>
    </v-row>
   
    </div>
    <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          style="margin-top: -29%;"
        >
        <div class="px-3 py-5 mx-5" style="background-color:#344054;border-radius:6px;">
        <p class="white-text my-6 text-center ">No Payment Method</p>
         <p class="white-text my-7 text-center">You need to add a Payment method or top up your balance to pay for your order</p>
         <router-link to="/MyWalletPage">
         <v-btn
          :class="`elevation-${hover ? 54 : 14}`"
          block
          color="#EF7E35" class=" py-6 text-h6 black--text"
           
          >
           ADD A PAYMENT METHOD OR FUNDS
          </v-btn> </router-link>
         <p
         
          block
          color="rgb(239 126 53 / 0%)" class=" py-6 text-h6 white--text mb-0 text-center"
            @click="overlay = false"
          >
           Cancel
        </p>
          </div>
        </v-overlay>
    <v-row style="background-color:#344054;" class="pb-15">
        <v-col class="px-9">
            <v-text-field
            v-model="Coupon"
            :rules="couponRule"
           class="white--text input"
            label="Add Your Deisocunt Code here!"
            style="color:white;"
            required
          ></v-text-field>
            <p class="white--text float-left mt-1">Discount: $750</p>
            <v-btn  @click="overlay = !overlay" color="#EF7E35" class="px-10 py-8">PAY FOR YOUR 2 DRINKS - $50.50</v-btn>

            </v-col>

           
    </v-row>
  </div>
</template>
  
  <script>
export default {
  name: "CartComp",
  data() {
    return {
      absolute: true,
      opacity: 0,
      overlay: false,
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
    decrease() {
      if (this.counter != 0) {
        this.counter -= 1;
      }
    },
  },
};
</script>
  
  <style scoped>
.im {
  border: 2px solid #475467;
  border-radius: 4px;
  padding: 6px;

  padding-top: 12px;
  background-color: #1d2939;
}
.theme--light.v-label {
    color: white;
}
p{
    text-align: left;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 29px;

  padding: 0 13px;
}
.theme--light.v-label {
  color: white!important;
}
.input, .label{
  color: white !important;
}
.v-btn {
  text-decoration: none;
  font-size: 14px!important;
  font-weight: 700;
  width: 100%!important;
}
.est {
  border: 2px solid #ef7e35;
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: #d0d5dd;
}
.slidebut {
  width: 96px;
  font-size: 12px;
  height: 52px;
}
</style>