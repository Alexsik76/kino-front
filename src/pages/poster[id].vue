<template>
    <div>
      <div v-if="isFetching" class="movie-card" >
       <Loader/>
    </div>
    <div v-else-if="error" class="movie-card" >
       <Error404/>
    </div>
    <div v-if="data" class="movie-card">
        <a href="/poster1">
            <img :src="data.poster" alt="Movie 1">
        </a>
        <h3>{{ data.title }}</h3>
        <p>Сеанси: <span>2D (зал 1)</span></p>
        <div class="sessions">
            <button class="session">14:30</button>
            <button class="session">16:30</button>
        </div>
    </div>
    </div>
    <Hall/>
</template>
<script setup>
import { useFetch } from '@vueuse/core';
import { useRoute } from 'vue-router' 
import Hall from './../components/Hall.vue'
const route = useRoute()
const base_url = import.meta.env.VITE_API_URL

const { isFetching, error, data } = useFetch(`${base_url}movies/${route.params.id}/`, { refetch: true }).json()

</script>