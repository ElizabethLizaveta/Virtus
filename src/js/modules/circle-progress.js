const circleProgress = (($) => {
  function circleRun() {
    $('.test-c').circleProgress({
      value: 0.6,
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('span').html(`${Math.round(100 * progress)}<i>%</i>`);
    });
  }
  const init = () => {
    circleRun();
  };
  return { init };
})(jQuery);

export default circleProgress;
