import $ from 'jquery';

class UIBase {
  constructor() {
    this.init();
  }

  init = () => {
    console.log('UIBase init ...');
  };

  makeElement = (el = $('body')) => {
    const str = $(this.getHTML());
    el.append(str);
  };

  getHTML = () => {
    throw 'Plz override getHTML()';
  };
}

export default UIBase;
