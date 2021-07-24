var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(255,100,130)',
        backgroundColor: 'rgb(5,25,200)',
        data: [0, 10, 15, 3, 20, 60, 10],

    }]
};

var config = {
    type: 'line' ,
    data,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);
