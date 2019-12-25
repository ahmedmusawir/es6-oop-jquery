import './Button.scss';
import $ from 'jquery';

class Button {
  constructor(title, targetContainer) {
    this.init();

    this.title = title;
    this.target = targetContainer;
    // console.log(targetContainer);
  }

  init = () => {
    console.log('Button initialized');
  };

  makeElement = (styles, status) => {
    const btn = $('<button></button>');
    btn.text(this.title);
    btn.addClass(styles);
    btn.attr('data-file', status);

    this.target.append(btn);
  };
}

export default Button;
