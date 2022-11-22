<template>
  <v-form ref="form">
    <v-container style="background-color: #d0d5dd;height:100vh;" class="px-9 py-10">
      <v-row>
        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="surname"
            :rules="nameRules"
            label="Sur Name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="mobilenumber"
            :rules="mobileRules"
            label="Mobile Number"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="pa-0 ma-0">
        <v-text-field
        ref="password"
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min, rules.strength]"
              validate-on-blur
              type="password"
              label="Password"
              v-validate="'required'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          
            </v-col>
            <v-col cols="12" md="4" class="pa-0 ma-0">
        <v-text-field
              v-model="passwordConfirm"
              
              :rules="[rules.required, rules.min, rules.strength]"
              validate-on-blur
              :type="password"
              label="Confirm Password"
             
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          
            </v-col>
      </v-row>
      <v-row  class="pt-15 bottom mt-16">
        <v-col class="pa-0 mt-16">
          
         
          <v-btn  @click="signup" block color="#EF7E35" class=" py-6 text-h6" :class="`elevation-${hover ? 54 : 14}`"
            >CREATE YOUR PROFILE 
        </v-btn
          >
          <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
        >
        <div class="px-5 py-5" style="background-color:#344054;border-radius:6px;">
        <p class="white-text my-6">An Email has been sent to</p>
        <div style="background-color:white;border-radius: 4px;" class="px-4 py-3" ><v-icon color="black">mdi-email-outline</v-icon><span class="ml-2 black--text">aliosha@onfire.com</span></div>
        <p class="white-text my-7">Please Check your Email to activate on fire</p>
          <v-btn
          :class="`elevation-${hover ? 54 : 14}`"
          block
          color="#EF7E35" class=" py-6 text-h6 black--text"
            @click="overlay = false"
          >
           CONTINUE
          </v-btn>
          </div>
        </v-overlay>
          <p class="text-left #475467-text mt-3" style="font-size:12px;">By creating an account, you agree to the Terms of Service and Privacy Policy</p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
    
    <script>
    import axios from "axios";
export default {
    name:'SignUpComp',
  data: () => ({
    showPassword:false,
    
    absolute: true,
      opacity: 0,
      overlay: false,
    valid: false,
    name: "",
    surname: "",
    mobilenumber:null,
    mobileRules:[
        (v) => !!v || "Number is required",
        (v) => (v && v.length >= 10) || "Number must be greater than 10 characters",
        
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be greater than 2 characters",
        (v) => /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(v) || "Numbers not allowed",
      ],
   
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
   
      passwordRules: [
        (v) => !!v || "Password is Required",
        (v) => v.length >= 6 || "Password greater then 6 digit",
      ],
      passwordConfirm: "",
     
    show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
  }),
  methods: {
  
    async signup() {
      console.log("i am in")
      if (this.$refs.form.validate()) {
        let result = await axios.post("http://138.68.27.231:3000/api/v1/users/signup", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          mobilenumber:this.mobilenumber,
          password: this.password,
          passwordConfirm: this.passwordConfirm,

        });
        
        (this.name = ""),(this.surname = ""), (this.email = ""), (this.password = ""); (this.mobilenumber = "");(this.password = "");(this.passwordConfirm = "");
        
        if (result.status == 200) {
          this.overlay = !this.overlay;
         
          localStorage.setItem("user-info", JSON.stringify(result.data));
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