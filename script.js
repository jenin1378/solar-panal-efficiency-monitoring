const ctx = document.getElementById('effChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM'],
    datasets: [{
      label: 'Efficiency (%)',
      data: [85, 88, 91, 89, 84, 80],
      borderColor: 'orange',
      borderWidth: 2,
      fill: false,
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});