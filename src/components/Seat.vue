<template>
    <button>
        <svg class="seat available" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="20" height="20" rx="4"></rect>
        </svg>
        <div>
        <span>{{ row }}</span> <span>{{ place }}</span>
        </div>
    </button>
</template>
<script setup>
const props = defineProps({
    row: Number,
    place: Number
})
</script>