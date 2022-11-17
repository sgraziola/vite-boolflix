<script>
export default {
    name: 'MoviesItem',
    data() {
        return {
            availableLanguages: ["en", "it", "es", "fr", "de"]
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
                <li>Titolo: {{ movie.title }}</li>
                <li>Titolo Originale: {{ movie.original_title }}</li>
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
                <li>Voto: {{ movie.vote_average }}</li>
            </ol>
        </div>
    </div>

</template>

<style>

</style>