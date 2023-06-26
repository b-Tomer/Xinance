<template>
    <Transition>
        <section v-if="msg" class="contact-msg" :class="msgClass">
            <p>{{ msg.txt }}</p>
        </section>
    </Transition>
</template>

<script>
import { eventBus } from '@/services/eventBus.service.js'

export default {
    data() {
        return {
            msg: null,
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => (this.msg = null), msg.timeout || 1500)
        },
    },
    computed: {
        msgClass() {
            return {
                success: this.msg.type === 'success',
                fail: this.msg.type === 'fail',
            }
        },
    },
    created() {
        this.unListen = eventBus.on('contact-msg', this.showMsg)
    },
    unmounted() {
        this.unListen()
    },
}
</script>

<style lang="scss">
.contact-msg {
    transform-origin: left;
    position:absolute;
    top: 80vh;
    left: 5px;
    width: 200px;
    height: fit-content;
}
.v-enter-active,
.v-leave-active {
    transition: 0.8s ease;
}

.v-enter-from,
.v-leave-to {
    scale: 0 1;
    opacity: 0;
}
</style>
