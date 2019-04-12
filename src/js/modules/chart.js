import Chart from 'chart.js';

const chart = (($) => {
  function chartLineInit() {
    const speedCanvas = $('.chartline');

    Chart.defaults.global.defaultFontFamily = 'Montserrat';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#9ca1b2';

    const speedData = {
      labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      datasets: [{
        data: [0, 16, 10, 13, 6, 19, 6],
        backgroundColor: '#2d4361',
        borderColor: '#2196f3',
        pointBackgroundColor: '#2d4361',
        pointBorderColor: '#2196f3',
        pointHoverBackgroundColor: '#fff',
        pointRadius: 5,
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 3,
      }],
    };

    const chartOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
          },
        }],
        xAxes: [{
          offset: true,
          gridLines: {
            color: '#505464',
          },
          ticks: {
            min: 'MON',
            max: 'FRI',
          },
          gridLines: {
            offsetGridLines: 'true',
            color: '#454858',
          },
        }],
      },
      layout: {
        padding: {
          top: 180,
          bottom: 0,
        },
      },
    };

    const lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions,
    });
  }

  function chartBarInit() {
    Chart.defaults.global.defaultFontFamily = 'Montserrat';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#9ca1b2';
    // eslint-disable-next-line no-new
    new Chart($('.chartbar'), {
      type: 'bar',
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        datasets: [
          {
            backgroundColor: '#505464',
            hoverBackgroundColor: '#2196f3',
            data: [0, 3.5, 5, 3.9, 2.5, 1.6, 2.5, 2.5, 3.6, 2.9, 4.6, 3.9, 1.2],
          },
        ],
      },
      options: {
        legend: { display: false },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
            },
          }],
          yAxes: [{
            gridLines: {
              color: '#505464',
            },
          }],
        },
        animation: {
          duration: 500,
          easing: 'linear',
        },
      },
    });
  }

  const init = () => {
    chartLineInit();
    chartBarInit();
  };

  return { init };
})(jQuery);

export default chart;
