// Sample data for the charts
const revenueByJobTypeData = {
    labels: ['Job Type 1', 'Job Type 2', 'Job Type 3'],
    datasets: [{
        label: 'Revenue',
        data: [12000, 19000, 3000],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1
    }]
};

const revenueByJobLocationData = {
    labels: ['Location 1', 'Location 2', 'Location 3'],
    datasets: [{
        label: 'Revenue',
        data: [15000, 22000, 25000],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1
    }]
};

  
// Create the charts
const revenueByJobTypeCtx = document.getElementById('revenueByJobType').getContext('2d');
const revenueByJobLocationCtx = document.getElementById('revenueByJobLocation').getContext('2d');

const revenueByJobTypeChart = new Chart(revenueByJobTypeCtx, {
    type: 'bar',
    data: revenueByJobTypeData,
    options: {
        indexAxis: 'y', // Make the chart horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

const revenueByJobLocationChart = new Chart(revenueByJobLocationCtx, {
    type: 'bar',
    data: revenueByJobLocationData,
    options: {
        indexAxis: 'y', // Make the chart horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});

// Update components with sample data
document.getElementById('totalRevenue').textContent = '$31,000';
document.getElementById('totalJobs').textContent = '100';
// Add more updates for other components as needed
