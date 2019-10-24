<template lang="html">
  <div v-if="chartData.length">
    <h1>Energy Chart</h1>
    <GChart
    type="PieChart"
    :data="chartData"
    :options="chartOptions"
    :resizeDebounce=1000
    />
  </div>

</template>

<script>
import {eventBus} from './main.js'
import {GChart} from "vue-google-charts"
import VueGoogleCharts from 'vue-google-charts'


export default {
  name: 'app',
  data(){
    return {
      chartData: [],
      mappedData: [],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  },
  mounted(){
    fetch('https://api.carbonintensity.org.uk/generation')
    .then(response => response.json())
    .then(res => this.chartData = [['header 1', 'Fuel Consumption'], ...this.transformData(res.data.generationmix)])

  },
  methods: {
    transformData(arr){
      return arr.map((energy) => {
        return [energy.fuel, energy.perc]
      })
    }
  },
  components: {
    GChart
  }
}

</script>

<style lang="css" scoped>

</style>
