<template>
    <div>
      <div class="pa-4" style="background-color: #1d2939">
        <v-row>
          <v-col class="px-2 pt-3 pb-0">
            <div class="est">
              <p class="black--text float-left px-3">
                Estimated Wait:<span class="font-weight-bold"> 8mins</span>
              </p>
              <p class="black--text float-right px-3">
                Orders:<span class="font-weight-bold"> 12</span>
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="px-2 py-2 pb-10">
          <v-col
            cols="4"
            class="px-1 py-1 .justify-center im"
           
            v-for="item in products"
            :key="item.id"
          >
            <div class=" px-5 py-4">
              <v-row class="d-inline-flex">
                <img
                  width="100%"
                  height="80px"
                  crossorigin="anonymous"
                  :src="`http://138.68.27.231:3000/projectdata/servicepointmenu/${item.itemimage}`"
                />
              </v-row>
              <v-row>
                <h4
                  class="white--text"
                  style="font-size: 14px; font-weight: 400;text-align:left;line-height: 14px;"
                >
                  {{ item.itemname }}
                </h4>
              </v-row>
              <v-row>
                <p
                  class="white--text float-left ma-0"
                  style="font-size: 12px; font-weight: 400"
                >
                  {{ item.price }}
                </p>
              </v-row>
              <v-row v-if="item.quantity < 1" class="d-flex justify-end">
                <v-btn
                  @click="addtocart(item)"
                  color="#EF7E35"
                  class="float-right mt-2"
                  >Add</v-btn
                >
              </v-row>
              <v-row v-if="item.quantity != 0 && item.quantity > 0" class="d-flex justify-end mt-0">
                <v-col cols="4" class="pt-0 mt-3 pb-1">
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
                <v-col cols="4" class="pt-0 mt-2 px-0 pb-1">
                  <h3 class="white--text mt-3 ml-n1" style="font-size: 14px">
                    {{ item.quantity }}
                  </h3>
                </v-col>
                <v-col cols="4" class="pt-0 mt-3 pb-1">
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
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "CategoryProducts",
    data() {
      return {
        counter: 0,
        state: {cart: []},
        products: [],
        totalquantity:"0",
        pointname:""
       
      };
    },
    computed :{
        productData(){
            return this.pageload();
        }
    },
    watch: {
    '$route': function() {
        this.pageload();
    }
  },
    mounted() {
      this.pageload();
    },
    
    methods: {
      async pageload() {
        let result = await axios.get(
          "http://138.68.27.231:3000/api/v1/service/menubycategory/"+
            this.$route.params.id+"/category/" +
            this.$route.params.item
        );
  
        this.products = result.data.data.obj;
        this.pointname=result.data.data.name;
        console.log(this.pointname)
      },
  
      add(state, item) {
        console.log(item._id);
        console.log("id is" + item._id);
        let found = state.cart.find(
          (product) => product.id == item._id || product.id == item.id
        );
        console.log(found);
        if (found) {
          found.itemquantity += 1;
          item.quantity += 1;
          console.log("if");
        } else {
          this.state.cart.push({
            pointname:this.pointname,
          itemname: item.itemname,
          itemprice: item.price,
          itemquantity: item.quantity,
          id: item._id,
        });
          console.log("else");
        }
        console.log(state.cart);
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
        console.log(item._id);
        let found = state.cart.find(
          (product) => product.id == item._id
        );
        console.log(found);
        if (found) {
          if (found.itemquantity != 0) {
            found.itemquantity -= 1;
            item.quantity--;
            console.log("inside if");
          }
          if (found.itemquantity == 0) {
            state.cart.splice(item, 1);
  
            console.log("else inside");
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
        
        item.quantity += 1;
        // this.addedtocart=!this.addedtocart;
        //this.addcart=index;
        //this.isCart = true;
        this.state.cart.push({
          pointname:this.pointname,
          itemname: item.itemname,
          itemprice: item.price,
          itemquantity: item.quantity,
          id: item._id,
        });
        console.log(this.state.cart);
        let totalquantity = 0;
  this.state.cart.forEach((el) => {
    totalquantity = totalquantity +  el.itemquantity;
  });
      console.log("Quantity",totalquantity);
      this.$root.$emit("quantity", totalquantity);
        console.log("item is" + item.itemname);
        console.log("quantity is" + item.quantity);
        localStorage.setItem("cartquantity", JSON.stringify(totalquantity));
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
      },
    },
  };
  </script>
  
  <style scoped>
  .im {
    border: 2px solid #475467;
    border-radius: 4px;
    padding: 6px;
    max-width: 30.333333%;
      margin: 3px 5px;
    padding-top: 12px;
    background-color: #1d2939;
  }
  .xaxis {
    display: flex;
    overflow-x: auto;
  }
  .v-btn:not(.v-btn--round).v-size--default {
    height: 26px;
  
    padding: 0 13px;
  }
  .v-btn {
    text-decoration: none;
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