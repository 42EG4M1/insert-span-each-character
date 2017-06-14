/**
 *
 * InsertSpanEachCharacter
 *
 */

/* eslint-disable no-console */

export default class InsertSpanEachCharacter {
  constructor(element, options) {
    this.element = element;
    this.options = options;
    this.settings = {};
    this.settings.margin = '50px';
    this.settings.space = '50px';
    this.prop = {};
  }
  merge() {
    if (this.options !== undefined) {
      this.prop = Object.assign(this.settings, this.options);
    } else {
      Object.assign(this.prop, this.settings);
    }
  }
  init() {
    this.merge();
    const charArr = this.element.textContent.split('');
    const spanMargin = `<span style='margin-left: ${this.prop.margin};'>`;
    const tagArr = [];
    charArr.forEach((item, i) => {
      const ar = i === 0 ? `<span>${item}</span>` : `${spanMargin}${item}</span>`;
      tagArr.push(ar);
    });
    const beforeText = tagArr.join('');
    const searchText = new RegExp(`${spanMargin}\\s<\\/span>${spanMargin}`, 'gi');
    const replaceText = `<span style='margin-left: ${this.prop.space};'>`;
    const afterText = beforeText.replace(searchText, replaceText);
    this.element.innerHTML = afterText;
  }
}
