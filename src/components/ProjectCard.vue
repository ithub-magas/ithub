<template>
    <div class="card">
        <div class="card-img">
            <img :src="data.image ? data.image : noImage" alt="project">
        </div>

        <div class="card-info">
            <div class="card-user">
                <div class="user-avatar">
                    <img :src="data.avatar" alt="avatar">
                </div>
                <div class="user-name">{{ data.username }}</div>
            </div>

            <div class="card-actions">
                <div class="card-like" @click="isLike = !isLike">
                    <img src="../assets/ProjectCard/like.svg" alt="like" v-if="!isLike">
                    <img src="../assets/ProjectCard/like-purple.svg" alt="like" v-else>
                    <span>{{ formatNumber(data.likes + (isLike ? 1 : 0)) }}</span>
                </div>
                <div class="card-watch">
                    <img src="../assets/ProjectCard/eye.svg" alt="eye">
                    {{ formatNumber(data.watchs) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            noImage: new URL(`../assets/ProjectCard/no-image.png`, import.meta.url).href,
            isLike: false
        }
    },
    props: {
        data: {
            required: true,
            type: Object
        }
    },
    methods: {
        formatNumber(num) {
            if (num < 1000) {
                return num;
            }

            if (num < 10000) {
                const thousands = num / 1000;
                const hasDecimal = thousands % 1 !== 0;

                if (hasDecimal) {
                    const rounded = Math.round(thousands * 10) / 10;
                    if (rounded % 1 === 0) {
                        return rounded.toFixed(0) + 'K';
                    } else {
                        return rounded.toFixed(1) + 'K';
                    }
                } else {
                    return thousands.toFixed(0) + 'K';
                }
            }

            if (num < 1000000) {
                return Math.floor(num / 1000) + 'K';
            }

            return num;
        },
        setLike(){
            this.isLike = true
        }
    }
}
</script>

<style scoped>
.card {
    width: 100%;
    max-width: 285px;
    margin: 0 auto;
    transition: all 0.3s ease;
}

.card-img {
    width: 100%;
    height: 0;
    padding-bottom: 67.5%;
    position: relative;
    overflow: hidden;
}

.card-img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    flex-wrap: wrap;
}

.card-user {
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 5px;
}

.user-avatar {
    width: 21px;
    height: 21px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
}

.user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user-name {
    font-family: Inter;
    font-weight: 800;
    font-size: 13px;
    color: #FFFFFF;
    margin-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 130px;
}

.card-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
}

.card-like {
    margin-right: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.card-like span {
    min-width: 28px;
    text-align: center;
}

.card-like,
.card-watch {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Inter";
    font-weight: 800;
    font-size: 13px;
    color: #FFFFFF;
    user-select: none;
}

.card-like img,
.card-watch img {
    margin-right: 4px;
    width: 22px;
    height: 22px;
}

@media (max-width: 1200px) {
    .card {
        max-width: 260px;
    }
    
    .user-name {
        max-width: 110px;
    }
}

@media (max-width: 992px) {
    .card {
        max-width: 240px;
    }
    
    .user-name {
        max-width: 100px;
    }
}

@media (max-width: 768px) {
    .card {
        max-width: 220px;
    }
    
    .user-name {
        max-width: 90px;
        font-size: 12px;
    }
    
    .card-like,
    .card-watch {
        font-size: 12px;
    }
    
    .card-like img,
    .card-watch img {
        width: 16px;
        height: 16px;
    }
}

@media (max-width: 576px) {
    .card {
        max-width: 100%;
    }
    
    .card-img {
        padding-bottom: 60%;
    }
    
    .user-name {
        max-width: 150px;
    }
    
    .card-info {
        padding: 0 5px;
    }
}
</style>