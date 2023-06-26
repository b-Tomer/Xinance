<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
        <input v-model="contact.name" type="text">
        <input v-model.number="contact.balance" type="number">
        <button><i class="fa-solid fa-floppy-disk" ></i></button>
    </form>
</template>

<script>
import { contactService } from '@/services/contactService'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            await contactService.saveContact(this.contact)
            this.$router.push('/contact')
        }
    },
    async created() {
        const contactId = this.$route.params.id
        if(contactId) {
            this.contact = await contactService.getContactById(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>

<style lang="scss">

</style>