<template>
  <v-footer class="footer">
    <v-card-text>
      <router-link to="/">
      <v-btn class="mx-1">
        <v-icon size="34px"> mdi-home </v-icon>
      </v-btn></router-link>
      <router-link to="/MyProfilePage"><v-btn class="mx-4">
        <v-icon size="34px"> mdi-account </v-icon>
      </v-btn></router-link>
      <router-link to="/TicketPage"><v-btn class="mx-4">
        <v-icon size="34px"> mdi-ticket-confirmation </v-icon>
      </v-btn></router-link>
      <router-link to="/OrdersPage">  <v-btn class="mx-4">
        <v-icon size="34px"> mdi-clipboard-text </v-icon>
      </v-btn></router-link>
    </v-card-text>
  </v-footer>
</template>
  

  <script>
export default {
  name: "FooterMain",
  data() {
    return {
      icons: [
        "mdi-home",
        "mdi-account",
        "mdi-ticket-confirmation",
        "mdi-clipboard-text",
      ],
    };
  },
};
</script>

<style scoped>
.v-btn {
  background-color: transparent !important ;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  text-align: center;
}
.card {
 
  border-radius: 1px !important;
}
.v-btn--is-elevated {
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 0%), 0px 2px 2px 0px rgb(0 0 0 / 0%), 0px 1px 5px 0px rgb(0 0 0 / 0%);
}
.v-card__text {
  display: inherit;

  padding: 1px;
}

</style>