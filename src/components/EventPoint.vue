<template>
    <div>
 <div class="pa-4" style="background-color: #1D2939;">
<v-row class="pb-8">
<v-col class="pb-16">
          
            <div class="pb-16 mt-14" ><img width="100%" src="@/assets/banner189.png" /></div>
            
        </v-col>
 </v-row>
 <v-row>
    <v-col cols="6">
        <p class="white--text float-left">Choose Where to order</p>
    </v-col>
    <v-col cols="6">
        <router-link to="/MenuPage"> <p class="white--text float-right mr-2">View Menu</p></router-link>
    </v-col>
 </v-row>
 </div>
 <v-row class="px-7 py-4" style="background-color: #475467;">
   <v-col  cols="4" class="px-1 py-1">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="80%" src="@/assets/alcoholic.png" />
    <h6 class="black--text">General Bar</h6></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="80%" src="@/assets/alcoholic.png" />
    <h6 class="black--text">General Bar</h6></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="80%" src="@/assets/alcoholic.png" />
    <h6 class="black--text">General Bar</h6></div></router-link>
</v-col>

 </v-row>
 <v-row class="px-7 py-4" style="background-color: #475467;">
   <v-col  cols="4" class="px-1 py-1">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="80%" src="@/assets/alcoholic.png" />
    <h6 class="black--text">General Bar</h6></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="80%" src="@/assets/alcoholic.png" />
    <h6 class="black--text">General Bar</h6></div></router-link>
</v-col>
<v-col  cols="4" class="px-1 py-1">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="80%" src="@/assets/alcoholic.png" />
    <h6 class="black--text">General Bar</h6></div></router-link>
</v-col>

 </v-row>
</div>
</template>

<script>
export default {
name:'EventPoint',
}
</script>

<style>
.imgstyle{
    border: 4px solid #EF7E35;
    border-radius: 4px;
    padding: 20px;
    background-color: #D0D5DD;
}
</style>