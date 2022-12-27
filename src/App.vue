<template>
  <v-app>
    <v-container>
      <v-app-bar
          color="#BDBDBD"
          dense
          dark
          class="d-flex justify-center"
      >
        <v-btn class="mr-5"><router-link to="/" style="text-decoration: none; color: white">Order Book</router-link></v-btn>
        <v-btn><router-link to="/chosing" style="text-decoration: none; color: white">Symbols</router-link></v-btn>
      </v-app-bar>
    </v-container>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data(){
    return {
      items: ['Ask', 'Bids']
    }
  },

  created() {

  }
};
</script>
