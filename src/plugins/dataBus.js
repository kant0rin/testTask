export default {
    install(Vue) {
        Vue.prototype.$currentTicker = 'BTCUSDT'
        Vue.prototype.$setCurrentTicker = (ticker) => {
            this.$currentTicker = ticker
        }
        Vue.prototype.$getCurrentTicker = () => {
            return this.$currentTicker
        }
    }
}

