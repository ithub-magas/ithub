<template>
    <div class="projects">
        <div class="title">Лучшее вы найдете у нас</div>

        <div class="container">
            <button class="menu-toggle" @click="toggleMenu" v-if="isMobile">
                <img :src="getImageUrl(menuOpen ? 'close.svg' : 'menu.svg')" :alt="menuOpen ? 'close' : 'menu'" width="24">
                {{ menuOpen ? 'Закрыть' : 'Категории' }}
            </button>
            
            <aside :class="{ 'open': menuOpen || !isMobile }">
                <ul>
                    <li v-for="category in categories" :class="{ active: category.text === currentCategory }"
                        @click="setCategory(category)"><img :src="getImageUrl(category.img)" alt="category"
                            width="20">{{ category.text }}</li>
                </ul>
            </aside>

            <div class="cards" v-if="fakeData[currentCategory]?.length">
                <ProjectCard v-for="data in fakeData[currentCategory]" :data="data" />
            </div>

            <div class="nothing" v-else>
                <div>Тут ничего нет🙁</div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue"
export default {
    data() {
        return {
            categories: [
                {
                    text: "Разработка",
                    img: "develop.svg"
                },
                {
                    text: "Программирование",
                    img: "programming.svg"
                },
                {
                    text: "Дизайн",
                    img: "design.svg"
                },
                {
                    text: "SMM",
                    img: "smm.svg"
                },
                {
                    text: "Мобильная разработка",
                    img: "mobile-develop.svg"
                },
                {
                    text: "Кибербезопасность",
                    img: "cybersecurity.svg"
                },
                {
                    text: "Тестирование",
                    img: "testing.svg"
                },
            ],
            currentCategory: "Разработка",
            fakeData: {
                "Разработка": [
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', likes: 999, watchs: 6820 },
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: null, likes: 92, watchs: 566 },
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: null, likes: 167, watchs: 751 },
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: null, likes: 132, watchs: 612 },
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: null, likes: 219, watchs: 834 },
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: null, likes: 184, watchs: 790 },
                    { username: 'Адам', avatar: 'https://s3newlxpbulgakov.storage.yandexcloud.net/user_e3a8c875-57d4-4fba-94ef-a9d550f5cea5/ezgif-2-b3dc1c3768e1_c71a452c-79e1-40bb-89ed-757bfdeaef8c.gif', image: null, likes: 85, watchs: 486 }
                ]
            },
            menuOpen: false,
            isMobile: false
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        setCategory(categoty) {
            this.currentCategory = categoty.text

            if (this.isMobile) {
                this.menuOpen = false;
            }

        },
        getImageUrl(imgPath) {
            return new URL(`../assets/Projects/${imgPath}`, import.meta.url).href;
        },
        updateScreenSize() {
            this.isMobile = window.innerWidth < 768;
            if (!this.isMobile) {
                this.menuOpen = false;
            }
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
    mounted() {
        this.updateScreenSize();
        window.addEventListener('resize', this.updateScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    }
}
</script>

<style scoped>
.projects {
    background-color: #0F0B1F;
    min-height: 100vh;
    padding: 20px 0;
}

.title {
    font-family: "Unbounded";
    font-weight: 400;
    font-size: 48px;
    text-align: center;
    color: #FFFFFF;
    padding: 0 15px;
}

.container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-top: 52px;
    position: relative;
}

.menu-toggle {
    display: none;
    background-color: #7F5EFF;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    font-family: "Inter";
    cursor: pointer;
    margin-bottom: 15px;
    align-items: center;
    font-size: 16px;
}

.menu-toggle img {
    margin-right: 10px;
}

aside {
    flex-shrink: 0;
}

aside ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

aside li {
    width: 200px;
    padding: 10px 0;
    border-radius: 8px;
    color: white;
    font-family: "Inter";
    display: flex;
    align-items: center;
    padding-left: 10px;
    user-select: none;
    cursor: pointer;
    transition: 0.3s;
}

aside li img {
    margin-right: 10px;
}

aside li.active {
    background-color: #7F5EFF;
}

aside li:not(:first-child) {
    margin-top: 5px;
}

aside li:hover {
    background-color: #977dff;
}

.cards {
    width: 100%;
    margin-left: 115px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.nothing {
    width: 100%;
    margin-left: 115px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Unbounded";
    font-weight: 300;
    font-size: 38px;
    color: #FFFFFF;
    text-align: center;
}

@media (max-width: 1200px) {
    .title {
        font-size: 36px;
    }
    
    .cards {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 20px;
    }
}

@media (max-width: 992px) {
    .cards {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}

@media (max-width: 768px) {
    .title {
        font-size: 32px;
    }
    
    .container {
        flex-direction: column;
        margin-top: 30px;
    }
    
    .menu-toggle {
        display: flex;
    }
    
    aside {
        width: 100%;
        margin-bottom: 20px;
        display: none;
    }
    
    aside.open {
        display: block;
    }
    
    aside li {
        width: 100%;
    }
    
    .cards {
        margin-left: 0;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }
    
    .nothing {
        margin-left: 0;
        font-size: 28px;
    }
}

@media (max-width: 576px) {
    .title {
        font-size: 28px;
    }
    
    .cards {
        grid-template-columns: 1fr;
    }
    
    .nothing {
        font-size: 24px;
    }
}
</style>