import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Home from "../../pages/Home.js";
import Login from "../../pages/Login.js";
import Register from "../../pages/Register.js";
import Catalog from "../../pages/Catalog.js";
import Good from "../../pages/Good.js";
import About from "../../pages/About.js";
import Contacts from "../../pages/Contacts.js";
import AdminPanel from "../../pages/AdminPanel.js";
import NewGood from "../../pages/NewGood.js";
import NewOrder from "../../pages/NewOrder.js";

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/catalog', component: Catalog },
    { path: '/catalog/good/create', component: NewGood },
    { path: '/catalog/good/:id', component: Good },
    { path: '/about', component: About },
    { path: '/contacts', component: Contacts },
    { path: '/admin', component: AdminPanel },
    { path: '/order/create', component: NewOrder },
]

const history = VueRouter.createWebHistory();

window.router = VueRouter.createRouter({
    history,
    routes
})


const app = Vue.createApp({
    components: {
        'page-header': Header,
        'page-footer': Footer
    },
    template:
        `
            <page-header></page-header>
            <router-view></router-view>
            <page-footer></page-footer>
        `
});
app.use(router);

const vm = app.mount('#app');