<template>
    <article v-if="user" class="user-details">
        <RouterLink to="/user">
            <button>Back</button>
        </RouterLink>
        <div class="user-info">
            <img src="https://thispersondoesnotexist.com/" alt="">
            <h2>{{ user.name }}</h2>
        </div>
        <h3>Balance: {{ user.balance }}$</h3>
    </article>
</template>

<script>
import { userService } from '@/services/user.service.js'
// import { Arrow } from '@/assets/icons/arrow.svg'
export default {
    data() {
        return {
            user: null,
            // iconPath: Arrow
        }
    },
    async created() {
        const userId = this.$route.params.id
        this.user = await userService.getById(userId)
    }
}
</script>

<style lang="scss"></style>