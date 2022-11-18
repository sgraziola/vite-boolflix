
<script>
import axios from 'axios';
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
        },
        /* callTvCastApi() {
            this.store.movies.forEach(movie => {
                const castUrl = `${this.store.baseUrl}tv/${id}/credits?api_key=${this.store.apiKey}`
                axios.get(castUrl)
                    .then(response => {
                        let cast = "";
                        let castLength = 0;
                        if (response.data.cast.length < 5) {
                            castLength = response.data.cast
                        } else {
                            castLength = 5
                        }
                        for (let i = 0; i < castLength; i++) {
                            cast += response.data.cast[i].name;
                        }

                        store.actors.push(cast)
                    }).catch(err => {
                        //console.error(err.message);
                        this.store.error = err.message
                    })

            });
        } */
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

                <!-- <div class="card-title">
                    <strong v-if="store.actors">Attori: </strong>
                    <span>{{ }}</span>
                </div> -->

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