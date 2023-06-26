<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="actions">
                    <!-- <SvgMoney /> -->
                    <RouterLink :to="`/contact/transfer/${contact._id}`">
                        <button class="btn-svg">
                            <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                                        stroke="#fcd535" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M12 7.5V16.5" stroke="#fcd535" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                                        stroke="#fcd535" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M17 3V7H21" stroke="#fcd535" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M22 2L17 7" stroke="#fcd535" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>

                            </svg>
                        </button>
                    </RouterLink>

                    <RouterLink :to="`/contact/${contact._id}`">
                        <button title="Details"><i class="fa-regular fa-circle-question"
                                style="color: #707a8a;"></i></button>
                    </RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`">
                        <button><i class="fa-regular fa-pen-to-square" style="color: #707a8a;"></i></button>
                    </RouterLink>
                    <button title="Delete" @click="onRemoveContact(contact._id)"><i class="fa-solid fa-trash-can"
                            style="color: #707a8a;"></i></button>
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
.list-move,
/* apply transition to moving elements */
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

.btn-svg {
    padding-top: 3px;
    width: 34px;
}

.actions {
    width: 150px;
    display: flex;
}</style>