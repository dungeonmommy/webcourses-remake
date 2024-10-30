$(document).ready(function() {
    var ctx = document.getElementById('gradeChart').getContext('2d');
    var currentGrade = 83; // Set this dynamically based on actual calculations
    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Current Grade', 'Remaining to 100'],
            datasets: [{
                data: [currentGrade, 100 - currentGrade],
                backgroundColor: ['#36A2EB', '#E0E0E0'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });
});