import $ from 'jquery';

class SimpleModule {
  constructor(el) {
    this.init();
    this.el = el;

    this.events();
  }

  init = () => {
    console.log('Simple Module Init');
  };

  events = () => {
    this.el.on('click', this.clickHandler);
  };

  clickHandler = () => {
    console.log('clicked up from Sample Module ...');
  };
}

export default SimpleModule;
