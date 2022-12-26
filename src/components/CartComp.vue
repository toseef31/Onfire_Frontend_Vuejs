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
    <div class="pt-5 pb-8" style="background-color: #475467">
      <v-row  v-for="item in state.cart"
            :key="item.id" class="px-9">
           
        <v-col cols="1" class="py-2" v-if="item.itemquantity != 0 && item.itemquantity > 0">
          <v-btn
                  class="mr-n3 mt-2"
                  @click="decrease(state,item)"
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
        <v-col class="py-2" cols="1" v-if="item.itemquantity != 0 && item.itemquantity > 0">
          <h3 class="white--text mt-3 ml-n2" style="font-size: 14px">
                  {{ item.itemquantity }}
                </h3>
        </v-col>
        <v-col class="py-2" cols="1" v-if="item.itemquantity != 0 && item.itemquantity > 0">
          <v-btn
                  class="ml-n3 mt-2"
                  @click="add(state,item)"
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
        <v-col cols="7" class="px-2 py-0">
          <p class="white--text float-left mt-3" style="line-height: 14px;">
            {{item.itemname}}
          </p>
        </v-col>
        <v-col cols="2" class="py-2">
          <h4 class="white--text float-left mt-2">{{item.itemprice}}</h4>
        </v-col>
      </v-row>
      
      <v-row class="px-4 pb-0">
        <v-col>
          <h4 class="white--text float-right">Total: ${{ total }}</h4>
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
        <v-btn @click="pay()" color="#EF7E35" class="px-10 py-8"
          >PAY FOR YOUR ITEMS - ${{ total }}</v-btn
        >
      </v-col>

      
    </v-row>
  </div>
</template>
  
  <script>
  
import axios from "axios";
export default {
  name: "CartComp",
  data() {
    return {
      absolute: true,
      opacity: 0,
      overlay: false,
      counter: 0,
      state: {cart: []},
      total:'0',
      totalquantity:"0",
    };
  },
  mounted() {
    this.pageload();
  },
  methods: {
    async pageload() {
      this.state.cart = JSON.parse(localStorage.getItem("cart"));

      console.log(this.state.cart);
      let total = 0;
  this.state.cart.forEach((el) => {
    total = total + el.itemprice * el.itemquantity;
  });
  this.total=total;
  console.log("TOTal",total);
    },
    async pay() {
      
     
      let result = await axios.post(
            "http://138.68.27.231:3000/api/v1/order/create-checkout-session",
            {
              cartItems:this.state.cart,
            }
            
          ).then(response => {
                     
                     window.location.href= response.data.url;
                     
                     return response;
                     
                   });
console.log("Result",result);
    },
    add(state, item) {
      console.log(item.id);
      console.log("id is" + item.id);
      let found = state.cart.find(
        (product) => product.id == item.id
      );
      console.log(found);
      if (found) {
        item.itemquantity += 1;
        console.log("if");
      } else {
        state.cart.push(item);
        console.log("else");
      }
      console.log(state.cart);
      let total = 0;
  this.state.cart.forEach((el) => {
    total = total + el.itemprice * el.itemquantity;
  });
  this.total=total;
  console.log("TOTal",total);
  let totalquantity = 0;
  this.state.cart.forEach((el) => {
    totalquantity = totalquantity +  el.itemquantity;
  });
      console.log("Quantity",totalquantity);
      this.$root.$emit("quantity", totalquantity);
      localStorage.setItem("cartquantity", JSON.stringify(totalquantity));
      localStorage.setItem("cart", JSON.stringify(this.state.cart));
    },
    decrease(state,item) {
        console.log(item.id);
        let found = state.cart.find(
          (product) => product.id == item.id
        );
        let findex = state.cart.findIndex(
          (product) => product.id == item.id
        );
        console.log(findex);
        if (found) {
          if (found.itemquantity > 0) {
            found.itemquantity -= 1;
            item.quantity--;
            console.log("inside if");
          
          if (found.itemquantity == 0) {
            this.state.cart.splice(findex,1);
  
            console.log("else inside");
          }
          }
        }
        console.log(state.cart);
        let totalquantity = 0;
  this.state.cart.forEach((el) => {
    totalquantity = totalquantity -  el.itemquantity;
  });
      console.log("Quantity",totalquantity);
      this.$root.$emit("quantity", totalquantity);
      localStorage.setItem("cartquantity", JSON.stringify(totalquantity));
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      },
    addtocart(item) {
      
      item.itemquantity += 1;
      // this.addedtocart=!this.addedtocart;
      //this.addcart=index;
      //this.isCart = true;
      
      console.log(this.state.cart);
      console.log("item is" + item.itemname);
      console.log("quantity is" + item.quantity);
      let total = 0;
  this.state.cart.forEach((el) => {
    total = total + el.itemprice * el.itemquantity;
  });
  this.total=total;
  console.log("TOTal",total);
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