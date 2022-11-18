
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
        <div class="card movie">
            <img :src="`${store.imgPath + store.imgDim}` + movie.poster_path" alt="img not available">
            <div class="card-body">
                <div class="card-title">
                    <strong>Titolo: </strong>
                    <span v-if="movie.title">{{ movie.title }}</span>
                    <span v-else> {{ movie.name }}</span>
                </div>

                <div class="card-title">
                    <strong>Titolo Originale: </strong>
                    <span v-if="movie.original_title">{{ movie.original_title }}</span>
                    <span v-else> {{ movie.original_name }}</span>
                </div>

                <div class="card-title">
                    <strong>Lingua: </strong>
                    <img :src="genFlag(movie.original_language)" alt="" v-if="checkFlag(movie.original_language)">
                    <span v-else>{{ movie.original_language }}</span>
                </div>

                <div class="card-title">
                    <strong>Voto: </strong>
                    <i v-for="n in 5" class="fa-star" :class="n <= getVote ? 'fa-solid' : 'fa-regular'"></i>
                </div>
                <div class="card-text">
                    <strong>Overview: </strong>
                    <span>{{ movie.overview }}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.col {
    img {
        height: inherit;
        object-fit: cover;
        border-radius: 0.375rem;
    }

    .movie {
        height: 352px;

        .card-body {
            display: none;

            img {
                border-radius: 0;
            }

            .card-title,
            .card-text {
                font-size: 14px;
            }

            .card-text {
                height: 170px;
                overflow: auto;
            }
        }

    }

    .movie:hover .card-body {
        display: inline-block;
    }

    .movie:hover>img {
        display: none;
    }

}
</style>