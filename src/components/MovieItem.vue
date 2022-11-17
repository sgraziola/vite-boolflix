
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
        getVote(num) {
            const newVote = Math.ceil(num / 2)
            return newVote
        }
    },
    props: {
        movie: Object
    },


}
</script>

<template>
    <div class="col">
        <div class="movie">
            <ol>
                <li><img :src="`${store.imgPath}${store.imgDim}` + movie.backdrop_path" alt="img not available"></li>
                <li>
                    Titolo:
                    <span v-if="movie.title">{{ movie.title }}</span>
                    <span v-else> {{ movie.original_name }}</span>
                </li>
                <li v-if="movie.original_title">Titolo Originale: {{ movie.original_title }}</li>
                <li v-if="!availableLanguages.includes(movie.original_language)"> Lingua: {{ movie.original_language }}
                </li>
                <li v-else>
                    Lingua:
                    <span v-if="movie.original_language == 'en'"><img src="../assets/img/en.png" alt=""></span>
                    <span v-if="movie.original_language == 'it'"><img src="../assets/img/it.png" alt=""></span>
                    <span v-if="movie.original_language == 'fr'"><img src="../assets/img/fr.png" alt=""></span>
                    <span v-if="movie.original_language == 'de'"><img src="../assets/img/de.png" alt=""></span>
                    <span v-if="movie.original_language == 'es'"><img src="../assets/img/es.png" alt=""></span>

                </li>
                <li>Voto: {{ getVote(movie.vote_average) }}
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-regular fa-star" />

                </li>
            </ol>
        </div>
    </div>

</template>

<style>

</style>