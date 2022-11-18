
<script>

import { store } from '../store';
export default {
    name: 'MoviesItem',

    data() {
        return {
            store,
            availableLanguages: ["en", "it", "es", "fr", "de"]
        }
    },
    methods: {
        checkFlag(lang) {
            if (this.availableLanguages.includes(lang)) {
                return true
            }
            return false
        },
        genFlag(lang) {
            return new URL(`../assets/img/${lang}.png`, import.meta.url).href
        }
    },
    props: {
        movie: Object
    },
    computed: {
        getVote() {
            const newVote = Math.ceil(this.movie.vote_average / 2)
            //console.log(newVote);
            return newVote
        },
    },


}
</script>

<template>
    <div class="col">
        <div class="movie">
            <ol>
                <li><img :src="`${store.imgPath + store.imgDim}` + movie.backdrop_path" alt="img not available"></li>
                <li>
                    Titolo:
                    <span v-if="movie.title">{{ movie.title }}</span>
                    <span v-else> {{ movie.original_name }}</span>
                </li>
                <li v-if="movie.original_title">Titolo Originale: {{ movie.original_title }}</li>
                <li>
                    <img :src="genFlag(movie.original_language)" alt="" v-if="checkFlag(movie.original_language)">
                    <span v-else>{{ movie.original_language }}</span>
                </li>

                <li>Voto: {{ getVote }} / 5 </li>
                <li>
                    <i v-for="n in 5" class="fa-star" :class="n <= getVote ? 'fa-solid' : 'fa-regular'"></i>
                </li>
            </ol>
        </div>
    </div>

</template>

<style lang="scss" scoped>
/* .fa-regular {
    color: gold;
}

.fa-solid {
    color: lightgray;
} */
</style>