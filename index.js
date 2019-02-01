const acorn = require('acorn');
const jsx = require('acorn-jsx');

(() => (<div class="one two three">{acorn} {jsx}</div>))();
