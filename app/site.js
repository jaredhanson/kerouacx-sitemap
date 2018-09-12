exports = module.exports = function() {
  var kerouac = require('kerouac');
  
  
  var site = kerouac();
  site.page('/sitemap.xml', require('kerouac-sitemap')());
  site.page('/sitemap-index.xml', require('kerouac-sitemap').index());
  return site;
};

exports['@implements'] = [
  'http://i.kerouacjs.org/Site',
  'http://schemas.modulate.io/js/www/sitemap/WWWSite'
];
exports['@require'] = [];
