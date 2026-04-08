// dashboard.js

// This file handles Chart.js graphs for trends

// Function to initialize a Chart
function initializeChart(ctx, data, options) {
    return new Chart(ctx, {
        type: 'line', // Example: line chart
        data: data,
        options: options
    });
}

// Function to update Chart data
function updateChart(chart, newData) {
    chart.data.datasets[0].data = newData;
    chart.update();
}

// Example data and options for the Chart
const exampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Example Trend',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1
    }]
};

const exampleOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Function to render the chart on page load
window.onload = function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = initializeChart(ctx, exampleData, exampleOptions);
};
