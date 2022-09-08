const AdminPanel = {
    data() {
        return {
            orders: [],
            goods: []
        }
    },
    methods: {
        fetchOrders() {

        },
        fetchGoods() {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://127.0.0.1:8000/products', { method: 'POST', headers })
                .then(resp => resp.json())
                .then(data => {
                    this.goods = data
                })
        },
        removeGood(id) {

            const body = JSON.stringify({
                pid: id
            });

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('api_token')
            }

            fetch('http://127.0.0.1:8000/product/remove', { method: 'POST', body, headers })

            this.goods.splice(this.goods.findIndex(good => good.pid === id), 1)

        }
    },
    created() {
        this.fetchOrders()
        this.fetchGoods()
    },
    template:
    `
<link rel="stylesheet" href="/assets/css/admin-panel.css" >
<section class="admin">
    <div class="admin__container container">
    
        <h1 class="admin__title"> Админ панель </h1>
    
        <div class="orders">
            <h2 class="orders__title"> Заказы </h2>
            <ul class="orders__list">
            
                <li class="orders__item card" v-for="order in orders">
                    <h3 class="card__title"> {{ order.name }} </h3>
                    <span class="card__date"> {{ order.created_at }} </span>
                    <span class="card__status"> {{ order.status }} </span>
                    <p class="card__description">
                        - ФИО: Евгений Евгеньевич Евгенов <br>
                        - Кол-во: 4
                    </p>
                    <button class="card__accept btn"> Подтвердить </button>
                    <button class="card__remove btn"> Отклонить </button>
                </li>
                <li v-if="!orders.length"> Заказов нет </li>
            </ul>
        </div>
    
        <div class="goods">
            <h2 class="goods__title"> Товары </h2>
            <router-link class="goods__add" to="/catalog/good/create">+</router-link>
            <ul class="goods__list">
                <li class="goods__item card" v-for="good in goods">
                    <h3 class="card__title"> {{ good.name }} </h3>
                    <p class="card__description"> Модель {{ good.model }} </p>
                    <button class="card__remove btn" @click="()=>removeGood(good.id)" > Удалить </button>
                </li>
                <li v-if="!goods.length"> Товаров нет </li>
            </ul>
        </div>
    
    </div>
</section>
    `
}

export default AdminPanel;