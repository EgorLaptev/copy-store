const Cart = {
    data() {
        return {
            showCart: false
        }
    },
    methods: {
        openCart() {
            this.showCart = !this.showCart
            this.fetchData()
        },
        fetchData() {

            const body = JSON.stringify({

            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://localhost:8000/cart/add', { method: 'POST', headers, body })

        }
    },
    template:
    `
        <li class="menu__item">
            <button class="menu__cart" @click="openCart"> Корзина </button>
            <ul class="cart" v-show="showCart">
                <li class="cart__item"> Копировальная машина </li>
                <li class="cart__item"> Копировальная машина </li>
            </ul>
        </li>
    `
}

export default Cart;