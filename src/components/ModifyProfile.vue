<template>
  <v-form ref="form">
    <v-container
      style="background-color: #d0d5dd; height: 100vh"
      class="px-9 py-10"
    >
      <v-row>
        <p class="red--text">{{ this.error }}</p>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="userdetail.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="userdetail.surname"
            :rules="nameRules"
            label="Sur Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="userdetail.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="userdetail.mobilenumber"
            :rules="mobileRules"
            label="Mobile Number"
            required
          ></v-text-field>
        </v-col>
       
        <v-col cols="12" class="pa-0 mt-6 text-left"
          >
          <router-link to="/UpdatePasswordPage"
        ><v-icon>mdi-key mdi-rotate-315 </v-icon
          ><span class="text-left black--text pa-0 mx-0 ml-2">**********</span
          ><v-icon style="float: right">mdi-eye-off</v-icon>
          <hr/></router-link></v-col
        > 
         <h4 class="mt-1 black--text">Change your password</h4>
     
      </v-row>
      <v-row class="pt-15 bottom mt-16">
        <v-col class="pa-0 mt-16">
          <v-btn
            @click="update"
            block
            color="#EF7E35"
            class="py-6 text-h6"
            :class="`elevation-${hover ? 54 : 14}`"
            >UPDATE YOUR PROFILE
          </v-btn>
         
         
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
    
    <script>
import axios from "axios";
export default {
  name: "ModifyProfile",

  data: () => ({
    userdetail: {
        name: "",
        surname: "",
        email: "",
        mobilenumber: "",
        accountoldpassword: "",
        password: "",
        
        id: "",
      },
    showPassword: false,
    hover: "",
    error: "",
   
    valid: false,
    name: "",
    surname: "",
    mobilenumber: null,
    mobileRules: [
      (v) =>
        (v && v.length >= 10) || "Number must be greater than 10 characters",
    ],
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 2) || "Name must be greater than 2 characters",
    ],

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    
  
  }),
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "MyProfilePage" });
    }
    
  },
  
  created() {
    this.id = JSON.parse(localStorage.getItem("user-info")).id;
    this.userdetail.name = JSON.parse(localStorage.getItem("user-info")).name;
    this.userdetail.surname = JSON.parse(localStorage.getItem("user-info")).surname;
    this.userdetail.email = JSON.parse(localStorage.getItem("user-info")).email;
    this.userdetail.mobilenumber = JSON.parse(localStorage.getItem("user-info")).mobilenumber;
    this.userdetail.title = JSON.parse(localStorage.getItem("user-info")).title;

    
  },
  methods: {
    
    async update(){
     
     
     if (this.$refs.form.validate()) {
     let result = await axios.patch(
            "http://138.68.27.231:3000/api/v1/users/updateme",
            {
      
       name: this.userdetail.name,
       surname: this.userdetail.surname,
       email: this.userdetail.email,
       mobilenumber: this.userdetail.mobilenumber,
       
     });
     if (result.status == 200) {
       
       console.log(result);
       localStorage.setItem("user-info", JSON.stringify(result.data.data.user));
       this.$router.push({ name: "MyProfilePage" });
     } else {
       alert("not");
     }
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

.red {
  color: red;
}

.v-btn {
  text-decoration: none;
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