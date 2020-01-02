import $ from 'jquery';

class UIBase {
  constructor() {
    console.log('UIBase Init');
  }

  makeElement = (el = $('body')) => {
    let str = $(this.getHTML());
    el.append(str);
  };

  getHTML = () => {
    throw 'Plz override getHTML() ...';
  };
}

export default UIBase;
