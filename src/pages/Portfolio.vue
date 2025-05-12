<template>
    <div class="page-background">
        <main class="main">
            <div class="main__top-container">
                <div class="user-profile">
                    <img :src="student.avatar" alt="" class="user-profile__avatar">
                </div>
                <div class="search">
                    <div class="search__container">
                        <svg class="search__icon" width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="white" stroke-width="2"/>
                        </svg>
                        <input type="text" class="search__input" placeholder="Поиск...">
                    </div>
                </div>
            </div>
            <div class="main__actions-bar">
                <button class="main__actions-bar__button" data-content="my" @click="switchingBlocks($event)">Моё</button>
                <button class="main__actions-bar__button active" data-content="projects" @click="switchingBlocks($event)">Проекты</button>
                <button class="main__actions-bar__button" data-content="create" @click="switchingBlocks($event)">Создать проект</button>
                <button class="main__actions-bar__button"data-content="stats" @click="switchingBlocks($event)">Ваша статистика</button>
            </div>
            <div class="main__content">
                <div class="main__my" v-if="block == 'my'">
                    <div class="project-container" v-for="item in myProjects">
                        <img :src="item.poster" alt="" class="project-container__image">
                        <div class="project-container__content">
                            <div class="project-container__user-info">
                                <img class="project-container__user-avatar" :src="item.user.avatar" alt="avatar">
                                <span class="project-container__user-name">{{ item.user.name }}</span>
                            </div>
                            <div class="project-container__stats">
                                <div class="project-container__stats-item">
                                    <img class="project-container__stat-icon" src="../assets/likeIcon.svg" alt="likes">
                                    <span class="project-container__stat-count">{{ item.likes }}</span>
                                </div>
                                <div class="project-container__stats-item">
                                    <img class="project-container__stat-icon" src="../assets/viewsIcon.svg" alt="views">
                                    <span class="project-container__stat-count">{{ item.views }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__projects" v-if="block == 'projects'">
                    <div class="project-container" v-for="item in projects">
                        <img :src="item.poster" alt="" class="project-container__image">
                        <div class="project-container__content">
                            <div class="project-container__user-info">
                                <img class="project-container__user-avatar" :src="item.user.avatar" alt="avatar">
                                <span class="project-container__user-name">{{ item.user.name }}</span>
                            </div>
                            <div class="project-container__stats">
                                <div class="project-container__stats-item">
                                    <img class="project-container__stat-icon" src="../assets/likeIcon.svg" alt="likes">
                                    <span class="project-container__stat-count">{{ item.likes }}</span>
                                </div>
                                <div class="project-container__stats-item">
                                    <img class="project-container__stat-icon" src="../assets/viewsIcon.svg" alt="views">
                                    <span class="project-container__stat-count">{{ item.views }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main__create" v-if="block == 'create'">
                    <h2 class="main__create-title">Начните создавать проект:</h2>
                    <div class="main__create-options">
                        <div class="create-option">
                            <button class="create-option__button">
                                <img class="create-option__icon" src="../assets/imagesIcon.svg" alt="icon">
                            </button>
                            <span class="create-option__label">Изображение</span>
                        </div>
                        <div class="create-option">
                            <button class="create-option__button">
                                <span class="create-option__span">Тт</span>
                            </button>
                            <span class="create-option__label">Текст</span>
                        </div>
                        <div class="create-option">
                            <button class="create-option__button">
                                <img class="create-option__icon" src="../assets/videoIcon.svg" alt="icon">
                            </button>
                            <span class="create-option__label">Видео и аудио</span>
                        </div>
                        <div class="create-option">
                            <button class="create-option__button">
                                <img class="create-option__icon" src="../assets/3dIcon.svg" alt="icon">
                            </button>
                            <span class="create-option__label">3D</span>
                        </div>
                    </div>
                </div>
                <div class="main__stats" v-if="block == 'stats'">
                    <h1>Stats</h1>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data(){
            return{
                block: "projects",
                student: {},
                myProjects: [
                    {
                        poster: "http://localhost:5000/media/images/image3.png",
                        user: {
                            avatar: "http://localhost:5000/media/images/image4.png",
                            name: "Ahmed"
                        },
                        likes: 12,
                        views: 1000
                    },
                    {
                        poster: "http://localhost:5000/media/images/image2.png",
                        user: {
                            avatar: "http://localhost:5000/media/images/image3.png",
                            name: "Ahmed"
                        },
                        likes: 12,
                        views: 1000
                    },
                    {
                        poster: "http://localhost:5000/media/images/image4.png",
                        user: {
                            avatar: "http://localhost:5000/media/images/image2.png",
                            name: "Ahmed"
                        },
                        likes: 12,
                        views: 1000
                    },
                ],
                projects: [
                    {
                        poster: "http://localhost:5000/media/images/image2.png",
                        user: {
                            avatar: "http://localhost:5000/media/images/image3.png",
                            name: "Arsamak"
                        },
                        likes: 12,
                        views: 1000
                    },
                    {
                        poster: "http://localhost:5000/media/images/image3.png",
                        user: {
                            avatar: "http://localhost:5000/media/images/image4.png",
                            name: "Musa"
                        },
                        likes: 12,
                        views: 1000
                    },
                    {
                        poster: "http://localhost:5000/media/images/image4.png",
                        user: {
                            avatar: "http://localhost:5000/media/images/image2.png",
                            name: "Adam"
                        },
                        likes: 12,
                        views: 1000
                    },
                ]
            }
        },
        methods: {
            switchingBlocks(event) {
                const contentData = event.target.dataset.content;
                this.block = contentData;
                
                const buttons = document.querySelectorAll('.main__actions-bar__button');
                
                buttons.forEach(button => {
                    button.classList.remove('active');
                });
                event.target.classList.add('active');
            }
        },
        mounted(){
            this.student = JSON.parse(localStorage.getItem("student"));
            console.log(this.student);
            
        },
    }
</script>

<style scoped>
    .page-background{
        padding-top: 200px;
        background-color: #0F0B1F;
        position: relative;
    }
    .main{
        width: 100%;
        background-color: #ffffff;
        border-radius: 50px 50px 0 0;
        display: flex;
        flex-direction: column;
        gap: 100px;
        padding-inline: 14px;
        padding-bottom: 60px;
    }
    .main__top-container{
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
    .user-profile{
        width: max-content;
        margin-inline: auto;
        display: flex;
        justify-content: center;
        margin-top: -80px;
    }
    .user-profile__avatar{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        object-fit: cover;
    }
    .search{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .search__container{
        width: 540px;
        display: grid;
        grid-template-columns: 20px 1fr;
        align-items: center;
        gap: 10px;
        background-color: #0F0B1F;
        padding: 10px;
        border-radius: 10px;
    }
    .search__input{
        width: 100%;
        height: 20px;
        background: transparent;
        color: #ffffff;
    }
    .search__input:focus{
        outline: none;
    }
    .search__input::placeholder{
        color: #ffffff;
    }

    .main__actions-bar{
        max-width: 1200px;
        width: 100%;
        padding-block: 12px;
        margin-inline: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        overflow-x: auto;
        gap: 60px;
    }
    .main__actions-bar__button{
        border: none;
        background: transparent;
        font-size: 22px;
        font-weight: 500;
        cursor: pointer;
    }
    .active{
        text-decoration: underline;
        text-underline-offset: 6px;
    }
    .main__content {
        max-width: 1600px;
        width: 100%;
        margin-inline: auto;
    }

    .main__projects {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 50px;
    }

    .project-container {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    .project-container:hover {
        transform: translateY(-5px);
    }

    .project-container__image {
        width: 100%;
        height: 220px;
        object-fit: cover;
        display: block;
    }

    .project-container__content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 15px;
    }
    .project-container__user-info {
        display: flex;
        align-items: center;
        background: #fff;
    }

    .project-container__user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 12px;
        object-fit: cover;
    }

    .project-container__user-name {
        font-size: 16px;
        font-weight: 500;
    }
    .project-container__stats{
        display: flex;
        align-items: center;
        gap: 40px;
        justify-content: end;
    }
    .project-container__stats-item{
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .project-container__stat-icon{
        width: 20px;
    }
    .project-container__stat-count{
        font-size: 16px;
    }

    .main__my {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 50px;
    }

    .main__create {
        width: 100%;
        height: 80vh;
        display: grid;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border-radius: 20px;
    }
    .main__create-title{
        font-family: Inter;
        font-size: 32px;
        font-weight: 600;
        color: #5C5C5C;
    }
    .main__create-options{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }
    .create-option{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        justify-content: center;
    }
    .create-option__span{
        color: rgb(127, 94, 255);
        font-size: 26px;
        font-family:Georgia, 'Times New Roman', Times, serif;
    }
    .create-option__label{
        font-size: 14px;
        color: #5C5C5C;

    }
    .create-option__button{
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        background-color: rgba(127, 94, 255, 0.25);
        padding: 10px;
        transition: opacity 0.2s;
        cursor: pointer;
    }
    .create-option__button:hover{
        opacity: 0.8;
    }
    .create-option__icon{
        width: 40px;
    }
</style>