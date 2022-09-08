const Home = {
    template:
        `
       <link rel="stylesheet" href="/assets/css/home.css">
        <section class="welcome">
            <div class="welcome__container container">
                <div class="welcome__text">
                    <h1 class="welcome__title"> CopyStar </h1>
                    <p class="welcome__about">
                        Осуществляем продажу копировального оборудования
                    </p>
                   <router-link to="/catalog" class="welcome__catalog btn"> Перейти к товарам </router-link>
                </div>
            </div>
        </section>
    `
}

export default Home;