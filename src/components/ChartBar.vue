<template>
  <mdb-container>
    <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="1800" :height="500" style="margin-left: -35%;"></mdb-bar-chart>
  </mdb-container>
</template>

<script>
import { mdbBarChart, mdbContainer } from "mdbvue";
export default {
  name: "ChartPage",
  components: {
    mdbBarChart,
    mdbContainer
  },
  created() {
    this.dadosChart();
  },
  methods: {
    dadosChart() {
      var dados = [];
      var dias = [];
      var cores = [];
      var bordas = [];
      var hexadecimais = "0123456789ABCDEF";
      var data = [];
      for (var i = 1; i <= 31; i++) {
        dados.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
        dias.push(i);

        cores.push("rgba(255, 99, 132, 0.2)");
        cores.push("rgba(54, 162, 235, 1)");
        cores.push("rgba(255, 206, 86, 1)");
        cores.push("rgba(75, 192, 192, 1)");
        cores.push("rgba(153, 102, 255, 1)");
        cores.push("rgba(255, 159, 64, 1)");

        bordas.push("rgba(255, 99, 132, 0.2)");
        bordas.push("rgba(54, 162, 235, 1)");
        bordas.push("rgba(255, 206, 86, 1)");
        bordas.push("rgba(75, 192, 192, 1)");
        bordas.push("rgba(153, 102, 255, 1)");
        bordas.push("rgba(255, 159, 64, 1)");
      }
      data[0] = dias;
      data[1] = dados;
      data[2] = cores;
      data[3] = bordas;
      return data;
    }
  },
  data() {
    return {
      barChartData: {
        labels: this.dadosChart()[0],
        datasets: [
          {
            label: "# of Votes",
            data: this.dadosChart()[1],
            backgroundColor: this.dadosChart()[2],
            borderColor: this.dadosChart()[3],
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
  
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ]
        }
      }
    };
  }
};
</script>