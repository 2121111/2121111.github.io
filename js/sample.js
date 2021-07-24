var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data1 = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(255,100,130)',
        backgroundColor: 'rgb(5,25,200)',
        data1: [0, 10, 15, 3, 20, 60, 10],

    }]
};
var config1 = {
    type: 'line' ,
    data1,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config1,
);

const data2 = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'My First Dataset',
      data2: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data2: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

    const config2 = {
        type: 'radar',
        data: data2,
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      };

      var radarChart = new Chart(
        document.getElementById('radarChart'),
        config2,
    );