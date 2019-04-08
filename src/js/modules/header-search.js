const headerSearch = (($) => {
  const searchBtn = $('.search-button');
  const searchInput = $('.search-field');

  function inputShow() {
    searchBtn.click(() => {
      if (!searchInput.hasClass('is-visible')) {
        searchInput.toggleClass('is-visible');
      }
    });
  }

  function inputHide() {
    $(document).mouseup((e) => {
      if (!searchInput.is(e.target)) {
        searchInput.removeClass('is-visible');
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
