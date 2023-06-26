<template>
    <section class="user-filter">
        <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
        <input @input="onSetFilterBy" v-model="filterBy.txt" placeholder="search.." type="text">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">

</style>