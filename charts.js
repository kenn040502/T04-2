// charts.js — T03 visuals (Chart.js)
// Draw only once when Televisions becomes visible

let __chartsDrawn = false;

function drawDonut(ctx, labels, values){
  return new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: ["#60a5fa","#22c55e","#f59e0b","#a78bfa","#94a3b8"],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        title: { display: false }
      },
      cutout: "55%"
    }
  });
}

function drawBar(ctx, labels, values, label, color="#22c55e"){
  return new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{ label, data: values, backgroundColor: color }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { callback: v => v + " kWh" } }
      },
      plugins: {
        legend: { display: true },
        tooltip: { callbacks: { label: c => `${c.dataset.label}: ${c.raw} kWh/yr` } }
      }
    }
  });
}

function drawLine(ctx, labels, values, label, color="#60a5fa"){
  return new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label,
        data: values,
        borderColor: color,
        backgroundColor: "rgba(96,165,250,0.2)",
        tension: 0.25,
        fill: true
      }]
    },
    options: {
      plugins: { legend: { display: true } }
    }
  });
}

function drawT03Charts(){
  if (__chartsDrawn) return;
  const c1 = document.getElementById("chartTechShare");
  const c2 = document.getElementById("chart55kWh");
  const c3 = document.getElementById("chartSpotPrice");
  if (!c1 || !c2 || !c3) return;

  __chartsDrawn = true;

  // ===== Replace these arrays with your KNIME/Excel outputs when ready =====
  const techLabels = ["LED/LCD", "OLED", "QLED", "Mini-LED", "Other"];
  const techShare  = [54, 18, 16, 8, 4];             // percent share of models

  const tech55     = ["LED/LCD", "OLED", "QLED", "Mini-LED"];
  const avgKWh55   = [145, 170, 155, 150];            // kWh/year for 55″

  const years      = ["2018","2019","2020","2021","2022","2023","2024"];
  const spotAvg    = [45, 42, 40, 52, 68, 55, 49];    // generic index/price
  // ========================================================================

  drawDonut(c1, techLabels, techShare);
  drawBar(c2, tech55, avgKWh55, "Average kWh/year (55″)");
  drawLine(c3, years, spotAvg, "Average spot price");
}

// expose so app.js can call when route becomes visible
window.drawT03Charts = drawT03Charts;
