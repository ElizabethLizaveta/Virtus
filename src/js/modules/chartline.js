import Chart from 'chart.js';

const chartLine = (($) => {
  function chartInit() {
    const speedCanvas = $('.chartline');

    Chart.defaults.global.defaultFontFamily = 'Montserrat';
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.defaultFontColor = '#9ca1b2';

    const speedData = {
      labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      datasets: [{
        data: [0, 16, 10, 14, 7, 22, 12],
        backgroundColor: '#2d4361',
        borderColor: '#2196f3',
      }],
    };

    const chartOptions = {
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
          gridLines: {
            color: '#505464',
          },
        }],
      },
    };

    const lineChart = new Chart(speedCanvas, {
      type: 'line',
      data: speedData,
      options: chartOptions,
    });
  }
  const init = () => {
    chartInit();
  };

  return { init };
})(jQuery);

export default chartLine;
