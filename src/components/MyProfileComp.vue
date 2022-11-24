<template>
    <v-form v-model="valid">
      <v-container style="background-color: #d0d5dd" class="px-9 py-10">
        <v-row class="px-4 py-2 pb-4">
            <v-col cols="6"  class="pa-0"><h4 class="text-left black-color">{{this.name}}</h4></v-col>
           <v-col cols="6" class="pa-0"> <h4 class="text-right black-color">Balance: $48.50</h4></v-col>
          </v-row>
          <hr/>
          <v-row class="px-4 py-2 pb-4">
            <v-col cols="12"  class="pa-0 mt-6"><p class="text-left black-color pa-0 ma-0">{{this.email}}<span style="color:red;float: right;">UNVERIFIED</span></p></v-col>
          
          </v-row>
          <hr/>
          <v-row class="px-4 py-2 pb-4">
            <v-col cols="12"  class="pa-0 mt-6"><p class="text-left black-color pa-0 ma-0">{{this.mobilenumber}}</p></v-col>
          
          </v-row>
          <hr/>
          <v-row class="px-4 py-2 pb-4">
            <v-col cols="12"  class="pa-0 mt-6 text-left"><v-icon>mdi-key mdi-rotate-315 </v-icon><span class="text-left black-color pa-0 mx-0 ml-2">**********</span><v-icon style="float: right;">mdi-eye-off</v-icon></v-col>
          
          </v-row>
          <hr/>
          <v-row  class=" bottom mt-16">
          <v-col class="pb-7 pt-0 ">
            
           
            <v-btn :class="`elevation-${hover ? 54 : 14}`" color="transparent" class=" py-6"
              >Close Session</v-btn
            >
              </v-col>
        </v-row>
        
       
        
      </v-container>
     

    </v-form>
  </template>
      
      <script>
      
      
  export default {
   
    name:'MyProfileComp',
   
    data: () => ({
      valid: false,
      id:'',
      userdata:'',
      name: '',
      email: '',
      mobilenumber: '',
      password: '',
      
      
    }),
    async created(){
      this.userdata=(JSON.parse(localStorage.getItem('user-info'))._id);
      this.name=(JSON.parse(localStorage.getItem('user-info')).name);
      this.email=(JSON.parse(localStorage.getItem('user-info')).email);
      this.mobilenumber=(JSON.parse(localStorage.getItem('user-info')).mobilenumber);
      this.password=(JSON.parse(localStorage.getItem('user-info')).password);
    //const result= await axios.get("http://138.68.27.231:3000/api/v1/users/profiledata"+this.$route.params.id);
    
   

  }
    
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