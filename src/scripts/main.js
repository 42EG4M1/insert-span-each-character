/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import InsertSpanEachCharacter from './modules/InsertSpanEachCharacter';

const isec = new InsertSpanEachCharacter(document.getElementById('js-insertSpan'), {
  margin: '24px',
  space: '40px',
});

isec.init();
