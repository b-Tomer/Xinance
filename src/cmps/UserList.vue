<template>
    <section class="user-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="user in users" :key="user.id">
                <UserPreview :user="user"/>
                <section class="actions">
                    <RouterLink :to="`/user/${user.id}`">
                        <button><i class="fa-regular fa-circle-question" style="color: #707a8a;"></i></button>
                    </RouterLink>
                    <RouterLink :to="`/user/edit/${user.id}`">
                        <button><i class="fa-regular fa-pen-to-square" style="color: #707a8a;"></i></button>
                    </RouterLink>
                    <button @click="onRemoveUser(user.id)"><i class="fa-solid fa-trash-can" style="color: #707a8a;"></i></button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>
import UserPreview from '@/cmps/UserPreview.vue'
export default {
    props: {
        users: { type: Array, required: true },
    },
    methods: {
        onRemoveUser(userId) {
            this.$emit('remove', userId)
        }
    },
    components: {
        UserPreview,
    }
}
</script>

<style lang="scss">
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>