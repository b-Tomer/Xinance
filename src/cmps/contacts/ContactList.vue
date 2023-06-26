<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact"/>
                <section class="actions">
                    <SvgMoney />
                    <RouterLink :to="`/contact/${contact._id}`">
                        <button title="Details"><i class="fa-regular fa-circle-question" style="color: #707a8a;"></i></button>
                    </RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`">
                        <button><i class="fa-regular fa-pen-to-square" style="color: #707a8a;"></i></button>
                    </RouterLink>
                    <button title="Delete" @click="onRemoveContact(contact._id)"><i class="fa-solid fa-trash-can" style="color: #707a8a;"></i></button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>

import SvgMoney from '../../assets/icons/money.svg'
import ContactPreview from '@/cmps/contacts/ContactPreview.vue'
export default {
    props: {
        contacts: { type: Array, required: true },
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
        SvgMoney
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