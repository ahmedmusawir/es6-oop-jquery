import 'bootstrap-scss/bootstrap.scss';
import './App3.scss';
import $ from 'jquery';
import Accordion from './modules/ui/Accordion';

class App3 {
  constructor(app) {
    this.init();
    this.app = app;

    this.addElements();
    this.addEvents();
  }

  init() {
    console.log('App3 Initialized!');
  }

  addElements = () => {
    const ac = new Accordion();
    ac.makeElement(this.app);
  };

  addEvents = () => {
    const dt = $('dt');
    $(dt).on('mouseenter', function() {
      const $this = $(this);
      $this
        .next()
        .slideDown(300)
        .siblings('dd')
        .slideUp(300);
    });
  };
}

export default App3;
