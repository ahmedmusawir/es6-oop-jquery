import './Button.scss';
import $ from 'jquery';
import UIBase from '../framework/UIBase';

class Button extends UIBase {
  constructor(cls = 'custom-button') {
    super();
    this.cls = cls;
  }

  getHTML = () => {
    let strHtml = `
      <button class="btn btn-dark ${this.cls}">Contact Us</button>
    `;

    return strHtml;
  };
}

export default Button;
