<template>
    <form @submit.prevent="save" v-if="user" class="user-edit">
        <input v-model="user.name" type="text">
        <input v-model.number="user.balance" type="number">
        <button><i class="fa-solid fa-floppy-disk" ></i></button>
    </form>
</template>

<script>
import { userService } from '@/services/user.service.js'

export default {
    data() {
        return {
            user: null,
        }
    },
    methods: {
        async save() {
            await userService.save(this.user)
            this.$router.push('/user')
        }
    },
    async created() {
        const userId = this.$route.params.id
        if(userId) {
            this.user = await userService.getById(userId)
        } else {
            this.user = userService.getEmptyUser()
        }
    }
}
</script>

<style lang="scss">

</style>