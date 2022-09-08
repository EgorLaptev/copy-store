import Cart from "./Cart.js";

const Header = {
    methods: {
        logout() {
            localStorage.removeItem('api_token');
            router.push('/')
        }
    },
    computed: {
        auth() {
            return !!localStorage.getItem('api_token');
        }
    },
    template:
    `
    <header class="header">
        <div class="header__container container">
            <router-link class="header__logo logo" to="/"> 
                <img src="/assets/images/logo8.png" alt="Логотип" class="logo__image"> 
            </router-link>
            <ul class="header__menu menu">
                <li class="menu__item">
                    <router-link to="/" class="menu__link"> Главная </router-link>
                </li>
                <li class="menu__item">
                    <router-link to="/catalog" class="menu__link"> Каталог </router-link>
                </li>
                <li class="menu__item">
                    <router-link to="/contacts" class="menu__link"> Контакты </router-link>
                </li>
                <li class="menu__item" v-if="!auth">
                    <router-link to="/login" class="menu__link"> Вход </router-link>
                </li>
                <li class="menu__item" v-if="!auth">
                    <router-link to="/register" class="menu__link"> Регистрация </router-link>
                </li>
                <li class="menu__item" v-if="auth">
                    <router-link to="/admin" class="menu__link"> Панель </router-link>
                </li>
                <li class="menu__item" v-if="auth">
                    <button class="menu__link" @click="logout"> Выход </button>
                </li>
                <cart-item v-if="auth"></cart-item>
            </ul>
        </div>
    </header>
    `,
    components: {
        'cart-item': Cart
    }
}

export default Header;