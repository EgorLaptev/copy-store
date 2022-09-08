const Good = {
    data() {
        return {
            good: {}
        }
    },
    props: ['id'],
    methods: {
        order() {

        },
        fetchData() {

            const body = JSON.stringify({
                pid: 1
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://127.0.0.1:8000/product', { method: 'POST', body, headers })
                .then(resp => resp.json())
                .then(data => {
                    this.good = data[0];
                })
        }
    },
    created() {
        this.fetchData()
    },
    template:
    `
<link rel="stylesheet" href="/assets/css/good.css" >
<section class="good">
    <div class="good__container container">
        <img class="good__photo" :src="'http://localhost:8000' + good.photo"/>
        <div class="good__about">
        
            <div class="good__header">
                <h1 class="good__title"> {{ good.name }} </h1>
                <span class="good__price"> {{ good.price }} Руб </span>
            </div>
    
            <ul class="good__info">
                <li> Страна производитель: {{ good.issueCountry }} </li>
                <li> Год выпуска: {{ good.issueYear }} год </li>
                <li> Модель: {{ good.model }} </li>
            </ul>
            
            <button class="good__buy btn" @click="order"> Заказать </button>
        </div>
    </div>
</section>
    `
}

export default Good;