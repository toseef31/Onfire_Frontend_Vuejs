<template>
  <div>
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
        <p class="white-text my-6 text-center">
          Create or login to the On-Fire account to continue with your order
        </p>
        <router-link to="/LoginPage">
          <div
            style="background-color: white; border-radius: 4px"
            class="px-4 py-3"
          >
            <v-icon color="black">mdi-email-outline</v-icon
            ><span class="ml-2 black--text">Continue with your email</span>
          </div></router-link
        >
        <p class="white-text my-6 text-center">Continue with</p>
        <div class="">
          <v-row>
            <v-col cols="6">
              <div>
                <GoogleLogin
                  :params="params"
                  :onSuccess="onSuccess"
                  :onFailure="onFailure"
                  style="float: right"
                  ><img width="37px" src="@/assets/google.png"
                /></GoogleLogin></div
            ></v-col>
            <v-col cols="6">
              <facebook-login
                style="float: left; margin-top: -28px"
                appId="1085679415462541"
                loginLabel=""
                logoutLabel=""
                @login="onLogin"
                @logout="onLogout"
                @sdk-loaded="sdkLoaded"
              >
              </facebook-login></v-col
          ></v-row>
        </div>
        <p
          block
          color="rgb(239 126 53 / 0%)"
          class="py-2 text-h6 mt-9 white--text mb-0 text-center"
          @click="overlay = false"
        >
          Cancel
        </p>
      </div>
    </v-overlay>
    <v-row style="background-color: #475467">
      <v-col class="px-6 py-7 xaxis">
        <template v-for="cat in category">
          <v-btn
            v-for="item in cat.subcategories"
            :key="item.id"
            :class="`elevation-${hover ? 54 : 14}`"
            class="ma-1 slidebut"
            color="#E4E7EC"
            style="width: 96px; font-size: 12px; height: 52px"
            >{{ item.name }}</v-btn
          >
        </template>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
import facebookLogin from "facebook-login-vuejs";
import GoogleLogin from "vue-google-login";
import axios from "axios";
import setAuthHeader from "../utils/setAuthHeader";
export default {
  name: "CategoryCoroucel",
  components: {
    facebookLogin,
    GoogleLogin,
  },
  data() {
    return {
      category: [],
      page: "",
      id: "",
      name: "",
      email: "",
      overlay: true,
      params: {
        client_id:
          "82962989998-0sabd6onlspd5gibr2ov8mgfi1h5lgva.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.overlay = false;
    }
    this.pageload();
  },

  methods: {
    async pageload() {
      if (this.$route.params.pointname) {
        let result = await axios.get(
          "http://138.68.27.231:3000/api/v1/category/getcategories/servicepoint"
        );
        console.log(result);
        this.category = result.data;
      } else {
        let result = await axios.get(
          "http://138.68.27.231:3000/api/v1/category/getcategories/foodservicepoint"
        );
        console.log(result);
        this.category = result.data;
      }
    },
    onSuccess(googleUser) {
      console.log("google success");
      console.log(JSON.stringify(googleUser));

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    onFailure(googleUser) {
      alert("google failed");

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    },
    getUserData() {
      this.FB.api(
        "/me",
        "GET",
        { fields: "id,name,email" },
        async (userInformation) => {
          console.warn("get data from fb", userInformation);
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;

          try {
            let result = await axios.post(
              "http://138.68.27.231:3000/api/v1/users/signup",
              {
                email: this.email,

                name: this.name,
                type: "1",
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

              setAuthHeader(result.data.token);
              this.$router.push({ name: "MyProfilePage" });
            }
          } catch (err) {
            //console.log("catched: ", err.message);

            this.error = err.response.data.message;
            console.log(err.response.data.message);
            this.statuserror = err.message;
          }
          localStorage.setItem("user-info", JSON.stringify(userInformation));
        }
      );
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected;
      this.FB = payload.FB;
      if (this.isConnected) this.getUserData();
    },
    onLogin() {
      this.isConnected = true;
      this.getUserData();
    },
    onLogout() {
      this.isConnected = false;
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
  border: 3px solid rgb(228, 231, 236);
  padding: 0 13px;
}
.v-btn {
  text-decoration: none;
}
.v-btn:hover {
  border: 3px solid #ee771c !important;
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