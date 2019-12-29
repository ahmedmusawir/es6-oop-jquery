import 'bootstrap-scss/bootstrap.scss';
import './App.scss';
import $ from 'jquery';
import Accordion from './modules/ui/Accordion';
import Button from './modules/ui/Button';

class Main {
  constructor() {
    this.init();
    this.app1 = $('#app1');
    this.app2 = $('#app2');
    this.app3 = $('#app3');
    this.app4 = $('#app4');

    this.addElements();
  }

  init() {
    console.log('Main Initialized!');
  }

  addElements = () => {
    const ac = new Accordion();
    ac.makeElement(this.app1);

    const btn2 = new Button('btn-danger');
    btn2.makeElement(this.app2);

    const btn3 = new Button('btn-dark');
    btn3.makeElement(this.app3);

    const btn4 = new Button('btn-secondary');
    btn4.makeElement(this.app4);
  };
}

const main = new Main();
