<template>
    <h1>test</h1>
    <div class="routes">
        <RouterLink to="/authorization" class="nav-link active">
            Авторизация
        </RouterLink>
        <RouterLink to="/resume" class="nav-link active">
            Резюме
        </RouterLink>
         <RouterLink to="/profile" class="nav-link active">
            профиль
        </RouterLink>
        <RouterLink to="/portfolio" class="nav-link active">
            Портфолио
        </RouterLink>
        <RouterLink to="/dev" class="nav-link active">
            Разработчики
        </RouterLink>
       
    </div>

</template>

<style>
.routes {
    display: flex;
    gap: 15px;
    padding: 15px;
}

.nav-link {
    color: rgb(199, 53, 204);
    text-decoration: none;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 700;
}
.nav-link:hover {
   text-decoration: underline;
}
</style>