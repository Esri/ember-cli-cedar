(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['Cedar'] };
  }

  define('cedar', [], vendorModule);
})();
