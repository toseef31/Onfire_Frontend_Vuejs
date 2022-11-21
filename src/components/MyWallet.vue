<template>
  <v-form v-model="valid">
    <v-container style="background-color: #d0d5dd" class="px-6 py-10">
      <v-row class="px-2 py-2 pb-4">
        <v-col cols="6" class="pa-0"
          ><h4 class="text-left black-color">Aliosha Beritin</h4></v-col
        >
        <v-col cols="6" class="pa-0">
          <h4 class="text-right black-color">Balance: $48.50</h4></v-col
        >
      </v-row>
      <hr />
      <v-row class="px-2 py-2 pb-1">
        <v-col cols="2" class="pa-0">
          <img class="mt-5" width="40px" src="@/assets/card.png" />
        </v-col>
        <v-col cols="8" class="pa-0 mt-7">
          <h4 class="text-left black-color">*****373</h4></v-col
        >

        <v-col cols="2" class="pa-0 mt-2">
          <v-switch v-model="master"></v-switch>
        </v-col>
      </v-row>
      <hr />
      <v-row class="px-2 py-2 pb-1">
        <v-col cols="2" class="pa-0">
          <img class="mt-7" width="40px" src="@/assets/visa.png" />
        </v-col>
        <v-col cols="8" class="pa-0 mt-7">
          <h4 class="text-left black-color">*****788</h4></v-col
        >

        <v-col cols="2" class="pa-0 mt-1">
          <v-switch v-model="visa"></v-switch>
        </v-col>
      </v-row>
      <hr />

      <v-row class="bottom">
        <v-col class="pb-16 pt-0 mt-10">
          <v-btn
            :class="`elevation-${hover ? 54 : 14}`"
            color="transparent"
            class="mb-16 py-6"
            >Add Payment Method</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
      
      <script>
export default {
  name: "MyWallet",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    master: true,
    visa: false,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: "",
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match",
    },
  }),
};
</script>
      
      <style scoped>
.v-application .elevation-14 {
  box-shadow: 0px 7px 9px -4px rgb(0 0 0 / 59%),
    0px 14px 21px 2px rgb(0 0 0 / 14%), 0px 5px 26px 4px rgb(0 0 0 / 12%) !important;
}
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