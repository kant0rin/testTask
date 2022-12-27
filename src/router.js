import Vue from "vue";
import VueRouter from "vue-router";
import OrderBook from "@/components/orderBook";
import choseSymbols from "@/components/ChoseSymbols";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: OrderBook
    },
    {
        path: '/chosing',
        component: choseSymbols
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})