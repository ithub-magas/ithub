<template>
    <div class="home">
        <div class="home-title">Присоединяйся к нам</div>
        <div class="home-description">Учи, твори и развивайся вместе с нами!</div>
        <div class="home-buttons">
            <div class="home-button create-project" @click="goToCreateProject()">Создать проект</div>
            <div class="home-button view-projects" @click="goToProjects()">Смотреть проекты</div>
        </div>
    </div>

    <Background :text="true" />
</template>

<script>
import Background from '../components/Background.vue';

export default {
    methods: {
        goToCreateProject() {
            this.$router.push('/authorization')
        },

        goToProjects() {
            this.$router.push('/projects')
        }
    },
    components: {
        Background
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

@media screen and (max-width: 991px) {
    .home-title {
        font-size: 52px;
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
}

@media screen and (max-height: 700px) {
    .home-title {
        margin-top: 30px;
    }

    .home-buttons {
        margin-top: 30px;
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
}
</style>