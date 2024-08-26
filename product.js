const ctx = document.getElementById('priceChart').getContext('2d');
const priceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Price',
            data: [8000, 6000, 7000, 5000, 9000],
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
