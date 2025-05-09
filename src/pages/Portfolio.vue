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
                <button class="main__actions-bar__button" data-content="projects" @click="switchingBlocks($event)">Проекты</button>
                <button class="main__actions-bar__button" data-content="create" @click="switchingBlocks($event)">Создать проект</button>
                <button class="main__actions-bar__button"data-content="stats" @click="switchingBlocks($event)">Ваша статистика</button>
            </div>
            <div class="main__content">
                <div class="main__my" v-if="block == 'my'">
                    <h1>My</h1>
                </div>
                <div class="main__projects" v-if="block == 'projects'">
                    <h1>Projects</h1>
                </div>
                <div class="main__create" v-if="block == 'create'">
                    <h1>Create</h1>
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
                projects: [
                    {
                        poster: "",
                        likes: 12,
                        views: 1000
                    }
                ]
            }
        },
        methods: {
            switchingBlocks(event){
                const contentData = event.target.dataset.content;
                this.block = contentData;
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
        height: 100vh;
        background-color: #0F0B1F;
        display: flex;
        align-items: end;
    }
    .main{
        width: 100%;
        height: 80vh;
        background-color: #ffffff;
        border-radius: 50px 50px 0 0;
        display: flex;
        flex-direction: column;
        gap: 100px;
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
        width: 166px;
        height: 166px;
        border-radius: 50%;
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
        width: 66%;
        margin-inline: auto;
        display: flex;
        justify-content: space-between;
    }
    .main__actions-bar__button{
        border: none;
        background: transparent;
        font-size: 22px;
        font-weight: 500;
    }
    .active{
        border-bottom: solid 1px;
    }
    .main__content{
        width: 80%;
        margin-inline: auto;
    }
</style>