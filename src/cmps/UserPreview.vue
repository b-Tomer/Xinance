<template>
    <article class="user-preview">
        <h2>{{user.name}}</h2>
        <!-- <h3>{{user.balance}}</h3> -->
    </article>
</template>

<script>
export default {
    props: {
        user: { type: Object, required: true },
    }
}
</script>

<style lang="scss">

</style>