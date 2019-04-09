const projectSort = (($) => {
  function sort() {
    $('.ui-sortable').sortable({
      connectWith: '.ui-sortable',
      dropOnEmpty: true,
      placeholder: 'sortable-placeholder',
    });
  }

  const init = () => {
    sort();
  };
  return { init };
})(jQuery);

export default projectSort;
