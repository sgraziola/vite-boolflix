<script>
export default {
    name: 'MoviesItem',
    props: {
        movie: Object
    }

}
</script>

<template>
    <div class="col">
        <div class="movie">
            <ol>
                <li>Titolo: {{ movie.title }}</li>
                <li>Titolo Originale: {{ movie.original_title }}</li>
                <li>Lingua: {{ movie.original_language }}</li>
                <li>Voto: {{ movie.vote_average }}</li>
            </ol>
        </div>
    </div>

</template>

<style>

</style>