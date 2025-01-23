<script setup>
import { ref } from 'vue'


</script>

<template>
 <header class="header">
        <div class="logo">PROmovie</div>

            <!-- Горизонтальна навігація -->
    <nav class="nav">
        <RouterLink class="nav-item" to="/">Головна</RouterLink>
        <RouterLink class="nav-item" to="/about">Про кінотеатр</RouterLink>
        <RouterLink class="nav-item" to="/poster">Афіша</RouterLink>
        <RouterLink class="nav-item" to="/cart">Корзина</RouterLink>
        <!-- <a href="index.html" class="nav-item active">Головна</a>
        <a href="about.html" class="nav-item">Про кінотеатр</a>
        <a href="movie.html" class="nav-item">Афіша</a>
        <a href="cart.html" class="nav-item">Корзина</a> -->
    </nav>
        <div class="burger-menu" data-menu-open>
            <img src="/src/assets/icons/burger-menu.svg" alt="Menu">
        </div>
    </header>
</template>

<style scoped>

</style>
