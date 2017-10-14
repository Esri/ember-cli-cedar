(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['cedar'] };
  }

  define('cedar', [], vendorModule);
})();
