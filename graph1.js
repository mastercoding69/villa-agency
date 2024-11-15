var ctx = document.getElementById('barchard').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PEMBELI', 'TEMPAT', 'HARGA',],
        datasets: [{
            label: '# of Votes',
            data: [3, 5, 6, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 16)',
                'rgba(54, 162, 235, 16)',
                'rgba(255, 206, 86, 16)',
                'rgba(75, 192, 192, 16)',
                'rgba(153, 102, 255,16)',
                'rgba(255, 159, 64, 16)'
            ],
            borderColor: [
                'rgba(150, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(150, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(150, 102, 255, 1)',
                'rgba(150, 159, 64, 1)'
            ],
            borderWidth: 1
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