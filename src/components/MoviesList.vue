<script>
import MovieItem from './MovieItem.vue';
import { store } from '../store';
export default {
    name: 'MoviesList',
    components: {
        MovieItem
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <div class="movies">
        <div class="container">
            <h1 class="text-white" v-if="!store.isHidden">I migliori titoli della settimana</h1>
            <div class="row row-cols-5 g-4">
                <MovieItem :movie="movie" v-for="movie in store.movies" />
            </div>
        </div>
    </div>

</template>

<style>

</style>