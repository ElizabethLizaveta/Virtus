/* eslint-disable no-unused-vars */
const circleProgress = (($) => {
  function circleRun() {
    const progressBarOptions = {
      startAngle: -1.55,
      size: 76,
      value: 0.75,
      fill: '#ffa500',
      emptyFill: '#505464',
      thickness: 4,
    };

    const data = [75, 35, 62];

    $('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', (_event, progress, stepValue) => {
      // $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });

    $('.circle-1').circleProgress({
      value: data[0] / 100,
      fill: {
        color: '#2295f0',
      },
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('.progress').html(`${Math.round(data[0] * progress)}%`);
    });

    $('.circle-2').circleProgress({
      value: data[1] / 100,
      fill: {
        color: '#2295f0',
      },
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('.progress').html(`${Math.round(data[1] * progress)}%`);
    });

    $('.circle-3').circleProgress({
      value: data[2] / 100,
      fill: {
        color: '#2295f0',
      },
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('.progress').html(`${Math.round(data[2] * progress)}%`);
    });
  }
  const init = () => {
    circleRun();
  };
  return { init };
})(jQuery);

export default circleProgress;
