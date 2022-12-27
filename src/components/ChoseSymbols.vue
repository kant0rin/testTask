<template>
  <v-row
      class="mt-10 d-flex flex-column align-center"
  >
    <v-card-title class="d-flex justify-center font-weight-bold" style="font-size: 30px">Chose ticker</v-card-title>
    <v-btn depressed
     style="margin-bottom: 10px"
           @click="setTicker('BTCUSDT')"
    >
      BTCUSDT
    </v-btn>
    <v-btn
        depressed
        color="primary"
        style="margin-bottom: 10px"
        @click="setTicker('BNBBTC')"
    >
      BNBBTC
    </v-btn>
    <v-btn
        depressed
        color="error"
        style="margin-bottom: 10px"
        @click="setTicker('ETHBTC')"
    >
      ETHBTC
    </v-btn>
  </v-row>
</template>
<script>

export default {
  name:'ChoseSymbols',

  data(){
    return{

    }
  },

  methods: {
    setTicker(arg){
      this.$setCurrentTicker(arg)
    }
  },
}

</script>

