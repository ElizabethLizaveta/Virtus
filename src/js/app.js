// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.
import headerSearch from './modules/header-search';
import projectSort from './modules/project-sort';
import chartBar from './modules/chartbar';

(($) => {
  // When DOM is ready
  $(() => {
    headerSearch.init();
    projectSort.init();
    chartBar.init();
  });
})(jQuery);
