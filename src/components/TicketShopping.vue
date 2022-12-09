<template>
  <div>
   
    <div class="pt-8 pb-11" style="background-color: #1D2939">
      <v-row class="px-5" v-for="item in tickets"
        :key="item.id">
        
        <v-col cols="9" class="pa-2">
          <p class="white--text  mt-1 mb-0 pa-0" style="font-size:14px; font-weight:400;">
            {{item.ticketname}}
          </p>
          <p class="white--text mb-1 mt-0 pa-0 " style="font-size:14px; font-weight:400;">{{item.price}}</p>
        </v-col>
        <v-col cols="1" class="pt-0 mt-3">
          <v-btn
            class="mr-n3 mt-2"
            @click="decrease"
            style="
              background-color: transparent;
              border: 1px solid #ef7e35;
              min-width: 14px;
              width: 14px;
              height: 21px;
    padding: 0px 10px;
              float: right;
            "
            ><v-icon color="#EF7E35" style="font-size:21px;">mdi-minus</v-icon></v-btn
          >
        </v-col>
        <v-col cols="1" class="pt-0 mt-2 px-0">
          <h3 class="white--text mt-3 ml-n1" style="font-size:14px;">{{ counter }}</h3>
        </v-col>
        <v-col cols="1" class="pt-0 mt-3">
          <v-btn
            class="ml-n3 mt-2"
            @click="add"
            style="
               background-color: transparent;
              border: 1px solid #ef7e35;
              min-width: 18px;
              width: 18px;
              height: 21px;
    padding: 0px 10px;
              float: right;
            "
            ><v-icon color="#EF7E35" style="font-size:21px;">mdi-plus</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-row class="px-5">
        
        <v-col cols="9" class="pa-2">
          <p class="white--text  mt-1 mb-0 pa-0" style="font-size:14px; font-weight:400;">
            GNERAL ADMISSION
          </p>
          <p class="white--text mb-1 mt-0 pa-0 " style="font-size:14px; font-weight:400;">$89.000</p>
        </v-col>
        
        
        <v-col v-show="!cartbutton" cols="3" class="pt-0 mt-3">
          <v-btn @click="addtocart" color="#EF7E35" class="float-right mt-0" style="font-size:14px; font-weight:400;text-transform: none;">Add</v-btn>
        </v-col>
        <v-col v-show="cartbutton" cols="1" class="pt-0 mt-3">
          <v-btn
            class="mr-n3 mt-2"
            @click="decrease"
            style="
              background-color: transparent;
              border: 1px solid #ef7e35;
              min-width: 14px;
              width: 14px;
              height: 21px;
    padding: 0px 10px;
              float: right;
            "
            ><v-icon color="#EF7E35" style="font-size:21px;">mdi-minus</v-icon></v-btn
          >
        </v-col>
        <v-col v-show="cartbutton" cols="1" class="pt-0 mt-2 px-0">
          <h3 class="white--text mt-3 ml-n1" style="font-size:14px;">{{ counter }}</h3>
        </v-col>
        <v-col v-show="cartbutton" cols="1" class="pt-0 mt-3">
          <v-btn
            class="ml-n3 mt-2"
            @click="add"
            style="
               background-color: transparent;
              border: 1px solid #ef7e35;
              min-width: 18px;
              width: 18px;
              height: 21px;
    padding: 0px 10px;
              float: right;
            "
            ><v-icon color="#EF7E35" style="font-size:21px;">mdi-plus</v-icon></v-btn
          >
        </v-col>
      </v-row>
      
      <v-row class="px-4 pb-16">
        <v-col>
          <h4 class="white--text text-left" style="font-size:14px; font-weight:500;">BUY YOUR PARKING PASS TO ACCESS THE CAR PARKING IMMEDIATELY</h4>
        </v-col>
      </v-row>
      <v-row class="px-0 pb-1 mx-4" style="border: 1px solid #475467;
border-radius: 4px;">
        <v-col>
          <p class="white--text mb-3" style="font-size:10px; font-weight:500;">Terms and Condition</p>
          <p class="white--text text-left mb-2" style="font-size:10px; font-weight:500;"> * The pre-sale will be available with a 20% discount for 48 hours, starting on Thursday, November 11,</p>
          <p class="white--text text-left mt-0 mb-0" style="font-size:10px; font-weight:500;">  from 11am to Saturday 13 until 11am, or until the stock of tickets available for this pre-sale is exhausted (ticket stock 5,000).</p>
        </v-col>
      </v-row>
    </div>
    <v-overlay
      :absolute="absolute"
      :opacity="opacity"
      :value="overlay"
      style="margin-top: -29%"
    >
      <div
        class="px-3 py-5 mx-5"
        style="background-color: #344054; border-radius: 6px"
      >
        <p class="white-text my-6 text-center">No Payment Method</p>
        <p class="white-text my-7 text-center">
          You need to add a Payment method or top up your balance to pay for
          your order
        </p>
        <router-link to="/MyWalletPage">
          <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
            block
            color="#EF7E35"
            class="py-6 text-h6 black--text"
          >
            ADD A PAYMENT METHOD OR FUNDS
          </v-btn>
        </router-link>
        <p
          block
          color="rgb(239 126 53 / 0%)"
          class="py-6 text-h6 white--text mb-0 text-center"
          @click="overlay = false"
        >
          Cancel
        </p>
      </div>
    </v-overlay>
    <v-row style="background-color: #344054" class="pb-15">
      <v-col class="px-9">
        <v-text-field
          v-model="Coupon"
          :rules="couponRule"
          class="white--text input"
          label="Add Your Discount Code here!"
          color="white"
          dark
          required
        ></v-text-field>
        <p class="white--text float-left mt-1">Discount: $750</p>
        <v-btn @click="overlay = !overlay" color="#EF7E35" class="px-10 py-8" style="font-size:14px;"
          >PAY FOR YOUR TICKETS - $50.50</v-btn
        >
      </v-col>

      
    </v-row>
  </div>
</template>
  
  <script>
  import axios from "axios";
export default {
  name: "TicketShoppingComp",
  data() {
    return {
      absolute: true,
      opacity: 0,
      overlay: false,
      tickets: [],
      id: "",
      ticket:"",
      counter: 0,
      cartbutton:false,
    };
  },
  mounted() {
    this.pageload();
  },
  methods: {

    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/ticket/getticket/" +
          this.$route.params.id
      );

      this.tickets = result.data.data.arr;
      
      console.log("ticket:" +this.tickets);
      
    },
    add() {
      this.counter += 1;
    },
    decrease() {
      if (this.counter != 0) {
        this.counter -= 1;
      }
    },
    addtocart(){
        this.cartbutton=!this.cartbutton;
    }
    
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
p {
  text-align: left;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 29px;

  padding: 0 13px;
}
.theme--light.v-label {
  color: white !important;
}
.input,
.label {
  color: white !important;
}
.input {
  color: white;
}
.v-btn {
  text-decoration: none;
  font-size: 14px !important;
  font-weight: 700;
  width: 100% !important;
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