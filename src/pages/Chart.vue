<template>
    <section class="chart">

        <h4>Market Price (USD)</h4>
        <Bar id="my-chart-id" :options="chartOptions" v-if="chartData.datasets" :data="chartData" />
    </section>
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { bitcoinService } from '../services/bitcoin.service.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'Chart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May ', 'June'],
                datasets: [{ data: [16838.1, 22724.23, 24438.1, 28332.42, 27816.18, 26849.97] }]
            },
            chartOptions: {
                responsive: true
            },
            data: null
        }
    },
    // methods: {

    // },
    // computed: {

    // },
    async created() {
        const monthsData = await bitcoinService.getMarketPriceHistory()
        this.chartData.datasets = [{ data: monthsData }]

    },
}
</script>