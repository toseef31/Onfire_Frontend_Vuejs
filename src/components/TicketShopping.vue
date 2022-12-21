<template>
  <div>
    <div class="pt-8 pb-7" style="background-color: #1d2939">
      <v-row class="px-5" v-for="item in tickets" :key="item.id">
        <v-col cols="9" class="pa-2">
          <p
            class="white--text mt-1 mb-0 pa-0"
            style="font-size: 14px; font-weight: 400"
          >
            {{ item.ticketname }}
          </p>
          <p
            class="white--text mb-1 mt-0 pa-0"
            style="font-size: 14px; font-weight: 400"
          >
            {{ item.price }}
          </p>
        </v-col>
        <v-col v-if="item.ticketquantity < 1" cols="3" class="pt-0 mt-3">
          <v-btn
            @click="addtocart(item)"
            color="#EF7E35"
            class="float-right mt-0"
            style="font-size: 14px; font-weight: 400; text-transform: none"
            >Add</v-btn
          >
        </v-col>
        <v-col v-if="item.ticketquantity != 0 && item.ticketquantity > 0" cols="1" class="pt-0 mt-3">
          <v-btn
            class="mr-n3 mt-2"
            @click="decrease(state, item)"
            style="
              background-color: transparent;
              border: 1px solid #ef7e35;
              min-width: 14px;
              width: 14px;
              height: 21px;
              padding: 0px 10px;
              float: right;
            "
            ><v-icon color="#EF7E35" style="font-size: 21px"
              >mdi-minus</v-icon
            ></v-btn
          >
        </v-col>
        <v-col v-if="item.ticketquantity != 0 && item.ticketquantity > 0" cols="1" class="pt-0 mt-2 px-0">
          <h3 class="white--text mt-3 ml-n1" style="font-size: 14px">
            {{ item.ticketquantity }}
          </h3>
        </v-col>
        <v-col v-if="item.ticketquantity != 0 && item.ticketquantity > 0" cols="1" class="pt-0 mt-3">
          <v-btn
            class="ml-n3 mt-2"
            @click="add(state, item)"
            style="
              background-color: transparent;
              border: 1px solid #ef7e35;
              min-width: 18px;
              width: 18px;
              height: 21px;
              padding: 0px 10px;
              float: right;
            "
            ><v-icon color="#EF7E35" style="font-size: 21px"
              >mdi-plus</v-icon
            ></v-btn
          >
        </v-col>
      </v-row>

      <v-row class="px-4 pb-6">
        <v-col>
          <h4
            class="white--text text-left"
            style="font-size: 14px; font-weight: 500"
          >
            BUY YOUR PARKING PASS TO ACCESS THE CAR PARKING IMMEDIATELY
          </h4>
        </v-col>
      </v-row>
      <v-row
        class="px-0 pb-1 mx-4"
        style="border: 1px solid #475467; border-radius: 4px"
      >
        <v-col>
          <p class="white--text mb-3" style="font-size: 10px; font-weight: 500">
            Terms and Condition
          </p>
          <p
            class="white--text text-left mb-2"
            style="font-size: 10px; font-weight: 500"
          >
            * The pre-sale will be available with a 20% discount for 48 hours,
            starting on Thursday, November 11,
          </p>
          <p
            class="white--text text-left mt-0 mb-0"
            style="font-size: 10px; font-weight: 500"
          >
            from 11am to Saturday 13 until 11am, or until the stock of tickets
            available for this pre-sale is exhausted (ticket stock 5,000).
          </p>
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
        <v-btn
          @click="overlay = !overlay"
          color="#EF7E35"
          class="px-10 py-8"
          style="font-size: 14px"
          >PAY FOR YOUR TICKETS - ${{ total }}</v-btn
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
      state: { purchasedtickets: [] },
      event: "",
      ticket: "",
      eventdetail:[],
      total: '0',
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
      this.event = this.$route.params.id;
      console.log( "event id"+this.event);
    },
    add(state, item) {
      console.log("id is" + item.id);
      let found = state.purchasedtickets.find(
        (product) => product.id == item.id
      );
      console.log(found);
      if (found) {
        found.ticketquantity += 1;
        item.ticketquantity += 1;
        console.log("if");
      } else {
        state.purchasedtickets.push(item);
        console.log("else");
      }
      console.log(state.purchasedtickets);
      let total = 0;
  this.state.purchasedtickets.forEach((el) => {
    total = total + el.ticketprice * el.ticketquantity;
  });
  this.total=total;
  console.log("TOTal",total);
      localStorage.setItem("ticketsordered", JSON.stringify(this.state.purchasedtickets));
      //item.ticketquantity += 1;
      // this.purchasedtickets.push({
      // ticketquantity: item.ticketquantity,
      // });
      // console.log(this.purchasedtickets);
      // for (let i = 0; i < this.purchasedtickets.length; i++) {
      //    this.total =
      //      this.purchasedtickets[i].ticketprice *
      //      this.purchasedtickets[i].ticketquantity;
      //  }
      //   console.log("Total is" + this.total);
    },
    decrease(state, item) {
      let found = state.purchasedtickets.find(
        (product) => product.id == item.id
      );
      console.log(found);
      if (found) {
        if (found.ticketquantity != 0) {
          found.ticketquantity -= 1;
          item.ticketquantity--;
          console.log("inside if");
        }
        if (found.ticketquantity == 0) {
          state.purchasedtickets.splice(item, 1);

          console.log("else inside");
        }
      }

      console.log(state.purchasedtickets);
      console.log("event id" + this.event);
      let total = 0;
  this.state.purchasedtickets.forEach((el) => {
    total = total + el.ticketprice * el.ticketquantity;
  });
  this.total=total;
  console.log("TOTal",total);
      localStorage.setItem("ticketsordered", JSON.stringify(this.state.purchasedtickets));
    },
    addtocart(item) {
      console.log("added");

      item.ticketquantity += 1;
      this.total = item.price * item.ticketquantity;
      console.log("Total is" + this.total);

      this.state.purchasedtickets.push({
        ticketname: item.ticketname,
        ticketprice: item.price,
        ticketquantity: item.ticketquantity,
        id: item.id,
      });
      console.log(this.state.purchasedtickets);
      console.log("item is" + item.ticketname);
      console.log("quantity is" + item.ticketquantity);
      let total = 0;
  this.state.purchasedtickets.forEach((el) => {
    total = total + el.ticketprice * el.ticketquantity;
  });
  this.total=total;
  console.log("TOTal",total);
      localStorage.setItem("ticketsordered", JSON.stringify(this.state.purchasedtickets));
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
p {
  text-align: left;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 26px;

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