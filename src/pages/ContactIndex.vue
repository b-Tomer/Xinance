<template>
    <section class="contact-index">
        <div class="secondery-header">
            <ContactFilter @filter="onSetFilterBy" />
            <RouterLink to="/contact/edit"><button>Add</button></RouterLink>
        </div>
        <ContactList @remove="deleteContact" v-if="contacts" :contacts="filteredContacts" />
        <ContactMsg />
    </section>
</template>

<script>
import { contactService } from '../services/contactService'
import { eventBus } from '@/services/eventBus.service.js'
import { toRaw } from 'vue';
import ContactList from '@/cmps/contacts/ContactList.vue'
import ContactFilter from '@/cmps/contacts/ContactFilter.vue'
import ContactMsg from '@/cmps/ContactMsg.vue'

export default {
    data() {
        return {
            contacts: null,
            filterBy: {},
        }
    },
    methods: {
        async deleteContact(contactId) {
            const currContact = toRaw(this.contacts).filter(c => c._id === contactId);
            const msg = {
                txt: `Contact ${currContact[0].name} removed...`,
                type: 'success',
            }
            await contactService.deleteContact(contactId)

            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx, 1)
            eventBus.emit('contact-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
            console.log('filterBy: ', filterBy)
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList,
        ContactFilter,
        ContactMsg,
    }
}
</script>

<style lang="scss"></style>