<template color="#101828">
  <v-card flat tile>
   

    <v-toolbar color="#101828" dark class="pa-n8" style="z-index: 10;">
      <v-row class="pr-0 pl-3" v-show="magnify">
        <router-link to="/"
          ><img class="ml-n2 mt-1" width="120px" src="@/assets/logo.png"
        /></router-link>

        <v-spacer></v-spacer>

        <v-btn
          class="px-0 mt-2 white--text transparent text-transform-lowercase"
          :elevation="n - 1"
          ><v-icon color="#EF7E35">mdi-map-marker-outline</v-icon>Santiago
          <v-icon>mdi-chevron-down</v-icon></v-btn
        >
        <v-btn icon>
          <v-icon @click="magnify = !magnify && setMessage()" class="mr-n3">mdi-magnify</v-icon>
        </v-btn>
      </v-row>
      <v-row class="mt-16 pt-3" v-if="!magnify">
        <v-btn class="searchicon mt-3 mr-4 ml-2" icon>
          <v-icon @click="magnify = !magnify" class="ma-0" color="black"
            >mdi-close</v-icon
          >
        </v-btn>
        <v-form style="width:70%;">
        <v-text-field
          placeholder="search"
          filled
          light
          dense
          append-icon="mdi-magnify"
          background-color="white"
          color="black"
          class="mt-1"
          v-model="query" v-on:input="setMessage"
        >
        </v-text-field>
      </v-form>
      <v-row style="background-color:  #101828;" class="mt-n7 xaxis">
      <v-col class="px-6 py-4 xaxis">
        <router-link to="/"
          >
        <v-btn
            
            :class="`elevation-${hover ? 54 : 14}`"
            class="ma-1 slidebut"
            color="#E4E7EC"
            style="width: 96px; font-size: 12px; height: 52px;text-transform: none;color:black;"
            >All</v-btn
          ></router-link>
        <div v-for="item in category"
            :key="item.id">
            
          <v-btn
          @click="cat(item._id)"
            :class="`elevation-${hover ? 54 : 14}`"
            class="ma-1 slidebut"
            color="#E4E7EC"
            style="width: 96px; font-size: 12px; height: 52px;text-transform: none;color:black;"
            >{{item.name}}</v-btn
          >
      
      </div>
      </v-col>
    </v-row>
      </v-row>
    </v-toolbar>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "HeaderTop",
  data() {
    return {
      magnify: true,
      category: [],
      query:"",
      ID:""
    };
  },
  mounted() {
    this.pageload();
    console.alert("i am in");
  },
 
    methods: {
    async pageload() {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/category/getcategories/event"
      );

      this.category = result.data[0].subcategories;
      console.log(this.category);

      
    },
    cat(_id){
      console.log(_id);
      this.$root.$emit('ID',_id);
    },
    setMessage(){
      console.log(this.query);
     // this.$router.push({
    //    path: '/SearchEventPage',
   // name: 'SearchEventPage',
  
//});

      this.$root.$emit('query', this.query);
    
    }
  },
};
</script>

<style scoped>
.searchicon {
  background-color: white;
  border: 1px;
  border-radius: 40px;
  width: 25px !important;
  height: 25px !important;
}
.text .v-icon {
  color: black !important;
}
.custom-label-color .v-label {
  color: red;
}
.v-application .primary--text {
    color: black !important;
    caret-color: black!important;
}
.loc{
  padding: 12px 12px;
    background-color: #EF7E35;
    margin: 12px;
    border: 1px solid #EF7E35;
    width: 92%;
    border-radius:6px;
}
.xaxis {
  display: flex;
  overflow-x: auto  !important;
}
.slidebut {
  height: 29px;
  border: 3px solid rgb(228, 231, 236);
  padding: 0 13px;
}
.slidebut {
  text-decoration: none;
}
.slidebut {
  width: 96px;
  font-size: 12px;
  height: 52px;
}
.slidebut:hover {
  border: 3px solid #ee771c !important;
}
</style>