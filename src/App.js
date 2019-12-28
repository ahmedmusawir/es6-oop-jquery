import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import Accordion from './modules/ui/Accordion';

class Main {
  constructor() {
    this.init();
    this.app = $('#app');

    this.addElements();
  }

  init() {
    console.log('Main Initialized!');
  }

  addElements = () => {
    const ac = new Accordion();
    ac.makeElement(this.app);
  };
}

const main = new Main();
