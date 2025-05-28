<template>
    <div class="background">
        <div class="background-figure"></div>
        <div class="background-text" v-if="text">KABIR</div>
        <div class="background-img">
            <img src="../assets/Home/background.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: Boolean,
            required: false,
        }
    }
}
</script>

<style scoped>
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
    position: relative;
}

.background-img::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background: linear-gradient(to bottom, 
        rgba(15, 11, 31, 0),
        rgba(15, 11, 31, 1)
    );
    pointer-events: none;
}

.background-img img {
    width: 100%;
    display: block;
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
}

@media screen and (max-width: 576px) {

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
}

@media screen and (max-width: 480px) {
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
    .background-text {
        top: 220px;
    }

    .background-img {
        top: 340px;
    }
}

@media screen and (max-height: 600px) {
    .background-text {
        top: 180px;
    }

    .background-img {
        top: 300px;
    }
}
</style>