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
          class="px-1 py-1 .justify-center"
         
          v-for="item in products"
          :key="item.id"
        >
          <div class="im px-5 py-6">
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
                style="font-size: 14px; font-weight: 400;text-align:left;"
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
                class="float-right mt-6"
                >Add</v-btn
              >
            </v-row>
            <v-row v-if="item.quantity != 0" class="d-flex justify-end">
              <v-col cols="4" class="pt-0 mt-3">
                <v-btn
                  class="mr-n3 mt-2"
                  @click="decrease(item)"
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
              <v-col cols="4" class="pt-0 mt-2 px-0">
                <h3 class="white--text mt-3 ml-n1" style="font-size: 14px">
                  {{ item.quantity }}
                </h3>
              </v-col>
              <v-col cols="4" class="pt-0 mt-3">
                <v-btn
                  class="ml-n3 mt-2"
                  @click="add(item)"
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
  name: "MenuView",
  data() {
    return {
      counter: 0,
      cart: [],
      products: [],
      
     
    };
  },
  mounted() {
    this.pageload();
  },
  
  methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/service/getservicepoint/" +
          this.$route.params.id
      );

      this.products = result.data.data.servicepoint.pointmenu;
    },

    add(item) {
      item.quantity += 1;
    },
    decrease(item) {
      if (item.quantity != 0) {
        item.quantity -= 1;
      }
    },
    addtocart(item) {
      
      item.quantity += 1;
      // this.addedtocart=!this.addedtocart;
      //this.addcart=index;
      //this.isCart = true;
      console.log("item is" + item.itemname);
      console.log("quantity is" + item.quantity);
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
.xaxis {
  display: flex;
  overflow-x: auto;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 29px;

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