const Login = {
    data() {
        return {
            login: null,
            password: null
        }
    },
    methods: {
        sign_in() {
            const body = JSON.stringify({
                login: this.login,
                password: this.password
            });

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://127.0.0.1:8000/auth', { method: 'POST', body, headers })
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
<link rel="stylesheet" href="/assets/css/login.css" >
<section class="login">
    <div class="login__container container">
        
        <h1 class="login__title"> Вход </h1>

        <form action="#" class="login__form" @submit.prevent="sign_in">
            <input type="text" v-model="login" class="login__input input" placeholder="Логин">
            <input type="password" v-model="password" class="login__input input" placeholder="Пароль">
            <input type="submit" class="login__input login__input_submit submit" value="Войти">
        </form>
        
    </div>
</section>

    `
}

export default Login;