<template>
    <header class="app-header">
        <h2><i class="fa-brands fa-bitcoin" style="color: #fcd535;"></i> Xinance</h2>
       <div class="header-rate">   
           <i class="fa-brands fa-bitcoin" style="color: #fcd535;"></i> <h4> {{ rateToShow }}$</h4>
        </div>
    </header>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service.js'

export default {
    data() {
        return {
            bitcoinRate: null,
            rateToShow: null
        }
    },
    computed: {
      
    },
   async created() {
        this.bitcoinRate = await bitcoinService.getRate()
        this.rateToShow =  this.bitcoinRate?.slice(0,2) + ',' + this.bitcoinRate?.slice(2)
    }

}
</script>

<style lang="scss"></style>