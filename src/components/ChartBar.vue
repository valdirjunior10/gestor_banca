<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "GitHub Commits",
          backgroundColor: "#f87979",
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 100,
            right: 250,
            top: 250,
            bottom: 0
          }
        }
      }
    });
  }
};
</script>