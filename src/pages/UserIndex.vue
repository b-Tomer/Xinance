<template>
    <section class="user-index">
        <div class="secondery-header">
            <UserFilter @filter="onSetFilterBy"/>
            <RouterLink to="/user/edit"><button>Add</button></RouterLink>
        </div>
        <UserList @remove="removeUser" v-if="users" :users="filteredUsers"/>
        <UserMsg />
    </section>
</template>

<script>
import { userService } from '@/services/user.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import UserList from '@/cmps/UserList.vue'
import UserFilter from '@/cmps/UserFilter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
    data() {
        return {
            users: null,
            filterBy: {},
        }
    },
    methods: {
        async removeUser(userId) {
            const msg = {
                txt: `User ${userId} removed...`,
                type: 'success',
                // timeout: 2500,
            }
            await userService.remove(userId)

            const idx = this.users.findIndex(user => user.id === userId)
            this.users.splice(idx, 1)
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredUsers() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.users.filter(user => regex.test(user.name))
        }
    },
    async created() {
        this.users = await userService.query()
    },
    components: {
        UserList,
        UserFilter,
        UserMsg,
    }
}
</script>

<style lang="scss">

</style>