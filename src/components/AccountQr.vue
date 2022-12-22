<template>
  <v-form v-model="valid">
    <v-container style="background-color: #d0d5dd" class="px-9 py-10">
      <v-row class="px-4 py-2 pb-4">
        <v-col cols="6" class="pa-0"
          ><h4 class="text-left black-color">{{ this.name }}</h4></v-col
        >
        <v-col cols="6" class="pa-0">
          <h4 class="text-right black-color">Balance: $48.50</h4></v-col
        >
      </v-row>
      <hr />
      <v-row class="px-4 py-2 pb-4">
        <v-col cols="12" class="pa-0 mt-6"
          ><p class="text-left black-color pa-0 ma-0">
            {{ this.email }}
          </p></v-col
        >
      </v-row>
      <hr />
      <v-row class="mt-10 pb-4 mb-0">
        <v-col cols="12" md="4" class="pa-0">
          <p v-html="this.path"></p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
      
      <script>
import axios from "axios";
export default {
  name: "AccountQr",

  data: () => ({
    id: "",
    userdata: "",
    name: "",
    email: "",
    path: "",
  }),
  
  async created() {
    
    
    this.userdata = JSON.parse(localStorage.getItem("user-info"))._id;
    this.name = JSON.parse(localStorage.getItem("user-info")).name;
    this.email = JSON.parse(localStorage.getItem("user-info")).email;
    try {
      let result = await axios.get(
        "http://138.68.27.231:3000/api/v1/users/myqrcode"
      )
.then(data => this.path=data.data)
      

      

      if (result.status == 500) {
        this.error = this.response;
        console.log("11111: ", this.error);
      }
      if (result.status == 200) {
        (this.error = ""), (this.overlay = !this.overlay);

        alert("success");
      }
    } catch (err) {
      //  console.log("catched: ", err.message);
      this.error = err.response.data.message;

      console.log(err.response.data.message);
    }
  },
};
</script>
      
      <style scoped>
.imgs {
  border: 4px solid transparent;
  border-radius: 4px;
  padding: 5px;
  background-color: #d0d5dd;
}
.imgs:hover {
  border: 4px solid #ef7e35;
}
.v-btn {
  text-decoration: none !important;
  text-transform: inherit;
}
</style>