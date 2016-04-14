var bespoke = require('bespoke');
var backdrop = require('bespoke-backdrop');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var keys = require('bespoke-keys');
var progress = require('bespoke-progress');
var scale = require('bespoke-scale');
var theme = require('bespoke-theme-build-wars');
var touch = require('bespoke-touch');

bespoke.from('article', [
  theme(),
  keys(),
  touch(),
  backdrop(),
  scale(),
  hash(),
  progress(),
  bullets()
]);

require('prism');
require('prism/components/prism-ruby');
