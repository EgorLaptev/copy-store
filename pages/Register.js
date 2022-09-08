const Register = {
    data() {
        return {
            login: '',
            password: '',
            name: '',
            surname: '',
            patronymic: '',
            email: '',
            password_repeat: ''
        }
    },
    methods: {
        register(e) {

            const body = JSON.stringify({
                login: this.login,
                password: this.password,
                name: this.name,
                surname: this.surname,
                patronymic: this.patronymic,
                email: this.email,
                password_repeat: this.password_repeat
            });

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://127.0.0.1:8000/signup', { method: 'POST', body, headers })
                .then(resp => resp.json())
                .then(data => {
                    if (data.api_token) {
                        localStorage.setItem('api_token', data.api_token);
                        router.push('/')
                    }
                })
        }
    },
    template:
    `
<link rel="stylesheet" href="/assets/css/register.css" >
<section class="register">
    <div class="register__container container">
        
        <h1 class="register__title"> Регистрация </h1>

        <form action="#" class="register__form" @submit.prevent="register">
            <input v-model="name" required type="text" class="register__input input" placeholder="Имя">
            <input v-model="surname" required type="text" class="register__input input" placeholder="Фамилия">
            <input v-model="patronymic" type="text" class="register__input input" placeholder="Отчество">
            <input v-model="login" required type="text" class="register__input input" placeholder="Логин">
            <input v-model="email" required type="email" class="register__input input" placeholder="Почта">
            <input v-model="password" required type="password" class="register__input input" placeholder="Пароль">
            <input v-model="password_repeat" required type="password" class="register__input input" placeholder="Повтор пароля">
            <label class="register__input_label">
                Обработка данных
                <input required type="checkbox" class="register__checkbox">
            </label>
            <input type="submit" class="register__input register__input_submit submit" value="Зарегистрироваться">
        </form>
        
    </div>
</section>
    `
}

export default Register;