
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
    props: {
        movie: Object
    },
    computed: {
        getVote() {
            const newVote = Math.ceil(this.movie.vote_average / 2)
            console.log(newVote);
            return newVote
        },
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
                <li>Voto: {{ getVote }} / 5 </li>
                <li>
                    <font-awesome-icon v-for="n in 5" icon="fa-star"
                        :class="n <= getVote ? 'fa-regular' : 'fa-solid'" />

                </li>
            </ol>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.fa-regular {
    color: gold;
}

.fa-solid {
    color: lightgray;
}
</style>