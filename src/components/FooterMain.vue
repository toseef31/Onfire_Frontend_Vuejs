<template>
  <v-footer class="footer">
    <v-card-text class="center">
      <router-link to="/">
      
        <img class="mt-0 mx-7" width="24px" src="@/assets/home.png" />
      </router-link>
      <router-link to="/MyProfilePage">
        <img class="mt-0 mx-7" width="20px" src="@/assets/person.png" />
      </router-link>
      <router-link to="/TicketPage">
        <img class="mt-0 mx-7" width="22px" src="@/assets/ticket.png" />
     </router-link>
      <router-link to="/OrdersPage">  
        <img class="mt-0 mx-8" width="20px" height="auto" src="@/assets/orders.png" />
     </router-link>
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
.center{
  justify-content: center !important;
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