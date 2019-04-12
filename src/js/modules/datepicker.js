const datePick = (($) => {
  function datePickerInit() {
    $('.datepicker').datepicker({
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      dayNamesShort: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      showOtherMonths: true,
    });
  }

  const init = () => {
    datePickerInit();
  };
  return { init };
})(jQuery);

export default datePick;
