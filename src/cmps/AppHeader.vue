<template>
    <header class="app-header">
        <h2><i class="fa-brands fa-bitcoin" style="color: #fcd535;"></i> Xinance</h2>
        <LoginSignUp @changeStatus="onChangeLoginStatus" v-if="!isLogedIn"/>
       <div v-if="isLogedIn">
           <h3>Hello {{ loggedInUser }}</h3>
            <button v-on:click="onSignOut" class="btn">Sign out</button>
        </div>

        <div class="header-rate">
            <i class="fa-brands fa-bitcoin" style="color: #fcd535;"></i>
            <h4> {{ rateToShow }}$</h4>
        </div>
    </header>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service.js'
import LoginSignUp from '@/cmps/LoginSignUp.vue'
import { userService } from '../services/user.service'

export default {
    data() {
        return {
            bitcoinRate: null,
            rateToShow: null,
            isLogedIn: false,
            loggedInUser: null
        }
    },
    components: {
        LoginSignUp
    },
    async created() {
        this.bitcoinRate = await bitcoinService.getRate()
        this.rateToShow = this.bitcoinRate?.slice(0, 2) + ',' + this.bitcoinRate?.slice(2)
        const loggedIn = JSON.parse(sessionStorage.getItem('STORAGE_KEY_LOGGEDIN_USER'))
        if (loggedIn){
         this.isLogedIn = true
        this.loggedInUser = loggedIn?.fullname
        }
    },
    computed: {
        onChangeLoginStatus(user) {
            if(user){
                this.isLogedIn = false
                this.loggedInUser= user.fullname
            }
        },
        onSignOut(){
            userService.logout()
            console.log('heyyy');
        }
    },
    methods:{
    }

}
</script>

<style lang="scss">
.btn{
    border:none;
    cursor: pointer;
    background-color: inherit;
    color:rgb(185, 185, 192)
}
</style>