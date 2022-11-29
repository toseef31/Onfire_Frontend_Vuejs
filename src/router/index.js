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
import LoginPage from '../views/LoginPage.vue'
import UpdatePasswordPage from '../views/UpdatePasswordPage.vue'


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
    component: MenuPage,
    meta: {
      title: 'Menu'
  }
  },
  {
    path: '/CartPage',
    name: 'CartPage',
    component: CartPage,
    meta: {
      title: 'Shopping Cart'
  }
  },
  {
    path: '/MenuTextPage',
    name: 'MenuTextPage',
    component: MenuTextPage
  },
  {
    path: '/TicketPage',
    name: 'TicketPage',
    component: TicketPage,
    meta: {
      title: 'Ticket'
  }
  },
  {
    path: '/OrdersPage',
    name: 'OrdersPage',
    component: OrdersPage,
    meta: {
      title: 'Orders in Progress'
  }
  },
  {
    path: '/OrdersQrPage',
    name: 'OrdersQrPage',
    component: OrdersQrPage,
    meta: {
      title: 'General parking'
  }
  },
  {
    path: '/MyProfilePage',
    name: 'MyProfilePage',
    component: MyProfilePage,
    meta: {
      title: 'My Profile'
  }
  },
  {
    path: '/SignUpPage',
    name: 'SignUpPage',
    component: SignUpPage,
    meta: {
      title: 'My Profile'
  }
  },
  {
    path: '/AccountQrPage',
    name: 'AccountQrPage',
    component: AccountQrPage,
    meta: {
      title: 'QR'
  }
  },
  {
    path: '/MyWalletPage',
    name: 'MyWalletPage',
    component: MyWalletPage,
    meta: {
      title: 'Wallet'
  }
  },
  {
    path: '/AccountPurchasePage',
    name: 'AccountPurchasePage',
    component: AccountPurchasePage,
    meta: {
      title: 'My Purchases'
  }
  },
  {
    path: '/ModifyProfilePage',
    name: 'ModifyProfilePage',
    component: ModifyProfilePage,
    meta: {
      title: 'My Profile'
  }
  },
  {
    path: '/GeneralParkingPage',
    name: 'GeneralParkingPage',
    component: GeneralParkingPage,
    meta: {
      title: 'General Parking'
  }
  },
  {
    path: '/GeneralAdmissionPage',
    name: 'GeneralAdmissionPage',
    component: GeneralAdmissionPage,
    meta: {
      title: 'General Admission'
  }
  },
  {
    path: '/FoodPage',
    name: 'FoodPage',
    component: FoodPage,
    meta: {
      title: 'Menu'
  }
  },
  {
    path: '/PizzasPage',
    name: 'PizzasPage',
    component: PizzasPage,
    meta: {
      title: 'Menu'
  }
  },
  {
    path: '/EventPointPage',
    name: 'EventPointPage',
    component: EventPointPage,
    meta: {
      title: 'Event Points'
  }
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      title: 'Login'
  }
  },
  {
    path: '/UpdatePasswordPage',
    name: 'UpdatePasswordPage',
    component: UpdatePasswordPage,
    meta: {
      title: 'Update Password'
  }
  },
  
  
]

const router = new VueRouter({
  routes
})
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';

  next();
})
export default router
