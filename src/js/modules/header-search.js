const headerSearch = (($) => {
  const search = $('.search');
  const searchBtn = search.find('.search-button');
  const searchInput = search.find('.search-field');
  const STATE_CLASS = 'is-visible';

  function inputShow() {
    searchBtn.click(() => {
      if (!searchInput.hasClass(STATE_CLASS)) {
        searchInput.toggleClass(STATE_CLASS);
      }
    });
  }

  function inputHide() {
    $(document).mouseup((e) => {
      if (!searchInput.is(e.target)) {
        searchInput.removeClass(STATE_CLASS);
        searchInput.val('');
      }
    });
  }

  const init = () => {
    inputShow();
    inputHide();
  };
  return { init };
})(jQuery);

export default headerSearch;
