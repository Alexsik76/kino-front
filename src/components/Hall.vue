<script setup>
import { ref } from 'vue';
import Seat from './Seat.vue';

const rows = 4
const places = 9
</script>

<template>
    
    <section class="hall">
            <h2 class="hall-title">Оберіть місця:</h2>
            <div class="hall-seats">
                <div class="seat-row" v-for="row in rows" :data-row="row">
                    <div v-for="place in places">
                        <Seat :row="row" :place="place"/>
                    </div>
                </div>
            </div>
                <!-- Екран -->
    <div class="screen"></div>

            <button class="submit-order">ЗАМОВИТИ</button>
        </section>
</template>