/**
 *
 * main
 *
 */

/* eslint-disable no-console */

import InsertSpanEachCharacter from './modules/InsertSpanEachCharacter';

const target = document.getElementById('js-insertSpan');
const isec = new InsertSpanEachCharacter(target, {
  margin: '24px',
  space: '40px',
});

isec.init();
