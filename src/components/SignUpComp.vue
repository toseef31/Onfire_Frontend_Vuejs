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
          
            label="Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
            :rules="passwordRules"
            :type="[showPassword ? 'text' : 'password']"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="pa-0 ma-0">
          <v-text-field
            label="Confirm Password"
            v-model="passwordConfirm"
            :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pt-15 bottom mt-16">
        <v-col class="pa-0 mt-16">
          <v-btn
            @click="signup"
            block
            color="#EF7E35"
            class="py-6 text-h6"
            :class="`elevation-${hover ? 54 : 14}`"
            >CREATE YOUR PROFILE
          </v-btn>
          <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
            <div
              class="px-5 py-5"
              style="background-color: #344054; border-radius: 6px"
            >
              <p class="white-text my-6">An Email has been sent to</p>
              <div
                style="background-color: white; border-radius: 4px"
                class="px-4 py-3"
              >
                <v-icon color="black">mdi-email-outline</v-icon
                ><span class="ml-2 black--text">{{ this.email }}</span>
              </div>
              <p class="white-text my-7">
                Please Check your Email to activate On-Fire
              </p>
              <router-link to="/MyProfilePage"
                ><v-btn
                  :class="`elevation-${hover ? 54 : 14}`"
                  block
                  color="#EF7E35"
                  class="py-6 text-h6 black--text"
                  @click="overlay = false"
                >
                  CONTINUE
                </v-btn></router-link
              >
            </div>
          </v-overlay>
          <p class="text-left #475467-text mt-3" style="font-size: 12px">
            By creating an account, you agree to the Terms of Service and
            Privacy Policy
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
    
    <script>
import axios from "axios";
export default {
  name: "SignUpComp",

  data: () => ({
   
    showPassword: false,
    hover: "",
    error: "",
    absolute: true,
    opacity: 0,
    overlay: false,
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
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Name must be greater than 2 characters",
    ],

    passwordConfirm: "",

    confirmPasswordRules: [(v) => !!v || "Confirm Password is required"],
  }),
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "MyProfilePage" });
    }
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.passwordConfirm || "Password must match";
    },
  },
  methods: {
    async signup() {
      console.log("i am in", this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        console.log("inside");
        console.log(this.name);
        console.log(this.surname);
        console.log("password", this.password);
        console.log("confirm", this.passwordConfirm);
        try {
          let result = await axios.post(
            "http://138.68.27.231:3000/api/v1/users/signup",
            {
              name: this.name,
              surname: this.surname,
              email: this.email,
              mobilenumber: this.mobilenumber,
              password: this.password,
              passwordConfirm: this.passwordConfirm,
            }
          );

          console.log("result: ", result);

          if (result.status == 500) {
            this.error = this.response;

            console.log("11111: ", this.error);
          }
          if (result.status == 200) {
            (this.error = ""), (this.overlay = !this.overlay);

            localStorage.setItem("user-info", JSON.stringify(result.data));
          }
        } catch (err) {
          //  console.log("catched: ", err.message);
          this.error = err.response.data.message;

          console.log(err.response.data.message);
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