<script>
import { store } from '../store.js'
import SearchBox from './SearchBox.vue'

export default {
    name: 'AppHeader',
    components: {
        SearchBox
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        this.store.callApi()
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <SearchBox @searchMovie="this.store.callApi()" />

    </header>

</template>

<style>

</style>