import './Button.scss';
import $ from 'jquery';
import UIBase from '../framework/UIBase';

class Button extends UIBase {
  constructor(cls = 'btn-primary') {
    super();
    this.cls = cls;
  }

  init = () => {
    console.log('Button Init...');
  };

  getHTML = () => {
    const str = `
      <button class="btn btn-bg ${this.cls}">JS Button</button>
    `;

    return str;
  };
}

export default Button;
