<template>
    <div>
 <div class="pa-4" style="background-color: #1D2939;">
<v-row class="pb-8">
<v-col>
            <div>
            <div ><img width="100%" src="@/assets/banner189.png" /></div>
            <h3 class="heading mt-7">Hernan Cataneo</h3>
            <p class=" mt-16 white--text text-left">Saturday, 15th January 2022, 7pm</p>
            <p class="white--text text-left">Espacio Riesco</p>
            <v-row>
            <v-col cols="10">
            <p class="white--text text-left pb-16">Avenida El Salto 5000, Huechuraba, Region Mero politana </p>
            </v-col>
            <v-col cols="2">
                <img class="mt-n2" width="100%" src="@/assets/google-maps.png" />
            </v-col>
            </v-row>
        </div>
        </v-col>
 </v-row>
 </div>
 <v-row style="background-color: #475467;">
   <v-col class="px-16 py-7">
    <router-link to="/ProductPage"> <div class="imgstyle"><img width="30%" src="@/assets/alcoholic.png" />
    <h2 class="black--text">Buy Food & Drinks</h2></div></router-link>
</v-col>
 </v-row>
</div>
</template>

<script>
export default {
name:'VenuComp',
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