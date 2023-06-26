<template>
    <section class="contact-index">
        <div class="secondery-header">
            <ContactFilter @filter="onSetFilterBy" />
            <RouterLink to="/contact/edit"><button>Add contact</button></RouterLink>
        </div>
        <ContactList @remove="deleteContact" v-if="contacts" :contacts="filteredContacts" />
        <ContactMsg />
    </section>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js'
import ContactList from '@/cmps/contacts/ContactList.vue'
import ContactFilter from '@/cmps/contacts/ContactFilter.vue'
import ContactMsg from '@/cmps/ContactMsg.vue'
import { toRaw } from 'vue'

export default {
    data() {
        return {
            filterBy: {},
        }
    },
    methods: {
        async deleteContact(contactId) {
            const currContact = toRaw(this.contacts).filter(c => c._id === contactId)
            const msg = {
                txt: `Contact ${currContact[0].name} removed...`,
                type: 'success',
            }

            this.$store.dispatch({ type: 'removeContact', contactId })
            eventBus.emit('contact-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        await this.$store.dispatch({ type: 'loadContacts' })
    },
    components: {
        ContactList,
        ContactFilter,
        ContactMsg,
    }
}
</script>

<style lang="scss"></style>