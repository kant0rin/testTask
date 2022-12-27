<template>
  <v-container fluid class="d-flex">
    <v-card class="mx-auto">
      <v-card-title class="d-flex justify-center align-center blue">{{ticker}} Ask</v-card-title>
      <div class="d-flex justify-space-around align-baseline mb-5 mt-5" style="font-size: 20px">
        <div>Price</div>
        <div>Amount</div>
        <div v-if="!$vuetify.breakpoint.xs" >Total</div>
      </div>
      <v-virtual-scroll
          :items="arrA"
          :item-height='50'
          height="700"
          width="600"
          style="cursor: pointer"
      >
        <template v-slot:default="{item}">
          <div class="d-flex justify-space-around align-baseline">
            <div style="font-size: 20px; font-weight: bolder">{{ item.price }}</div>
            <div style="font-size: 20px; font-weight: bolder">{{ item.amount }}</div>
            <div v-if="!$vuetify.breakpoint.xs" style="font-size: 20px; font-weight: bold">{{ item.total }}</div>
          </div>
        </template>
      </v-virtual-scroll>
    </v-card>
    <v-card class="mx-auto">
      <v-card-title class="d-flex justify-center align-center blue">{{ticker}} Bids</v-card-title>
      <div class="d-flex justify-space-around align-baseline mb-5 mt-5" style="font-size: 20px">
        <div>Price</div>
        <div>Amount</div>
        <div v-if="!$vuetify.breakpoint.xs" >Total</div>
      </div>
      <v-virtual-scroll
          :items="arrB"
          :item-height='50'
          height="700"
          width="600"
          style="cursor: pointer"
      >
        <template v-slot:default="{item}">
          <div class="d-flex justify-space-around align-baseline">
            <div style="font-size: 20px; font-weight: bolder">{{ item.price }}</div>
            <div style="font-size: 20px; font-weight: bolder">{{ item.amount }}</div>
            <div v-if="!$vuetify.breakpoint.xs" style="font-size: 20px; font-weight: bold">{{ item.total }}</div>
          </div>
        </template>
      </v-virtual-scroll>
    </v-card>


  </v-container>
</template>

<script>
export default {
  name: "VirtualScroll",

  data() {
    return {
      arrA: [],
      arrB: [],
      ticker: '',
      asks: null,
      bids: null,
      lastUpdateId: null
    }
  },
  async created() {
    this.ticker = this.$getCurrentTicker() || 'BTCUSDT'
    this.lastUpdateId = await this.$getOrderBook(this.ticker)
    this.$openStream(this.ticker.toLowerCase()).onmessage = e => {
      const data = JSON.parse(e.data)
      if (data.u > this.lastUpdateId){
        this.asks = data.a
        this.bids = data.b
      }
      this.arrA = []
      this.arrB = []
      for (let i of this.asks){
        this.arrA.push({
          price: i[0] > 1 ? Number(i[0]).toFixed(2) : Number(i[0]).toFixed(5),
          amount: Number(i[1]).toFixed(2),
          total: (Number(i[0]).toFixed(2) * Number(i[1]).toFixed(2)).toFixed(2)
        })
      }
      for (let i of this.bids){
        this.arrB.push({
          price: i[0] > 1 ? Number(i[0]).toFixed(2) : Number(i[0]).toFixed(5),
          amount: Number(i[1]).toFixed(2),
          total: (Number(i[0]).toFixed(2) * Number(i[1]).toFixed(2)).toFixed(2)
        })
      }
    }
  }

};
</script>

<style>
.v-virtual-scroll{
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-color: #4949ff white;
}
.v-virtual-scroll:hover{
  overflow-y: auto;
}

.v-virtual-scroll::-webkit-scrollbar{
  width: 3px;
}
.v-virtual-scroll::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 3px solid #4949ff;
}

@media screen and (max-width: 600px){
  .v-card{
    width: 190px;
    margin: auto;
  }
  .v-virtual-scroll{
    overflow-y: hidden;
  }
  .v-virtual-scroll:hover{
    overflow-y: auto;
  }
}
</style>
