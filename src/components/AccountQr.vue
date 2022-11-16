<template>
    <v-form v-model="valid">
      <v-container style="background-color: #d0d5dd" class="px-9 py-10">
        <v-row class="px-4 py-2 pb-4">
            <v-col cols="6"  class="pa-0"><h4 class="text-left black-color">Aliosha Beritin</h4></v-col>
           <v-col cols="6" class="pa-0"> <h4 class="text-right black-color">Balance: $48.50</h4></v-col>
          </v-row>
          <hr/>
          <v-row class="px-4 py-2 pb-4">
            <v-col cols="12"  class="pa-0 mt-6"><p class="text-left black-color pa-0 ma-0">Aliosha@onfire.com</p></v-col>
          
          </v-row>
          <hr/>
        <v-row class="mt-10 pb-14 mb-16">
          
          <v-col cols="12" md="4" class="pa-0">
            <img width="50%" src="@/assets/code.png" />
          </v-col>
         
             
        </v-row>
       
        
      </v-container>
     

    </v-form>
  </template>
      
      <script>
      

  export default {
    name:'AccountQr',
   
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
      show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    }),
    
  };
  </script>
      
      <style scoped>
  .imgs{
  border: 4px solid transparent;
    border-radius: 4px;
    padding: 5px;
    background-color: #d0d5dd;
    
  }
  .imgs:hover{
    border: 4px solid #ef7e35;
  }
  .v-btn {
    text-decoration: none!important;
    text-transform: inherit;
  }
  
  
 
  </style>