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
    }

}
</script>

<template>
    <div class="movies">
        <div class="container">
            <div class="row row-cols-5">
                <MovieItem :movie="movie" v-for="movie in store.movies" />
            </div>
        </div>
    </div>

</template>

<style>

</style>