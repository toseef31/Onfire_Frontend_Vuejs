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
        <v-col cols="12" md="4" class="pa-0 ma-0">
          <v-text-field
            label="Current Password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="passwordCurrent"
            :rules="passwordRules"
            :type="[showPassword ? 'text' : 'password']"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="pa-0 ma-0">
          <v-text-field
            label="New Password"
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
            label="Confirm New Password"
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
            @click="UpdatePassword"
            block
            color="#EF7E35"
            class="py-6 text-h6"
            :class="`elevation-${hover ? 54 : 14}`"
            >Update Password
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
      
      <script>
import axios from "axios";
export default {
  name: "UpdatePasswordComp",

  data: () => ({
    showPassword: false,
    hover: "",
    error: "",

    valid: false,

    passwordCurrent: "",

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
    if (!user) {
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
    async UpdatePassword() {
      console.log("i am in", this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        console.log("inside");

        console.log("password", this.currentpassword);

        console.log("password", this.password);
        console.log("confirm", this.passwordConfirm);
        try {
          let result = await axios.patch(
            "http://138.68.27.231:3000/api/v1/users/updateMyPassword",
            {
              passwordCurrent: this.passwordCurrent,
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
alert("done updated")
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