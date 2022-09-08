const NewGood = {
    data() {
        return {
            name: null,
            model: null,
            price: null,
            issueYear: null,
            issueCountry: null,
            num: null,
            photo: null
        }
    },
    methods: {
        createGood() {

            const body = new FormData(this.$refs.form);

            const headers = {
                'Accept': 'application/json'
            }

            fetch('http://127.0.0.1:8000/products', { method: 'POST', body, headers })

        }
    },
    template:
    `
<link rel="stylesheet" href="/assets/css/login.css" >
<section class="login">
    <div class="login__container container">
        
        <h1 class="login__title"> Новый товар </h1>

        <form action="#" class="login__form" @submit.prevent="createGood" ref="form">
            <input type="text" v-model="name" name="name" class="login__input input" placeholder="Название">
            <input type="text" v-model="model" name="model" class="login__input input" placeholder="Модель">
            <input type="text" v-model="issueYear" name="issueYear" class="login__input input" placeholder="Год выпуска">
            <input type="text" v-model="issueCountry" name="issueCountry" class="login__input input" placeholder="Страна производель">
            <input type="text" v-model="num" name="num" class="login__input input" placeholder="Количество">
            <input type="file" v-model="password" name="photo" class="login__input input">
            <input type="submit" class="login__input login__input_submit submit" value="Создать">
        </form>
        
    </div>
</section>

    `
}

export default NewGood;