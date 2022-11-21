import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodayHome from '../views/TodayHome.vue'
import VenuPage from '../views/VenuPage.vue'
import ProductPage from '../views/ProductPage.vue'
import MenuPage from '../views/MenuPage.vue'
import CartPage from '../views/CartPage.vue'
import MenuTextPage from '../views/MenuTextPage.vue'
import TicketPage from '../views/TicketPage.vue'
import OrdersPage from '../views/OrdersPage.vue'
import OrdersQrPage from '../views/OrdersQrPage.vue'
import MyProfilePage from '../views/MyProfilePage.vue'
import SignUpPage from '../views/SignUpPage.vue'
import AccountQrPage from '../views/AccountQrPage.vue'
import MyWalletPage from '../views/MyWalletPage.vue'
import AccountPurchasePage from '../views/AccountPurchasePage.vue'
import ModifyProfilePage from '../views/ModifyProfilePage.vue'
import GeneralParkingPage from '../views/GeneralParkingPage.vue'
import GeneralAdmissionPage from '../views/GeneralAdmissionPage.vue'
import FoodPage from '../views/FoodPage.vue'
import PizzasPage from '../views/PizzasPage.vue'
import EventPointPage from '../views/EventPointPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/TodayHome',
    name: 'TodayHome',
    component: TodayHome
  },
  
  {
    path: '/VenuPage',
    name: 'VenuPage',
    component: VenuPage
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/MenuPage',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/CartPage',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/MenuTextPage',
    name: 'MenuTextPage',
    component: MenuTextPage
  },
  {
    path: '/TicketPage',
    name: 'TicketPage',
    component: TicketPage
  },
  {
    path: '/OrdersPage',
    name: 'OrdersPage',
    component: OrdersPage
  },
  {
    path: '/OrdersQrPage',
    name: 'OrdersQrPage',
    component: OrdersQrPage
  },
  {
    path: '/MyProfilePage',
    name: 'MyProfilePage',
    component: MyProfilePage
  },
  {
    path: '/SignUpPage',
    name: 'SignUpPage',
    component: SignUpPage
  },
  {
    path: '/AccountQrPage',
    name: 'AccountQrPage',
    component: AccountQrPage
  },
  {
    path: '/MyWalletPage',
    name: 'MyWalletPage',
    component: MyWalletPage
  },
  {
    path: '/AccountPurchasePage',
    name: 'AccountPurchasePage',
    component: AccountPurchasePage
  },
  {
    path: '/ModifyProfilePage',
    name: 'ModifyProfilePage',
    component: ModifyProfilePage
  },
  {
    path: '/GeneralParkingPage',
    name: 'GeneralParkingPage',
    component: GeneralParkingPage
  },
  {
    path: '/GeneralAdmissionPage',
    name: 'GeneralAdmissionPage',
    component: GeneralAdmissionPage
  },
  {
    path: '/FoodPage',
    name: 'FoodPage',
    component: FoodPage
  },
  {
    path: '/PizzasPage',
    name: 'PizzasPage',
    component: PizzasPage
  },
  {
    path: '/EventPointPage',
    name: 'EventPointPage',
    component: EventPointPage
  },
  
  
]

const router = new VueRouter({
  routes
})

export default router
