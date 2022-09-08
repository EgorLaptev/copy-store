const Catalog = {
    data() {
        return {
            goods: []
        }
    },
    methods: {
        fetchData() {

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://127.0.0.1:8000/products', { method: 'POST', headers })
                .then(resp => resp.json())
                .then(data => {
                    this.goods = data;
                })
        },
        addToCart() {

        }
    },
    created() {
        this.fetchData()
    },
    template:
        `
        <link rel="stylesheet" href="/assets/css/catalog.css" >
        <section class="goods">
            <div class="goods__container container">
            
                    <h1 class="goods__title"> Каталог </h1>
            
                    <ul class="goods__list">
                        <li class="goods__item good" v-for="good in goods">
                            <img :src="'http://localhost:8000' + good.photo" alt="Копировальная машина" class="good__photo">
                            <h3 class="good__title"> {{ good.name }} </h3>
                            <div class="good__info">
                                <span class="good__price"> {{ good.price }} &#x20bd; </span>
                                <div class="good__buttons">
                                    <button class="good__view btn" @click="addToCart">В корзину</button>
                                    <router-link to="/catalog/good/1" class="good__view btn"> Подробнее </router-link>
                                </div>
                            </div>
                        </li>
                  
                    </ul>
                    
                    <form class="filters">
                        
                        <span class="fitlers__title"> Фильтры </span>

                        <label for="printerType"> Сортировать по </label>
                        <select name="" id="sort" class="input">
                            <option value="price" selected>Цене</option>
                            <option value="date">Дате производства</option>
                            <option value="name">Названию</option>
                        </select>
                        
                        <label for="printerType"> Тип принтера </label>
                        <select name="" id="printerType" class="input">
                            <option value="stray" selected>Струйные принтеры</option>
                            <option value="laser">Лазерные принтеры</option>
                            <option value="termo">Термо принтеры</option>
                        </select>
                                   
                        <label for="price"> Цена </label>        
                        <div class="filters__group">
                            <input type="number" min="0" max="100000" placeholder="От" class="input">
                            <input type="number" min="0" max="100000" placeholder="До" class="input">
                        </div>
            
                    </form>
                
            </div>
        </section>
    `
}

export default Catalog;