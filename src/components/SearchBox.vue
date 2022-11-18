<script>
import { store } from '../store.js'
export default {
    name: 'SearchBox',
    emits: ['searchMovie'],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="d-flex" role="search">
        <button type="submit" class="btn btn-light border-end-0 rounded-start" @click="$emit('searchMovie')">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
        <input type="search" class="form-control border-start-0 rounded-end me-2" placeholder="Search"
            aria-label="Search" v-model="store.apiQuery" @keyup.enter="$emit('searchMovie')">
    </div>

</template>

<style lang="scss" scoped>
.btn,
.form-control {
    border-radius: 0;
}
</style>