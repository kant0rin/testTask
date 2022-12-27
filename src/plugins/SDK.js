export default {
  install(Vue){
    Vue.prototype.$getOrderBook = async function(ticker) {
      const f = await fetch(`https://api.binance.com/api/v3/depth?symbol=${ticker}&limit=500`)
      const data = await f.json()
      return data.lastUpdateId
    }

    Vue.prototype.$openStream = function (ticker){
      let ws = new WebSocket(`wss://stream.binance.com:9443/ws/${ticker}@depth`)
      return ws
    }
  }
}