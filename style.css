// Generate simulated data for charts
function generateData(count, min, max) {
  return Array.from({ length: count }, () =>
    (Math.random() * (max - min) + min).toFixed(2)
  );
}

const labels = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];
let powerData = generateData(8, 200, 400);
let tempData = generateData(8, 25, 45);
let irrData = generateData(8, 600, 1000);
let effData = generateData(8, 70, 95);

function createChart(ctxId, label, data, color) {
  const ctx = document.getElementById(ctxId);
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        borderColor: color,
        borderWidth: 2,
        fill: false,
        tension: 0.2
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

// Create 4 charts
createChart('powerChart', 'Power Output (W)', powerData, 'orange');
createChart('tempChart', 'Temperature (°C)', tempData, 'red');
createChart('irrChart', 'Irradiance (W/m²)', irrData, 'gold');
createChart('effChart', 'Efficiency (%)', effData, 'green');

// Summary stats
const avgEff = (effData.reduce((a,b)=>parseFloat(a)+parseFloat(b),0)/effData.length).toFixed(2);
const maxPower = Math.max(...powerData.map(parseFloat)).toFixed(2);
const avgTemp = (tempData.reduce((a,b)=>parseFloat(a)+parseFloat(b),0)/tempData.length).toFixed(2);

document.getElementById('avgEff').textContent = avgEff;
document.getElementById('maxPower').textContent = maxPower;
document.getElementById('avgTemp').textContent = avgTemp;

// Auto-refresh data every 10 seconds (simulated)
setInterval(() => {
  powerData = generateData(8, 200, 400);
  tempData = generateData(8, 25, 45);
  irrData = generateData(8, 600, 1000);
  effData = generateData(8, 70, 95);
  location.reload();
}, 10000);
