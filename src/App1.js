import 'bootstrap-scss/bootstrap.scss';
import './App1.scss';
import $ from 'jquery';
import Accordion from './modules/ui/Accordion';

class App1 {
  constructor(app) {
    this.init();
    this.app1 = app;

    this.addElements();
    this.addEvents();
  }

  init() {
    console.log('App1 Initialized!');
  }

  addElements = () => {
    const ac = new Accordion();
    ac.makeElement(this.app1);
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

export default App1;
