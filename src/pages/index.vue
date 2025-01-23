<script setup lang="ts">
import MovieCard from '../components/MovieCard.vue';

</script>

<template>
    <main>
        <section class="info">
            <div class="info-content">
                <img src="/src/assets/img/info.jpg" alt="Popcorn" class="info-image">
                <div class="info-text">
                    <h2>НАЙКРАЩИЙ КІНОТЕАТР ТВОГО МІСТА</h2>
                    <p class="info-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio vestibulum, bibendum nunc sed, posuere eros. Nullam sodales ligula sed molestie varius. Donec non convallis libero, vitae vestibulum diam.
                    </p>
                </div>
            </div>
        </section>

        <!-- Афіша -->
        <section class="schedule">
            <h2 class="schedule-text">АФІША</h2>
            <div class="tabs">
                <button class="tab active">Сьогодні</button>
                <button class="tab">Завтра</button>
                <button class="tab">Післязавтра</button>
            </div>
            <div class="movie-cards">
                <MovieCard :movie-id="1"/>
                <div class="movie-card">
                    <a href="movie.html">
                        <img src="/src/assets/img/movie2.jpg" alt="Movie 2">
                    </a>
                    <h3>МУФАСА</h3>
                    <p>Сеанси: <span>2D (зал 2)</span></p>
                    <div class="sessions">
                        <button class="session">14:30</button>
                        <button class="session">18:30</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>