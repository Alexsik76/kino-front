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
                       Відкрий для себе унікальний кінодосвід у нашому кінотеатрі в Києві! Сучасні кінозали, найгучніші прем'єри, зручне
                        онлайн-бронювання квитків та вигідні акції. Насолоджуйся переглядом у форматах 2D, 3D, IMAX, а також великим вибором
                        напоїв і закусок. Зручне розташування та першокласний сервіс зроблять твій візит незабутнім. Обирай фільм та бронюй
                        квитки вже зараз!
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
                <MovieCard :movie-id="3"/>
            </div>
        </section>
    </main>
</template>