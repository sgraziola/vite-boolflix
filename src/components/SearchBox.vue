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
    <div class="search d-flex gap-2">
        <input type="search" class="form-control" v-model="store.apiQuery" @keyup.enter="$emit('searchMovie')"
            placeholder="Search by name">
        <button type="submit" class="btn btn-primary" @click="$emit('searchMovie')">Cerca</button>
    </div>

</template>

<style>

</style>