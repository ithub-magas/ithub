<template>
    <div class="home">
        <div class="home-title">Присоединяйся к нам</div>
        <div class="home-description">Учи, твори и развивайся вместе с нами!</div>
        <div class="home-buttons">
            <div class="home-button create-project" @click="goToCreateProject()">Создать проект</div>
            <div class="home-button view-projects" @click="goToProjects()">Смотреть проекты</div>
        </div>
    </div>
    <div class="background">
        <div class="background-figure"></div>
        <div class="background-text">KABIR</div>
        <div class="background-img">
            <img src="../assets/Home/background.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        goToCreateProject() {
            this.$router.push('/authorization')
        },

        goToProjects() {
            this.$router.push('/projects')
        }
    }
}
</script>
<style scoped>
.home {
    color: white;
    width: 90%;
    margin: 0 auto;
}

.home-title {
    font-family: Unbounded;
    font-weight: 400;
    font-size: 64px;
    margin-top: 60px;
}

.home-description {
    font-family: Inter;
    font-weight: 400;
    font-size: 24px;
    margin-top: 15px;
}

.home-buttons {
    margin-top: 50px;
}

.home-button {
    padding: 21px 0;
    font-family: Inter;
    font-weight: 800;
    font-size: 18px;
    width: 254px;
    text-align: center;
    border-radius: 15px;
    user-select: none;
    cursor: pointer;
    border: 1px solid #7F5EFF;
    transition: 0.3s;
}

.create-project {
    background-color: #7F5EFF;

    &:hover {
        background-color: transparent;
    }
}

.view-projects {
    margin-top: 20px;

    &:hover {
        background-color: #7F5EFF;
    }
}

.background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
    z-index: -3;
}

.background-figure {
    width: 850px;
    height: 850px;
    border-radius: 50%;
    position: absolute;
    background-color: #00000003;
    box-shadow: 0px 1px 32px 0px #7F5EFF63;
    top: -530px;
    right: -240px;
}

.background-text {
    width: 100%;
    position: absolute;
    top: 260px;
    text-align: center;
    font-family: Unbounded;
    font-weight: 400;
    font-size: 250px;
    color: #191233;
    z-index: -2;
}

.background-img {
    position: absolute;
    width: 100%;
    top: 400px;
    z-index: -3;

    img {
        width: 100%;
    }
}

@media screen and (max-width: 1200px) {
    .background-text {
        font-size: 200px;
    }

    .background-figure {
        width: 700px;
        height: 700px;
        right: -180px;
    }
}

@media screen and (max-width: 991px) {
    .home-title {
        font-size: 52px;
    }

    .background-text {
        font-size: 160px;
        top: 320px;
    }

    .background-figure {
        width: 600px;
        height: 600px;
        top: -400px;
        right: -150px;
    }
}

@media screen and (max-width: 768px) {
    .home-title {
        font-size: 42px;
        margin-top: 40px;
    }

    .home-description {
        font-size: 20px;
    }

    .background-text {
        font-size: 120px;
        top: 350px;
    }

    .background-figure {
        width: 500px;
        height: 500px;
        top: -300px;
        right: -120px;
    }

    .home-buttons {
        margin-top: 40px;
    }

    .home-button {
        padding: 18px 0;
        width: 220px;
        font-size: 16px;
    }
}

@media screen and (max-width: 576px) {
    .home-title {
        font-size: 36px;
        margin-top: 30px;
    }

    .home-description {
        font-size: 18px;
    }

    .background-text {
        font-size: 80px;
        top: 380px;
    }

    .background-figure {
        width: 400px;
        height: 400px;
        top: -250px;
        right: -100px;
    }

    .home-buttons {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .home-button {
        padding: 16px 0;
        width: 100%;
        max-width: 220px;
        font-size: 16px;
    }
}

@media screen and (max-width: 480px) {
    .home {
        width: 95%;
    }

    .home-title {
        font-size: 32px;
        text-align: center;
    }

    .home-description {
        font-size: 16px;
        text-align: center;
    }

    .background-text {
        font-size: 60px;
        top: 400px;
    }

    .background-figure {
        width: 300px;
        height: 300px;
        top: -180px;
        right: -80px;
    }
}

@media screen and (max-height: 700px) {
    .home-title {
        margin-top: 30px;
    }

    .home-buttons {
        margin-top: 30px;
    }

    .background-text {
        top: 220px;
    }

    .background-img {
        top: 340px;
    }
}

@media screen and (max-height: 600px) {
    .home-title {
        margin-top: 20px;
    }

    .home-description {
        margin-top: 10px;
    }

    .home-buttons {
        margin-top: 20px;
    }

    .view-projects {
        margin-top: 15px;
    }

    .background-text {
        top: 180px;
    }

    .background-img {
        top: 300px;
    }
}
</style>