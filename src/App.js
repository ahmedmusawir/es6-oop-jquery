import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import Accordion from './modules/ui/Accordion';

class Main {
  constructor() {
    this.init();
    this.app = $('#app');

    this.addElements();
    this.addEvents();
  }

  init() {
    console.log('Main Initialized!');
  }

  addElements = () => {
    const ac = new Accordion();
    ac.makeElement(this.app);
  };

  addEvents = () => {
    const dd = $('dd');
    dd.addClass('hide');

    const dt = $('dt');
    $(dt).on('mouseenter', function() {
      // console.log($(this));
      const $this = $(this);
      //STEP 1
      // $this.next().show();
      // $this
      //   .next()
      //   .siblings('dd')
      //   .hide();

      //STEP 2
      // $this
      //   .next()
      //   .show()
      //   .siblings('dd')
      //   .hide();

      //STEP 3
      // $this
      //   .next()
      //   .slideDown()
      //   .siblings('dd')
      //   .slideUp();

      //STEP 4
      $this
        .next()
        .slideDown(1000)
        .siblings('dd')
        .slideUp(1000);
    });
  };
}

const main = new Main();
