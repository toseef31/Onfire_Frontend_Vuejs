<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-container
      style="background-color: #d0d5dd; height: 100vh"
      class="px-9 py-10"
    >
      <v-row>
        <p class="red--text">{{ this.error }}</p>
      </v-row>
      <v-row class="mt-16 pt-16">
        <v-col cols="12" md="4" class="pa-0">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
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
      </v-row>
      <v-row class="pt-1 bottom mt-11">
        <v-col class="pa-0 mt-6">
          <v-btn
            @click="signup"
            block
            color="#EF7E35"
            class="py-6 text-h6"
            :class="`elevation-${hover ? 54 : 14}`"
            >LOGIN
          </v-btn>
          <h4 class="mt-6">OR</h4>
        </v-col>
      </v-row>
      <v-row class="pt-0 bottom mt-0">
        <v-col class="pa-0 mt-6">
          <router-link to="/SignUpPage"
            ><p class="py-0 text-h6 black--text text-decoration-underline">
              CREATE YOUR PROFILE
            </p></router-link
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
      
      <script>
import axios from "axios";
export default {
  name: "LoginComp",

  data: () => ({
    showPassword: false,
    error: "",

    valid: false,

    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],

    password: "",

    passwordRules: [(v) => !!v || "Password is required"],
  }),
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "MyProfilePage" });
    }
  },
  methods: {
    async signup() {
      console.log("i am in", this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        console.log("inside");

        try {
          let result = await axios.post(
            "http://138.68.27.231:3000/api/v1/users/login",
            {
              email: this.email,

              password: this.password,
            }
          );

          console.log("result: ", result);

          if (result.status == 500) {
            this.error = this.response;

            console.log("11111: ", this.error);
          }
          if (result.status == 200) {
            console.log("success");
            console.log(result.data.data.user);
            localStorage.setItem("user-info", JSON.stringify(result.data.data.user));
            this.$router.push({ name: "MyProfilePage" });
          }
        } catch (err) {
          //  console.log("catched: ", err.message);
          this.error = err.response;
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