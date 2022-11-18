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
    }
}
</script>

<template>
    <header>
        <nav class="navbar  navbar-dark navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-danger" href="#">BOOLFLIX</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Film</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Originali</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">La mia lista</a>
                        </li>
                    </ul>
                    <SearchBox @searchMovie="this.store.callApi()" />
                </div>
            </div>
        </nav>
    </header>

</template>

<style lang="scss" scoped>

</style>