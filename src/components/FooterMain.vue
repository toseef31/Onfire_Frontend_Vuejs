<template>
  <v-footer class="footer">
    <v-card-text class="center">
      
      <div class=" mt-0 mx-8"
      :style="{
        backgroundColor: home ? 'transparent' : 'rgb(239, 126, 53)',
        
      }" @click="homeClick">
      <router-link to="/">
        <img  width="24px" src="@/assets/home.png" />
       
      </router-link>
    </div>
      
        <div class=" mt-0 mx-8"
      :style="{
        backgroundColor: account ? 'transparent' : 'rgb(239, 126, 53)',
        
      }" @click="accountClick">
      <router-link to="/MyProfilePage">
        <img  width="20px" src="@/assets/person.png" />
     
      </router-link>
    </div>
      
        <div class=" mt-0 mx-8"
      :style="{
        backgroundColor: ticket ? 'transparent' : 'rgb(239, 126, 53)',
        
      }" @click="ticketClick">
      <router-link to="/TicketPage">
        <img  width="22px" src="@/assets/ticket.png" />
      </router-link>
        </div>
     
        
        <div class=" mt-0 mx-8"
      :style="{
        backgroundColor: order ? 'transparent' : 'rgb(239, 126, 53)',
        
      }" @click="orderClick">
      <router-link to="/OrdersPage">
        <img  width="20px" height="auto" src="@/assets/orders.png" />
      </router-link> 
      </div>
     
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
      home: true,
      account: true,
      ticket: true,
      order: true,
    };
  },
  methods:{
    homeClick(){
      this.home = false;
      this.account = true;
      this.ticket = true;
      this.order = true;
    },
    accountClick(){
      this.home = true;
      this.account = false;
      this.ticket = true;
      this.order = true;
    },
    orderClick(){
      this.home = true;
      this.account = true;
      this.ticket = true;
      this.order = false;
    },
    ticketClick(){
      this.home = true;
      this.account = true;
      this.ticket = false;
      this.order = true;
    }
  }
};
</script>

<style scoped>
.v-btn {
  background-color: transparent !important ;
}
.bully{
  background-color: rgb(239, 126, 53);
    padding: 0px 2px;
    border: 1px solid rgb(239, 126, 53);
    border-radius: 3px;
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