<template>
    <article v-if="contact" class="contact-details">
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
        <div class="contact-info">
            <img src="https://thispersondoesnotexist.com/" alt="">
            <h2>{{ contact.name }}</h2>
        </div>
        <h3>Email: {{ contact.email }}$</h3>
        <h3>Balance: {{ contact.balance }}$</h3>
        <h3>Phone: {{ contact.phone }}$</h3>
    </article>
</template>

<script>
import { contactService } from '../services/contactService'
// import { Arrow } from '@/assets/icons/arrow.svg'
export default {
    data() {
        return {
            contact: null,
            // iconPath: Arrow
        }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = await contactService.getContactById(contactId)
    }
}
</script>

<style lang="scss"></style>