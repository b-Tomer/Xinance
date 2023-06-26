<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit">
        <div class="inline">
            <h4>To: </h4>
            <h4>{{ contact.name }}</h4>
        </div>
        <h4>How much? </h4>
        <input v-model="transferAmount" type="number">
        <button style="font-size: 0.9rem;">Send</button>
    </form>
</template>

<script>
import { contactService } from '@/services/contactService'
import { eventBus } from '@/services/eventBus.service.js'

export default {
    data() {
        return {
            contact: null,
            transferAmount: 0,
        }
    },
    methods: {
        async save() {
            const updatedBalance = this.contact.balance + parseInt(this.transferAmount)
            this.contact.balance = updatedBalance
            const msg = {
              txt: `You just transfered ${this.transferAmount} to ${this.contact.name}`,
              type: 'success'
            }
            eventBus.emit('contact-msg', msg)
            await contactService.saveContact(this.contact)
            this.$router.push('/contact')
        },
        onChangeBalance() {
            const inputValue = this.$refs.transferRef.value
            this.contactToSave = { ...this.contact, balance: this.contact.balance + inputValue }

        }
    },
    async created() {
        const contactId = this.$route.params.id
        if (contactId) {
            this.contact = await contactService.getContactById(contactId)
        }
    }
}
</script>

<style lang="scss">
.inline {
    display: flex;
    gap: 10px;
}
</style>